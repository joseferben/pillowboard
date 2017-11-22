(ns dashboard.db
  (:require [dashboard.db.events :as events]
            [dashboard.db.dashboards :as dashboards]
            [dashboard.db.users :as users]
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
  "Retrieves a list of all stored events for the dashboard with `id`.
  The list may contain events of different types."
  [id]
  (concat (events/events-timeseries-all db {:id id})
          (events/events-gauge-all db {:id id})
          (events/events-tuple-all db {:id id})))

(defmulti event-insert!
  "Stores an `event` of any type with dashboard `id`."
  event-type)

(defmethod event-insert! :timeseries [{:keys [name time value]} id]
  (events/event-timeseries-insert db {:dashbord_id id :name name :time time :value value}))

(defmethod event-insert! :gauge [{:keys [name value]} id]
  (events/event-gauge-insert db {:dashboard_id id :name name :value value}))

(defmethod event-insert! :tuple [{:keys [name1 value1 name2 value2]} id]
  (events/event-tuple-insert db {:dashboard_id id :name1 name1 :value1 value1 :name2 name2 :value2 value2}))

(defn dashboard-insert!
  "Stores a dashboard for a given user with `user-id`."
  [user-id name]
  (dashboards/dashboard-insert db {:user_id user-id :name name}))

(defn user-insert!
  "Stores a user with given `email` and `password`."
  [email password]
  (users/user-insert db {:email email :password password}))
