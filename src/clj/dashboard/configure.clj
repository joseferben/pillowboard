(ns dashboard.configure)

(def default-colors ["#934444" "#FF5733" "#33CAFF" "#7D33FF"])
(def default-board-config {:width 2})
(def chart-types {:timeseries {:absolute :linechart
                               :ratio :areachart}})

(defn- configure-metric [metric idx]
  (assoc metric :color (nth default-colors (mod idx (count default-colors)))))

(defn- configure-metrics [metrics]
  (loop [idx 0
         to-configure metrics
         configured []]
    (if (empty? to-configure)
      configured
      (recur (inc idx) (rest to-configure) (conj configured (configure-metric (first to-configure) idx))))))

(defn- assign-chart-type [chart]
  (let [{:keys [category sub-category]} chart]
    (assoc chart :chart-type (get-in chart-types [category sub-category]))))

(defn- configure-chart [chart]
  (-> chart
      (update :metrics configure-metrics)
      assign-chart-type
      (dissoc :count :category :sub-category)))

(defn- configure-board [charts]

  {:charts (vec (map configure-chart charts))
   :config default-board-config})

(defn configure [merged]
  (configure-board merged))
