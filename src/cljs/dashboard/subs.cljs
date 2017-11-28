(ns dashboard.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))


(reg-sub
  :showing
  (fn [db _]
    (prn db)
    (:showing db)))
