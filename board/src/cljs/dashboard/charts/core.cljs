(ns dashboard.charts.core
  (:require
   [cljsjs.recharts]
   [cljsjs.moment]
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

(def chart-dimensions {:width 600 :height 300
                       :margin {:top 0 :right 0
                                :bottom 0 :left 0}})

(defn- transform [data]
  (data :metrics))

(defn- wrapper [type color key]
  [:> (types (keyword type)) {:type "linear" "dataKey" key "stroke" color "fill" color :connectNulls true}])

(defn- millis-to-date [millis]
  (.format (js/moment. millis) "HH:mm:ss DD. MMM"))

(defn- metrics-keys
  [data]
  (-> data
      :metrics
      first
      keys
      rest))

(defn- metrics
  [data]
  (->> data
      metrics-keys
      (map (fn [key] (wrapper (data :chart-type) (get-in data [:meta key :color]) key)))))

(defn line-chart-comp [data]
  [:div
   (vec
         (concat
          [:> line-chart (merge chart-dimensions {:data (transform data)})
           ;; TODO read x-axis from settings
           [:> x-axis {"dataKey" :time :type :number :domain ["dataMin" "dataMax"]
                       :tickFormatter millis-to-date}]
           [:> y-axis]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> tooltip]
           [:> legend]]
          (metrics data)))])

(defn scatter-chart-comp
  [data]
  [:div
   (vec
         (concat
          [:> scatter-chart chart-dimensions
           [:> x-axis {"dataKey" "incidents"}]
           [:> y-axis {"dataKey" "traffic"}]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> scatter {:data (transform data)
                        :name "incidents/traffic"}]
           [:> tooltip]
           [:> legend]]
          (metrics data)))])

(defn area-chart-comp
  [data]
  [:div
   (vec
         (concat
          [:> area-chart (merge chart-dimensions
                          {:data (transform data)})
           [:> x-axis {"dataKey" :time :type :number :domain ["dataMin" "dataMax"]
                       :tickFormatter millis-to-date}]
           [:> y-axis ]
           [:> cartesian-grid {"strokeDasharray" "3 3"}]
           [:> tooltip]
           [:> legend]]
          (metrics data)))])
