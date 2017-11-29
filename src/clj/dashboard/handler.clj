(ns dashboard.handler
  (:require [dashboard.core :as core :refer [fetch-state! store-post-and-broadcast!
                                             generate-state-and-broadcast!
                                             reset-state-and-broadcast!]]
            [dashboard.db :as db]
            [dashboard.auth :refer [auth-backend user-can user-isa user-has-id identify
                                    authenticated-user unauthorized-handler make-token!]]
            [compojure.core :refer [context routes defroutes GET POST wrap-routes]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [clojure.java.io :as io]
            [org.httpkit.server :refer [run-server]]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [ring.util.response :refer [redirect response content-type resource-response]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors :refer [wrap-cors]])

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
(defn- broadcast-state
  [state]
  (let [uids (:any @connected-uids)]
    (debugf "Broadcasting server>user: %s uids" (count uids))
    (doseq [uid uids]
      (chsk-send! uid
                  [:board/state
                   {:state state}]))))

(defn- random-state
  []
  (generate-state-and-broadcast! broadcast-state))

(defn- reset-state
  []
  (reset-state-and-broadcast! broadcast-state))

(go-loop []
  (let [{ev-msg :event} (<! ch-chsk)]
    (broadcast-state (fetch-state!)))
  (recur))

(defn handle-post
  [body]
  (store-post-and-broadcast! body broadcast-state)
  ;; map to event and forward to event sourcing, return answer
  (response body))

(def OK 200)

(defn- fetch-dashboards
  [user-id]
  (db/dashboards-all user-id))

(defn- add-dashboard
  [user-id board-name]
  (db/dashboard-insert! user-id board-name)
  OK)

(defn- fetch-users
  []
  (db/users-all))

(defn- add-user
  [email password]
  (db/user-insert! email password)
  OK)

(defn- post-data
  [user-id body]
  (store-post-and-broadcast! body broadcast-state)
  OK)

(defn- login-user
  [email password])

(def mock-dashboards {"1" [{:name "kpi" :created "2017-01-01"} {:name "project foo" :created "2017-02-01"}]
                      "2" [{:name "project bar" :created "2016-01-01"}]})

(def mock-users ["Walter White" "Jesse Pinkman" "Saul Goodman"])

(defroutes api-routes

  (context "/dashboards" []
    (restrict (routes (POST "/" req [] (prn req)
                            {:body {:status (add-dashboard (identify req) (get-in req [:body :name]))}})
                      (GET "/" req []
                           {:body {:dashboards (fetch-dashboards (identify req))}}))
              {:handler {:and [authenticated-user]}
               :on-error unauthorized-handler}))

  (GET "/users" [] (fetch-users))

  (POST "/users" {{:keys [password email]} :body} []
        {:body {:status (add-user email password)}})

  (context "/users/:user-id" [user-id]
    (restrict (routes (GET "/dashboards" req []
                           {:body (fetch-dashboards user-id)}))
              {:handler {:and [authenticated-user (user-has-id user-id)]}
               :on-error unauthorized-handler}))

  (context "/data/:board-id" [board-id]
    (POST "/" {:keys [body]} []
          {:body {:status (post-data board-id body)}}))

  (POST "/sessions" {{:keys [email password]} :body}
    (if (db/user-password-matches? email password)
      {:status 201
       :body {:auth-token (make-token! email)}}
      {:status 409
       :body {:status "error"
              :message "invalid username or password"}})))

(defroutes site-routes
  (GET "/" [] (content-type (resource-response "index.html" {:root "public"}) "text/html"))
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (wrap-reload
   (routes
    (context "/api" [] (-> api-routes
                           (wrap-authentication auth-backend)
                           (wrap-authorization auth-backend)
                           (wrap-json-body {:keywords? true})
                           wrap-json-response
                           (wrap-defaults api-defaults)))
    (wrap-defaults site-routes site-defaults))))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "3000"))]
    (run-server app {:port port})
    (infof "Web server is running at port %s" port)))
