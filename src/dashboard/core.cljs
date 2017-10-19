(ns dashboard.core
  (:require
   [dashboard.grid :as grid :refer [main]]
   [stylefy.core :as stylefy]
   [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce app-state (atom {:charts
                          [{:name :commits
                            :data {:time (vec (range 10))
                                   :commits (vec (take 10 (iterate #(+ (rand-int 3) %) 1)))}
                            :type :line
                            :pos [0 0]}
                           {:name :pull-requests
                            :data
                            {:time (vec (range 15))
                             :pull-requests [0 0 1 2 0 2 1 1 2 3 0 1 4 2 4]
                             :bugs [0 5 3 3 0 2 8 7 5 3 2 5 2 2 5]}
                            :type :line
                            :pos [0 2]}
                           {:name :sprint-progress
                            :data
                            {:accepted [0.1 0.1 0.3 0.4 0.5 0.9 1.0 1.0 1.0 1.0]
                             :in-progress [0.0 0.0 0.0 0.1 0.2 0.3 0.3 0.5 0.5 0.8 0.8 0.8 0.9 1.0]
                             :done [0.0 0.0 0.0 0.0 0.0 0.0 0.1 0.2 0.3 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0]}
                            
                            :type :area
                            :post [1 0]}
                           {:name :incidents
                            :data
                            {:incidents [0 10 123 23 1 0 12 30 23 45 8 1 74]
                             :traffic [1 2 40 4 0 0 2 8 8 23 10 23 50]}
                            :type :scatter
                            :pos [1 2]}]}))

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
