(ns dashboard.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))


(reg-sub
  :page
  (fn [db _]
    (:page db)))

(reg-sub
 :dashboards
 (fn [db _]
   (:dashboards db)))
