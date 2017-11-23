(ns dashboard.core
  (:require
   [dashboard.grid :as grid :refer [main]]
   [dashboard.components :refer [instructions dev-toolbar]]
   [clojure.string  :as str]
   [cljs.core.async :as async :refer (<! >! put! chan timeout)]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.encore :as encore :refer-macros (have have?)]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [stylefy.core :as stylefy]
   [reagent.core :as reagent :refer [atom]])
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

(enable-console-print!)

(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

;; Interceptor
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client! (clojure.string/replace (.-pathname (.-location js/window)) "index.html" "chsk")
       {:type :auto
        :packer :edn
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state))

;; Interceptor
(add-watch chsk-state :state
           (fn [_ _ old new]
             (infof "State changed from %s to %s" old new)
             (if (and (:open? new) (not= (:open? old)))
               (chsk-send! [:board/req-init-state {}] 4000))))

;; Interceptor/Event handler
(defmulti handle-event first)

(defmethod handle-event :chsk/handshake
  [event]
  (chsk-send! [:board/req-init-state {}] 4000))

(defmethod handle-event :chsk/recv
  [event]
  (when (= (first (second event)) :board/state)
    (infof "Updating state because of event: %s" event)
    (reset! app-state (get (second (second event)) :state))))

(defmethod handle-event :default
  [event]
  (infof "No handler for event found: %s" event))

(init!)

;; Interceptor
(go (while true
      (let [{ev-msg :event} (<! ch-chsk)]
        (infof "Reiceved event: %s" ev-msg)
        (handle-event ev-msg))))
