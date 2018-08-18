(ns dashboard.pipeline.transform)

(defn sort-metrics [metrics]
  (sort (fn [a b] (compare (get a "time") (get b "time"))) metrics))

(defn- sort-charts [charts]
  (map #(update % :metrics sort-metrics) charts))

(defn transform [configured]
  (update configured :charts sort-charts))
