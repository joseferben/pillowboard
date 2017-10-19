(ns dashboard.core
  (:require
   [dashboard.styles.core :as styles]
   [reagent.core :as reagent :refer [atom]]
   [stylefy.core :as stylefy :refer [use-style]]))

(enable-console-print!)

(println "This text is printed from src/dashboard/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn grid
  [{:keys [width height state]}]
  [:div.grid (use-style styles/grid-style)
   [:h1 (:text state)]])

(defn container []
  "Injects app-state into dashboard, enables re-render"
  [:div.container
   [grid {:width 8 :height 5 :state @app-state}]])

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
