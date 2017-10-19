(ns dashboard.grid
  (:require
   [dashboard.styles.core :as styles]
   [dashboard.charts.core :as charts]
   [stylefy.core :as stylefy :refer [use-style]]))

(defmulti chart-type (fn [chart] (:type chart)))

(defmethod chart-type :line
  [data] 
  (let [[x y] (data :pos)]
  [:div.chart (merge {:key (data :name)}
                     (use-style (merge styles/component-style)))
  [charts/line-chart-comp data]]))

(defmethod chart-type :area
  [data] 
  (let [[x y] (data :pos)]
  [:div.chart (merge {:key (data :name)}
                     (use-style (merge styles/component-style)))
  [:h2 "Area chart"]]))

(defmethod chart-type :scatter
  [data] 
  (let [[x y] (data :pos)]
  [:div.chart (merge {:key (data :name)}
                     (use-style (merge styles/component-style)))
  [:h2 "Scatter chart"]]))
  
(defn- chart
  [data]
  (chart-type data))

(defn- render-charts
  [charts]
  (doall (map chart charts)))

(defn main
  [{state :state}]
  [:div.grid (use-style (merge styles/grid-wrapper styles/component-style))
   (render-charts (state :charts))])
