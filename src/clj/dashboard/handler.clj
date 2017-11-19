(ns dashboard.handler
  (:require [dashboard.core :as core :refer [fetch-state! store-post-and-broadcast! generate-state-and-broadcast!]]
            [compojure.core :refer [context routes defroutes GET POST wrap-routes]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [clojure.java.io :as io]
            [org.httpkit.server :refer [run-server]]
            [taoensso.sente :as sente] 
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [ring.util.response :refer [redirect response content-type]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors :refer [wrap-cors]]
            )
  (:gen-class))

(timbre/set-level! :trace) 

(let [;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      chsk-server
      (sente/make-channel-socket-server!
       ;; TODO replace custom id with sensible session based id generation
       (get-sch-adapter) {:packer packer :user-id-fn (fn [req] "some-custom-id-42")})

      {:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(add-watch connected-uids :connected-uids
  (fn [_ _ old new]
    (when (not= old new)
      (infof "Connected uids change: %s" new))))

;; TODO: Do not broadcast upon every event received
(defn broadcast-state
  [state]
  (let [uids (:any @connected-uids)]
    (debugf "Broadcasting server>user: %s uids" (count uids))
    (doseq [uid uids]
      (chsk-send! uid
                  [:board/state
                   {:state state}]))))

(defn random-state
  []
  (generate-state-and-broadcast! broadcast-state))

(go (while true
      (let [{ev-msg :event} (<! ch-chsk)]
        (broadcast-state (fetch-state!)))))

(defn handle-post
  [body]
  (store-post-and-broadcast! body broadcast-state)
  ;; map to event and forward to event sourcing, return answer
  (response body))

(defroutes api-routes
  (POST "/dashboard" {body :body} (handle-post body))
  (POST "/random" req (random-state)))

(defroutes site-routes
  (GET "/" req (redirect "index.html"))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (wrap-reload
   (routes
    (context "/api" [] (wrap-json-body
                        (wrap-defaults api-routes api-defaults)))
    (wrap-defaults site-routes site-defaults))))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "3000"))]
    (run-server app {:port port})
    (infof "Web server is running at port %s" port)))
