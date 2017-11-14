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
  (every? true? (map #(% metric group) invariants)))

(defn- create-group [metric]
  {:category (metric :category)
   :sub-category (determine-sub-category (second (metric :data)))
   :count 1
   :metrics [(dissoc metric :category)]})

(defn- conj-to-group [idx metric grouped]
  (if (= -1 idx)
    (conj grouped (create-group metric))
    ;; implement update pre- and after hooks
    (-> grouped
        (update-in [idx :metrics] conj (dissoc metric :category))
        (update-in [idx :count] inc))))

(defn- add-to-grouped 
  ([metric grouped]
   (add-to-grouped metric grouped grouped 0))
  ([metric original to-check idx]
   (cond
     (empty? to-check) (conj-to-group -1 metric original)
     (is-compatible? metric (first to-check)) (conj-to-group idx metric original)
     :else (recur metric original (rest to-check) (inc idx)))))

(defn group [folded]
  (loop [grouped []
         to-group folded]
    (if (empty? to-group)
      grouped
      (recur (add-to-grouped (first to-group) grouped) (rest to-group)))))

(defn process [grouped]
  ;; implement left join with aron
  )
