(ns dashboard.events
  (:require
   [dashboard.db :refer [default-db]]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [re-frame.core :refer [reg-event-db reg-event-fx
                          inject-cofx path trim-v after debug]]))

(reg-event-fx
 :set-page
 []
 (fn [{:keys [db]} [_ page]]
   {:db (assoc db :active page)}))

(reg-event-db
 :nothing
 []
 (fn [_ _]))

(reg-event-fx
 :initialise-db
 []
 (fn [{:keys [db]} _]
   {:db (assoc default-db :state {})}))

(defn- fetch [uri on-success on-failure]
  {:http-xhrio {:method          :get
                :uri             uri
                :timeout         8000
                :response-format (ajax.core/json-response-format {:keywords? true})
                :on-success      [on-success]
                :on-failure      [on-failure]}})

(reg-event-fx
  :fetch-dashboards
  (fn [{:keys [db]} [evt id]]
    (fetch (str "/api/dashboards/" id) :s-fetch-dashboards :f-fetch-dashboards)))

(reg-event-db
 :s-fetch-dashboards
 []
 (fn [db [_ response]]
   (assoc db :dashboards response)))

(reg-event-db
 :f-fetch-dashboards
 []
 (fn [db [_ response]]
   (infof "Failed request: " response)))
