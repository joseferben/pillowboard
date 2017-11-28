(ns dashboard.events
  (:require
   [dashboard.db :refer [default-db]]
   [re-frame.core :refer [reg-event-db reg-event-fx
                          inject-cofx path trim-v after debug]]))

(reg-event-db
 :set-showing
 []
 (fn [db [_ location]]
   (assoc db :showing location)))

(reg-event-fx
 :initialise-db
 []
 (fn [{:keys [db]} _]
   {:db (assoc default-db :state {})}))

(reg-event-fx
  :handler-with-http
  (fn [{:keys [db]} _]
    {:http-xhrio {:method          :get
                  :uri             "/api/dashboards/0"
                  :timeout         8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:good-http-result]
                  :on-failure      [:bad-http-result]}}))

(reg-event-db
 :good-http-result
 []
 (fn [db [_ response]]
   (assoc db :dashboards response)))
