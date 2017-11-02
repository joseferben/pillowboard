(ns dashboard.core
  (:require
   [dashboard.grid :as grid :refer [main]]
   [clojure.string  :as str]
   [cljs.core.async :as async :refer (<! >! put! chan)]
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

(prn "ClojureScript appears to have loaded correctly.")

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client! "/chsk" ; Note the same path as before
       {:type :auto ; e/o #{:auto :ajax :ws}
        :packer :edn
       })]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  )

(go (while true
      (let [{ev-msg :event} (<! ch-chsk)]
        (reset! app-state (get (second (second ev-msg)) :state))
        )))

(defn container []
  "Injects app-state into dashboard, enables re-render"
  [:div.top-container
  (if (empty? @app-state)
    [:h3 "No data here... (TODO: show here how to post data)"]
    [:div.container
     [grid/main {:state @app-state}]])])

(defn init! []
  (stylefy/init)
  (reagent/render-component [container]
                          (. js/document (getElementById "app"))))

(init!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
   ;;(swap! app-state update-in [:__figwheel_counter] inc)
)
