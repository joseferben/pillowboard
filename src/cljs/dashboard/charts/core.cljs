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
(def types {:linechart line :scatterchart scatter :areachart area})

(defn- transform [data]
  (data :metrics))

(defn- wrapper [type color key]
  [:> (types type) {:type "monotone" "dataKey" key "stroke" color}])
  
(defn- dimension-keys
  [data]
  (-> data
      :metrics
      first
      keys
      rest))

(defn- dimensions
  [data]
  (->> data
      dimension-keys
      (map (fn [key] (wrapper (data :chart-type) (get-in data [:meta key :color]) key)))))

(defn line-chart-comp [data]
  [:div
   (into []
         (concat
          [:> line-chart {:width 350 :height 200
                          :margin {:top 0 :right 0
                                   :bottom 0 :left -40}
                          :data (transform data)}
           ;; TODO read x-axis from settings
           [:> x-axis {"dataKey" :x-axis}]
           [:> y-axis]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> tooltip]
           [:> legend]]
          (dimensions data)))])

(defn scatter-chart-comp
  [data]
  [:div
   (into []
         (concat
          [:> scatter-chart {:width 350 :height 200
                             :margin {:top 0 :right 0
                                      :bottom 0 :left -40}}
           [:> x-axis {"dataKey" "incidents"}]
           [:> y-axis {"dataKey" "traffic"}]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> scatter {:data (transform data)
                        :name "incidents/traffic"}]
           [:> tooltip]
           [:> legend]]
          (dimensions data)))])

(defn area-chart-comp
  [data]
  [:div
   (into []
         (concat
          [:> area-chart {:width 350 :height 200
                          :margin {:top 0 :right 0
                                   :bottom 0 :left -40}
                          :data (transform data)}
           [:> x-axis {"dataKey" :time}]
           [:> y-axis]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> tooltip]
           [:> legend]]
          (dimensions data)))])


