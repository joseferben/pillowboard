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

(defn- derive-meta [{metrics :metrics}]
  (->> metrics
      first
      keys
      (map-indexed (fn [idx item] {item {:color (nth default-colors idx)}}))
      set))

(defn- assign-chart-type
  "Assigns a chart-type reading meta data of a `chart` like category or sub-category."
  [chart]
  (let [{:keys [category sub-category]} chart]
    (assoc chart :chart-type (get-in chart-types [category sub-category]))))

(defn- configure-chart
  "Returns a configured chart given a grouped metric as `chart`."
  [chart]
  (-> chart
      (assoc :meta (derive-meta chart))
      assign-chart-type
      (dissoc :count :category :sub-category)))

(defn- configure-board [charts]
  {:charts (vec (map configure-chart charts))
   :config default-board-config})

(defn configure
  "Configures whole board."
  [merged]
  (configure-board merged))
