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

(defonce app-state (atom {}))

(infof "ClojureScript appears to have loaded correctly.")

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client! "./chsk" ; Note the same path as before
       {:type :auto ; e/o #{:auto :ajax :ws}
        :packer :edn
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(add-watch chsk-state :state
           (fn [_ _ old new]
             (infof "State changed from %s to %s" old new)
             (if (and (:open? new) (not= (:open? old)))
               (chsk-send! [:board/req-init-state {}] 4000))))

(defn container []
  "Injects app-state into dashboard, enables re-render"
  [:div.top-container
   [dev-toolbar]
  (if (or (nil? @app-state) (empty? (@app-state :charts)))
    [instructions]
    [:div.container
     [grid/main @app-state]])])

(defn init! []
  (stylefy/init)
  (reagent/render-component [container]
                          (.getElementById js/document "app")))

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

(go (while true
      (let [{ev-msg :event} (<! ch-chsk)]
        (infof "Reiceved event: %s" ev-msg)
        (handle-event ev-msg))))
