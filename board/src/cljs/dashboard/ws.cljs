(ns dashboard.ws
  (:require
   [dashboard.actions :refer [register-current-board! set-board-state!]]
   [clojure.string  :as str]
   [cljs.core.async :as async :refer (<! >! put! chan timeout)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]))

(defmulti handle-event (fn [event _] (first event)))

(defmethod handle-event :chsk/state
  [[type [m0 m1] _]]
  (if (m1 :first-open?)
    (register-current-board!)))

(defmethod handle-event :chsk/recv
  [event _]
  (infof "Handling event: %s" event)
  (when
    (= (first (second event)) :board/state)
    (set-board-state! (get (second (second event)) :state))))

(defmethod handle-event :default
  [event _]
  (infof "No handler for event found: %s" event))
