(ns dashboard.group)

(def max-dimensions-per-graph 3)

(defn- determine-chart-type
  [_]
  ;; TODO add logic to determine dynamically
  :line)

(defn- determine-data-type [values]
  (cond
    (and (<= 0 (apply min values)) (>= 1 (apply max values))) :ratio
    :else :absolute))
  
(defn- is-compatible?
  "Add additional compatibility checks here"
  [dimension group]
  (let [dimension-points (get-in dimension [:data 1])
        group-points (get-in group [:data 1])]
    (= (determine-data-type dimension-points)
       (determine-data-type group-points))))

(defn- create-id-if-nil [grouped id]
  (if-not (nil? id)
    id
    (->> grouped
         count
         (str "group")
         keyword)))

(defn- group-id [grouped dimension]
  (->> grouped
       (filter (fn [[_ v]] (> max-dimensions-per-graph (count v))))
       (filter (fn [[_ v]] (is-compatible? (first v) dimension)))
       keys
       first
       (create-id-if-nil grouped)))

(defn- group-dimension
  [grouped dimension]
  (let [id (group-id grouped dimension)]
    (merge-with into grouped {id [dimension]})))

(defn group
  [folded]
  (reduce group-dimension {} folded))

(defn- tupelize
  [dimension]
  (let [data (dimension :data)
        label (dimension :label)]
    (apply mapv vector
           (conj data
                 (take (count (first data)) (repeat (dimension :label)))))))

(defn- join-group
  [grouped key]
  (map tupelize (get grouped key)))

(defn join-data
  [grouped]
  (map (partial join-group grouped) (keys grouped)))

