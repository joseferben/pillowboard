(ns dashboard.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))


(reg-sub
  :showing
  (fn [db _]
    (:showing db)))

(reg-sub
 :dashboards
 (fn [db _]
   (:dashboards db)))
