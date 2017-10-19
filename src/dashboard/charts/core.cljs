(ns dashboard.charts.core
  (:require
   [cljsjs.recharts]
   [reagent.core :as reagent]))

(def line-chart js/Recharts.LineChart)
(def line js/Recharts.Line)
(def x-axis js/Recharts.XAxis)
(def y-axis js/Recharts.YAxis)
(def cartesian-grid js/Recharts.CartesianGrid)
(def tooltip js/Recharts.Tooltip)
(def legend js/Recharts.Legend)

(defn- transform [data]
  (prn (data :data))
  (data :data))

(defn- transform-new
  ([data]
   )
  ([data result]
   ))

(defn- line-chart-comp
  [data]
  [:div
   [:> line-chart {:width 350 :height 200 :margin {:top 0 :right 0 :bottom 0 :left -40}
                   :data (transform data)}
    [:> x-axis {:data-key :time}]
    [:> y-axis]
    [:> cartesian-grid {"strokeDasharray" "3 3"}]
    [:> tooltip]
    [:> legend]
    [:> line {:type "monotone" "dataKey" :commits}]]])
