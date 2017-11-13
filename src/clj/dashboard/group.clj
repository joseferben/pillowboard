(ns dashboard.group)

;; invariants that must hold true
(def max-metrics-per-group 3)

(defn- has-space-left? [_ group]
  (< (group :count) max-metrics-per-group))

(defn- same-category? [metric group]
  (= (metric :category) (group :category)))

(defn- determine-sub-category [values]
  (cond
    (and (<= 0 (apply min values)) (>= 1 (apply max values))) :ratio
    :else :absolute))

(defn- same-sub-category? [metric group]
  (-> metric
      :data
      second
      determine-sub-category
      (= (group :sub-category))))

(def invariants [has-space-left? same-category? same-sub-category?])

(defn- is-compatible? [metric group]
  (every? (map #(apply % metric group) invariants)))

(defn- create-group [metric]
  {:category (metric :category)
   :sub-category (determine-sub-category (second (metric :data)))
   :count 1})

(defn- add-metric [metric grouped]
  )

(defn group [folded]
  (loop [grouped []
         to-group folded]
    (if (empty? to-group)
      grouped
      (recur (add-metric (first to-group) grouped) (rest to-group)))))
