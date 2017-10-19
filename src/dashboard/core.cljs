(ns dashboard.core
  (:require
   [dashboard.grid :as grid]
   [stylefy.core :as stylefy]
   [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce app-state (atom {:state
                             [{:commits {:data
                                          {:time (vec (range 10))
                                           :commits [1 2 3 5 8 5 2 12 18 3]}}
                               :type :line
                               :pos [0 0]}
                              {:pull-requests {:data
                                               {:time (vec (range 10))
                                                :pull-requests [0 0 1 2 0 2 1 1 2 3]
                                                :bugs [0 5 3 3 0 2 8 7 5 3]}}
                               :type :line
                               :pos [2 2]}]}))

(defn container []
  "Injects app-state into dashboard, enables re-render"
  [:div.container
   [grid/main {:width 8 :height 5 :state @app-state}]])

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
