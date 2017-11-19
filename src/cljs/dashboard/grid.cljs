(ns dashboard.grid
  (:require
   [dashboard.styles.core :as styles]
   [dashboard.charts.core :as charts]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [stylefy.core :as stylefy :refer [use-style]]))

(timbre/set-level! :debug)

(defmulti chart-type :chart-type)

(defmethod chart-type :linechart [data]
  [:div.card (merge {:key (data :key)} (use-style styles/card-style))
   [:div.card-content (use-style styles/card-content-style)
    [:div.chart (use-style styles/component-style)
     [charts/line-chart-comp data]]]])

(defmethod chart-type :areachart [data]
  [:div.card (merge {:key (data :key)} (use-style styles/card-style))
   [:div.card-content (use-style styles/card-content-style)
    [:div.chart (use-style styles/component-style)
     [charts/area-chart-comp data]]]])

(defmethod chart-type :scatterchart [data]
  [:div.chart (merge {:key (data :key)}
                     (use-style (merge styles/component-style)))
  [charts/scatter-chart-comp data]])

(defn- render-charts
  [charts]
  (doall (map chart-type charts)))

(defn main
  [{charts :charts}]
  (debugf "Rendering state: %s" charts)
  [:div.grid (use-style (merge styles/grid-wrapper styles/component-style))
   (render-charts charts)])
