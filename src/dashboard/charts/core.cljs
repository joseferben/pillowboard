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
(def scatter-chart js/Recharts.ScatterChart)
(def scatter js/Recharts.Scatter)
(def area-chart js/Recharts.AreaChart)
(def area js/Recharts.Area)

(defn- transform [data]
  (data :data))

(defn- line-wrapper [key]
  [:> line {:type "monotone" "dataKey" key}])

(defn- area-wrapper [key]
  [:> area {:type "monotone" "dataKey" key}])

(defn- filter-time [keys]
  (filter #(not= :time %) keys))

(defn- lines [data]
  (-> data
      (transform)
      (first)
      (keys)
      (filter-time)
      (#(map line-wrapper %))
      (vec)))

(defn- areas [data]
  (-> data
      (transform)
      (first)
      (keys)
      (filter-time)
      (#(map area-wrapper %))
      (vec)))

(defn line-chart-comp
  [data]
  [:div
   (into []
         (concat
          [:> line-chart {:width 350 :height 200
                          :margin {:top 0 :right 0
                                   :bottom 0 :left -40}
                          :data (transform data)}
           [:> x-axis {:data-key :time}]
           [:> y-axis]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> tooltip]
           [:> legend]]
          (lines data)))])

(defn scatter-chart-comp
  [data]
  [:div
   [:> scatter-chart {:width 350 :height 200
                      :margin {:top 0 :right 0
                               :bottom 0 :left -40}}
    [:> x-axis {"dataKey" "incidents"}]
    [:> y-axis {"dataKey" "traffic"}]
    [:> cartesian-grid {"strokeDasharray" "3 3"}]
    [:> scatter {:data (transform data) :name "incidents/traffic"}]
    [:> tooltip]
    [:> legend]]])

(defn area-chart-comp
  [data]
  [:div
   (into []
         (concat
          [:> area-chart {:width 350 :height 200
                          :margin {:top 0 :right 0
                                   :bottom 0 :left -40}
                          :data (transform data)}
           [:> x-axis {:data-key :time}]
           [:> y-axis]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> tooltip]
           [:> legend]]
          (areas data)))])


