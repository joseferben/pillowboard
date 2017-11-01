(ns dashboard.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [org.httpkit.server :refer [run-server]]
            [taoensso.sente :as sente] 
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.middleware.reload :as reload]
            ))

(def app-state 
  {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                       :meta {:labels [:time :commit]}}
             :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                             [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                             [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                      :meta {:labels [:accepted :in-progress :done]}}
             :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                         :meta {:labels [:incidents :traffic]}}
             :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                    [0 1 0 0 2 2 3 0 2 1]
                                    [0 1 1 2 2 3 2 1 2 4]]
                             :meta {:labels [:time :pull-requests :bugs]}}}
   :config {:commits {:type :line}
            :sprint {:type :area}
            :stability {:type :scatter}
            :pull-requests {:type :line}}})

(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defn start-example-broadcaster!
  "As an example of server>user async pushes, setup a loop to broadcast an
  event to all connected users every 10 seconds"
  []
  (print "starting broadcaster")
  (let [broadcast!
        (fn [i]
          (let [uids (:any @connected-uids)]
            (print "Broadcasting server>user: %s uids" (count uids))
            (doseq [uid uids]
              (chsk-send! uid
                [:some/broadcast
                 {:what-is-this "An async broadcast pushed from server"
                  :how-often "Every 10 seconds"
                  :to-whom uid
                  :i i}]))))]))

(defroutes app-routes
  ;(GET "/" [] "Hello World")
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/not-found "Not Found"))

;(def app
;  (wrap-defaults app-routes site-defaults))

(def handler
  (-> app-routes
      (reload/wrap-reload)
      (wrap-resource "public")
      ;; Add necessary Ring middleware:
      ring.middleware.keyword-params/wrap-keyword-params
      ring.middleware.params/wrap-params))

(defn -main [& args]
  (run-server handler {:port 3000})
  (start-example-broadcaster!)
  (print "Server started at port 3000"))
