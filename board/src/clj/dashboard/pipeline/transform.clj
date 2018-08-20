(ns dashboard.pipeline.transform)

(defn sort-metrics [metrics]
  (sort (fn [a b] (compare (:time a) (:time b))) metrics))

(defn- sort-charts [charts]
  (map #(update % :metrics sort-metrics) charts))

(defn transform [configured]
  (update configured :charts sort-charts))
