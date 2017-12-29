(ns dashboard.db (:require [dashboard.pipeline.event :refer [event-type]]
                           [clj-http.client :as client]
                           [environ.core :refer [env]]
                           [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
                           [cheshire.core :refer [generate-string parse-string]]
                           [buddy.hashers :as hashers]))

(def base-url "http://localhost:5984")
(def db (or (env :database-url) (str base-url "/db")))

(def doc-views {:dashboard {:all {:view "dashboards-view"}}
                :sessions {:all {:view "sessions-view"}}})

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn- p-get
  "Returns the body of a response to a GET request to `url` as clojure map."
  [url]
  (-> url
      client/get
      :body
      parse-string
      clojure.walk/keywordize-keys))

(defn- p-put!
  "PUTs a stringified `body` to a `url`."
  [url body]
  (client/put url {:body (generate-string body)}))

(defn- map->query [query]
  (->> query
       (map #(str (name (first %)) "=" "\"" (second %) "\""))
       (clojure.string/join "&")
       (str "?")))

(defn- get-doc [doc-id]
  (p-get (str db "/" doc-id)))

(defn- get-view [{view :view} & [query]]
  (p-get (str db "/_design/doc/_view/" view (map->query query))))

(defn- put-doc!
  "PUTs a document with `doc-id` with `init`ial values."
  [doc-id & [init]]
  (p-put! (str db "/" doc-id) (or init {})))

(defn- update-doc!
  "Updates a document with id `doc-id` by applying a function
  `f` with arguments `args` to the old version of that document."
  [doc-id f & args]
  (let [old (get-doc doc-id)]
    (p-put! (str db "/" doc-id)
            (merge (apply f old args) {:_rev (old :_rev)}))))

(defn- keywordize-events
  "Given a list of events returns a list of events with keywordized map values where
  it makes sense (types, enumarions)."
  [events]
  (map (fn [evt] (update-in evt [:meta :mode] keyword)) events))

(defn events-all
  "Retrieves a list of all stored events for the dashboard with `id`.
  The list may contain events of different types."
  [id]
  (-> id
      get-doc
      (get :events [])
      keywordize-events))

(defn dashboard-insert!
  "Inserts a dashboard with an `id`."
  [id]
  (put-doc! id {:type "dashboard" :events []}))

(defn event-insert!
  "Inserts `event` at the board with id `board-id`. Creates board if it doesn't exist."
  [event board-id]
  (try
    (update-doc! board-id update :events conj event)
    (catch Exception e
      (do
        (dashboard-insert! board-id)
        (update-doc! board-id update :events conj event)))))

(defn- create-db!
  "Creates the db idempotently."
  []
  (debugf "Check whether we need to create a db.")
  (try
    (let [db-res (p-get db)]
      (when (not= (:db_name db-res) "db")
        (p-put! db {})))
    (catch Exception e
      (do
        (debugf "Failed to find valid db. Creating new one: %s" db)
        (p-put! db {})))))

(defn- create-views!
  "Creates view idempotently."
  [views]
  (debugf "Adding views.")
  (try
    (put-doc! "_design/doc" views)
    (catch Exception e
      (debugf "Failed to add views, seems like they are already there."))))

(defn init!
  "Initializes the database by installing views. This function must be idempotent!."
  []
  (debugf "Initializing database.")
  (let [views (parse-string (slurp (clojure.java.io/resource "migrations/initialize-views.js")))]
    (create-db!)
    (create-views! views)))
