(ns dashboard.handler
  (:require [dashboard.core :as core :refer [fetch-state! store-post-and-broadcast!]]
            [dashboard.db :as db]
            [environ.core :refer [env]]
            [compojure.core :refer [context routes defroutes GET POST wrap-routes]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [clojure.java.io :as io]
            [org.httpkit.server :refer [run-server]]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [ring.util.response :refer [redirect response content-type resource-response]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors :refer [wrap-cors]])

  (:gen-class))

(timbre/set-level! :debug)

(def board-sessions (atom {}))

(let [;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-transit-packer) ; Needs Transit dep

      chsk-server
      (sente/make-channel-socket-server!
       (get-sch-adapter) {:packer packer :user-id-fn (fn [req] (db/uuid))})

      {:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      chsk-server]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids)) ; Watchable, read-only atom

;;(add-watch connected-uids :connected-uids
;;           (fn [_ _ old new]
;;             (when (not= old new)
;;               (infof "Connected uids change: %s" new))))

(defn- broadcast-state
  [board-id state]
  (let [uids (get @board-sessions board-id)]
    (debugf "Broadcasting state to: %s" uids)
    (debugf "Currently connected uids: %s" @connected-uids)
    (debugf "Currently registered boards: %s" @board-sessions)
    (doseq [uid uids]
      (debugf "Sending state %s to %s" state uid)
      (chsk-send! uid
                  [:board/state
                   {:state state}] 20000))))

(go-loop []
  (let [event (<! ch-chsk)]
    (let [{[type board-id] :event} event
          {uid :uid} event]
      (when (and (= :board/register-board type) (not (nil? board-id)))
        (do
         (debugf "Adding uid %s to board-id %s" uid board-id)
         (swap! board-sessions update board-id conj uid)
         (broadcast-state board-id (fetch-state! board-id))))))
  (recur))

(def OK 200)

(defn- add-dashboard
  [user-id board-name]
  (db/dashboard-insert! user-id board-name)
  OK)

(defn- post-data
  [board-id post]
  (debugf "Posting post %s to board with id %s" post board-id)
  (store-post-and-broadcast! post (partial broadcast-state board-id) board-id)
  OK)

(defroutes api-routes
  (context "/data/:id" [id]
    (POST "/" {:keys [body]} []
          {:body {:status (post-data id body)}})))

(defn index-html []
  (content-type (resource-response "index.html" {:root "public"}) "text/html"))

(defroutes site-routes
  (GET "/" [] (index-html))
  (GET "/data/:id" [] (index-html))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (route/not-found "Page not found - 404"))

(def app
  (wrap-reload
   (routes
    (-> api-routes
        (wrap-json-body {:keywords? true})
        wrap-json-response
        (wrap-defaults api-defaults))
    (wrap-defaults site-routes site-defaults))))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "HTTP_PORT" "3000"))]
    (db/init!)
    (run-server app {:port port})
    (infof "Web server is running at port %s" port)))
