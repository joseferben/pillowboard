(ns dashboard.transform)

(defn- transform-meta [{:keys [metrics]}]
  (->> metrics
       (map #(dissoc % :data))
       vec))

(defn- metrics->matrix [metrics]
  (->> metrics
      (map #(get % :data))
      vec
      (apply mapv vector)))

(defn- transform-metrics [{:keys [metrics]}]
  (let [names (map #(get % :name) metrics)]
    (->> metrics
         metrics->matrix
         (map (fn [row] (zipmap names row))))))

(defn- transform-chart [chart]
  (-> chart
      (assoc :data (transform-metrics chart))
      (assoc :meta (transform-meta chart))
      (dissoc :metrics)))

(defn transform [configured]
  (update configured :charts (fn [charts] (map transform-chart charts))))
