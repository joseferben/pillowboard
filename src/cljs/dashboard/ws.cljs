(ns dashboard.ws
  (:require
   [clojure.string  :as str]
   [cljs.core.async :as async :refer (<! >! put! chan timeout)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.encore :as encore :refer-macros (have have?)]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [re-frame.core :refer [dispatch]]))

(timbre/set-level! :debug)

(comment (add-watch chsk-state :state
           (fn [_ _ old new]
             (infof "State changed from %s to %s" old new)
             (if (and (:open? new) (not= (:open? old)))
               (chsk-send! [:board/req-init-state {}] 4000)))))

(defmulti handle-event (fn [event _] (first event)))

(comment (defmethod handle-event :chsk/handshake)
  [event chsk-send!]
  (chsk-send! [:board/req-init-state {}] 4000))

(defmethod handle-event :chsk/state
  [[type [m0 m1] _]]
  (if (m1 :first-open?)
    (dispatch [:register-board])))

(defmethod handle-event :chsk/recv
  [event _]
  (infof "Handling event: %s" event)
  (when
    (= (first (second event)) :board/state) (dispatch [:set-board-state (get (second (second event)) :state)])))

(defmethod handle-event :default
  [event _]
  (infof "No handler for event found: %s" event))
