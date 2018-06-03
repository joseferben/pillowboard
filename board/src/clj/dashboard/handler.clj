(ns dashboard.handler
  (:gen-class)
  (:require [compojure.core :refer [context defroutes GET routes]]
            [compojure.route :as route]
            [dashboard.core :as core :refer [fetch-state! store-post!]]
            [dashboard.db :as db]
            [dashboard.sites :as sites]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults
             :refer
             [api-defaults site-defaults wrap-defaults]]
            [ring.middleware.json
             :refer
             [wrap-json-body wrap-json-params wrap-json-response]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :refer [content-type resource-response]]
            [taoensso.timbre :as timbre :refer [debugf infof]]))

(def OK 200)
(def BAD_REQUEST 400)

(defn- post-data!
  [board-id post]
  (debugf "Posting post %s to board with id %s" post board-id)
  (if-let [resp (store-post! board-id post)]
    OK
    BAD_REQUEST))

(defroutes public-api-routes
  (context "/api/data/:id" [id]
    (GET "/" {params :query-params}
          {:body {:status (post-data! id params)}}))
  (context "/data/:id" [id]
    (GET "/" [] {:body (fetch-state! id)})))

(defroutes site-api-routes)

(defn index-html []
  (content-type (resource-response "index.html" {:root "public"}) "text/html"))

(defroutes site-routes
  (GET "/" [] (sites/index))
  (GET "/:id" [] (sites/dashboard))
  (route/resources "/")
  (route/not-found "Page not found - 404"))

(def app
  (wrap-reload
   (routes
    (-> public-api-routes
        (wrap-json-body {:keywords? true})
        (wrap-json-params)
        (wrap-json-response)
        (wrap-defaults api-defaults))
    (-> site-api-routes
        (wrap-json-body {:keywords? true})
        (wrap-json-params)
        (wrap-json-response)
        (wrap-defaults site-defaults))
    (wrap-defaults site-routes site-defaults))))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "HTTP_PORT" "3000"))]
    (db/init!)
    (timbre/merge-config! {:level :debug})
    (run-jetty app {:port port})
    (infof "Web server is running at port %s." port)))
