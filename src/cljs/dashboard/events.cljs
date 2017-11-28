(ns dashboard.events
  (:require
   [dashboard.db :refer [default-db]]
   [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v
                          after debug]]))

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
