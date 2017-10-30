(ns dashboard.core
  (:require
   [dashboard.grid :as grid :refer [main]]
   [dashboard.inflater :as inflater]
   [dashboard.transformer :as transformer]
   [stylefy.core :as stylefy]
   [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce app-state (atom
                    {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                                         :meta {:labels [:time :commit]}}
                               :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                                               [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                                               [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                                        :meta {:labels [:accepted :in-progress :done]}}
                               :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                                           :meta {:labels [:incidents :traffic]}}
                               :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                                      [0 1 0 0 2 2 3 0 2 1]
                                                      [0 1 1 2 2 3 2 1 2 4]]
                                               :meta {:labels [:time :pull-requests :bugs]}}}
                     :config {:commits {:type :line}
                              :sprint {:type :area}
                              :stability {:type :scatter}
                              :pull-requests {:type :line}}}))

(defn container []
  "Injects app-state into dashboard, enables re-render"
  [:div.container
   [grid/main {:state (inflater/inflate (transformer/transform @app-state))}]])

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
