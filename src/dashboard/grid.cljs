(ns dashboard.grid
  (:require
   [dashboard.styles.core :as styles]
   [stylefy.core :as stylefy :refer [use-style]]))

(defmulti chart (fn [chart] (:type chart)))

(defmethod chart :line
  [chart] 
  [:h2 "Line chart"])

(defmethod chart :area
  [chart] 
  [:h2 "Area chart"])

(defmethod chart :scatter
  [chart] 
  [:h2 "Scatter chart"])
  
(defn- render-charts
  [widgets]
  (map chart widgets))

(defn main
  [{:keys [width height state]}]
  [:div.grid (use-style styles/grid-style)
   (render-charts (state :charts))
   [:h1 "test"]])
