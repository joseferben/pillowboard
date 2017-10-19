(ns dashboard.core
  (:require
   [dashboard.grid :as grid :refer [main]]
   [stylefy.core :as stylefy]
   [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce app-state (atom {:charts
                          [{:name :commits
                            :data
                            [{:time 0 :commits 1}
                             {:time 1 :commits 3}
                             {:time 2 :commits 2}
                             {:time 3 :commits 7}
                             {:time 4 :commits 3}
                             {:time 5 :commits 2}
                             {:time 6 :commits 6}
                             {:time 7 :commits 5}
                             {:time 8 :commits 2}
                             {:time 9 :commits 4}]
                            :type :line
                            :pos [0 0]}
                           {:name :pull-requests
                            :data
                            [{:time 0 :pull-requests 0 :bugs 0}
                             {:time 1 :pull-requests 2 :bugs 1}
                             {:time 2 :pull-requests 3 :bugs 2}
                             {:time 3 :pull-requests 1 :bugs 1}
                             {:time 4 :pull-requests 2 :bugs 6}
                             {:time 5 :pull-requests 0 :bugs 7}
                             {:time 6 :pull-requests 2 :bugs 3}
                             {:time 7 :pull-requests 1 :bugs 2}
                             {:time 8 :pull-requests 8 :bugs 2}]
                            :type :line
                            :pos [0 2]}
                           {:name :sprint-progress
                            :data
                            [{:accepted 0.1 :in-progress 0.0 :done 0.0}
                             {:accepted 0.2 :in-progress 0.0 :done 0.0}
                             {:accepted 0.2 :in-progress 0.0 :done 0.0}
                             {:accepted 0.3 :in-progress 0.2 :done 0.0}
                             {:accepted 0.4 :in-progress 0.2 :done 0.1}
                             {:accepted 0.5 :in-progress 0.3 :done 0.1}
                             {:accepted 0.5 :in-progress 0.3 :done 0.2}
                             {:accepted 0.5 :in-progress 0.8 :done 0.2}
                             {:accepted 0.8 :in-progress 0.8 :done 0.3}
                             {:accepted 0.8 :in-progress 0.9 :done 0.8}
                             {:accepted 0.9 :in-progress 0.9 :done 0.9}
                             {:accepted 1.0 :in-progress 0.9 :done 0.8}
                             {:accepted 1.0 :in-progress 1.0 :done 0.8}
                             {:accepted 1.0 :in-progress 1.0 :done 0.9}
                             {:accepted 1.0 :in-progress 1.0 :done 1.0}]
                            :type :area
                            :post [1 0]}
                           {:name :incidents
                            :data
                            [{:incidents 0 :traffic 1}
                             {:incidents 2 :traffic 3}
                             {:incidents 1 :traffic 0}
                             {:incidents 4 :traffic 1}
                             {:incidents 8 :traffic 3}
                             {:incidents 23 :traffic 12}
                             {:incidents 12 :traffic 48}
                             {:incidents 8 :traffic 23}
                             {:incidents 21 :traffic 79}
                             {:incidents 18 :traffic 97}
                             {:incidents 9 :traffic 123}]
                            :type :scatter
                            :pos [1 2]}]}))

(defn container []
  "Injects app-state into dashboard, enables re-render"
  [:div.container
   [grid/main {:state @app-state}]])

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
