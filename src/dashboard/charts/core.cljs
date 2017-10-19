(ns dashboard.charts.core
  (:require
   [cljsjs.recharts]))

(defn line-chart []
  js/Recharts.LineChart)

(defn line []
  js/Recharts.Line)

(defn x-axis []
  js/Recharts.XAxis)

(defn y-axis []
  js/Recharts.YAxis)

(defn cartesian-grid []
  js/Recharts.CartesianGrid)

(defn tooltip []
  js/Recharts.Tooltip)

(defn legend []
  js/Recharts.Legend)

(defn line-chart-comp
  [data]
  [linechart-react #js {}]
  [:h2 "Line chart"])
