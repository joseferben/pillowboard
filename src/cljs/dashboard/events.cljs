(ns dashboard.events
  (:require
   [dashboard.db :refer [default-db]]
   [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v
                          after debug]]))
