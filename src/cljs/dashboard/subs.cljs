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

(reg-sub
 :active
 (fn [db _]
   (:active db)))

(reg-sub
 :email
 (fn [db _]
   (:email db)))
