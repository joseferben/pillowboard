(ns dashboard.pipeline.group
  "Contains functions for grouping and processing metrics."
  (:require [dashboard.data.core :refer [full-join]]))

;; invariants that must hold true
(def max-metrics-per-group 3)

(defn- extract-label [metric]
  (->> metric
      first
      keys
      (filter #(not= % :time))
      first))

(defn- has-space-left? [_ grp]
  (< (grp :count) max-metrics-per-group))

(defn- same-category? [metric grp]
  (= (metric :category) (grp :category)))

(defn- determine-sub-category [{:keys [data meta]}]
  (let [values (map #(get % (extract-label data)) data)]
    (cond
      (and (<= 0 (apply min values)) (>= 1 (apply max values))) :ratio
      (= (get meta :mode :none) :sum) :sum
      :else :absolute)))

(defn- same-sub-category? [metric grp]
  (-> metric
      determine-sub-category
      (= (grp :sub-category))))

(def invariants [has-space-left? same-category? same-sub-category?])

(defn- is-compatible? [metric group]
  (every? true? (map #(% metric group) invariants)))

(defn- create-group [metric]
  {:category (metric :category)
   :sub-category (determine-sub-category metric)
   :count 1
   :metrics [(metric :data)]})

(defn- conj-to-group [idx metric grouped]
  (if (= -1 idx)
    (conj grouped (create-group metric))
    ;; implement update pre- and after hooks
    (-> grouped
        (update-in [idx :metrics] conj (metric :data))
        (update-in [idx :count] inc))))

(defn- add-to-grouped
  ([metric grouped]
   (add-to-grouped metric grouped grouped 0))
  ([metric original to-check idx]
   (cond
     (empty? to-check) (conj-to-group -1 metric original)
     (is-compatible? metric (first to-check)) (conj-to-group idx metric original)
     :else (recur metric original (rest to-check) (inc idx)))))

(defn- aggregate [metrics label]
  (let [metrics (sort-by #(:time %) metrics)]
    (reduce (fn [acc b] (conj acc (assoc b label (+ (get b label 0)
                                                    (get (last acc) label 0))))) [] metrics)))

(defn- execute-aggregate
  "Given a seq of `metric`s, it aggregates the value by summing up.
   The aggregation only gets executed if `sub-category` equals :sum."
  [metric]
  (let [{:keys [metrics sub-category]} metric
        label (extract-label (first metrics))]
    (if (= sub-category :sum)
      (assoc metric :metrics (vector (set (aggregate (first metrics) label))))
      metric)))

(defn group
  "Returns a map of grouped metrics given `folded` metrics."
  [folded]
  (loop [grouped []
         to-group folded]
    (if (empty? to-group)
      grouped
      (recur (add-to-grouped (first to-group) grouped) (rest to-group)))))

(defn process
  "Processes data by executing full joins and summations based on categorization."
  ([grouped]
   (process nil grouped))
  ([strategy grouped]
   (->> grouped
        (map execute-aggregate)
        (map #(update % :metrics (partial full-join :time strategy))))))
