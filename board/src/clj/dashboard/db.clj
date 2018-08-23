(ns dashboard.db
  (:require [dashboard.pipeline.event :refer [event-type]]
            [clj-http.client :as client]
            [taoensso.timbre :as timbre :refer [tracef debugf infof warnf errorf]]
            [cheshire.core :refer [generate-string parse-string]]
            [hugsql.core :as hugsql]
            [postgre-types.json :refer [add-json-type add-jsonb-type]]))

(add-json-type generate-string parse-string)
(add-jsonb-type generate-string parse-string)

(def pg-db
  {:dbtype "postgresql"
   :dbname "db"
   :host "localhost"
   :user "admin"
   :password "admin"
   :ssl false})

;; Initialize db interface to execute SQL commands
(hugsql/def-db-fns "sql/events.sql")

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn events-all
  "Retrieves a list of all stored events for the dashboard with `id`.
  The list may contain events of different types."
  [id]
  (select-events-of-dashboard pg-db {:id id}))

(defn dashboard-insert!
  ([id]
   (insert-dashboard! pg-db {:id (str id)}))
  ([]
   (insert-dashboard! pg-db {:id (java.util.UUID/randomUUID)})))

(defn event-insert!
  "Inserts `event` at the board with id `board-id`. Creates board if it doesn't exist."
  [event board-id]
  (insert-event! pg-db {:id (java.util.UUID/randomUUID)
                        :data event}))

(defn create-tables!
  "Creates tables idempotently"
  []
  (debugf "Initializing tables")
  (create-dashboard-event!)
  (create-events!))

(defn init!
  "Initializes the database by creating tables. This function must be idempotent!."
  []
  (create-tables!))
