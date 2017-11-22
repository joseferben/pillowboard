(ns dashboard.db
  (:require [dashboard.db.events :as events]
            [dashboard.pipeline.event :refer [event-type]]))

(def db
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :subname "//localhost:5432/postgres"
   :user "postgres"
   :password "postgres"
   :sslmode "disable"
   })

(defn events-all
  "Retrieves a list of all stored events. The list may contain events of
   different types."
  []
  (concat (events/events-timeseries-all db)
          (events/events-gauge-all db)
          (events/events-tuple-all db)))

(defmulti event-insert!
  "Stores an event of any type in the database."
  event-type)

(defmethod event-insert! :timeseries [{:keys [name time value]}]
  (events/event-timeseries-insert db {:name name :time time :value value}))

(defmethod event-insert! :gauge [{:keys [name value]}]
  (events/event-gauge-insert db {:name name :value value}))

(defmethod event-insert! :tuple [{:keys [name1 value1 name2 value2]}]
  (events/event-tuple-insert db {:name1 name1 :value1 value1 :name2 name2 :value2 value2}))
