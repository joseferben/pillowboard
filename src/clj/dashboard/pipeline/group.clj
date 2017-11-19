(ns dashboard.pipeline.group
  "Contains functions for grouping and processing metrics."
  (:require [dashboard.data.core :refer [full-join]]))

;; invariants that must hold true
(def max-metrics-per-group 3)

(defn- extract-label [metric]
  (->> metric
      first
      keys
      (filter #(not= % "time"))
      first))

(defn- has-space-left? [_ grp]
  (< (grp :count) max-metrics-per-group))

(defn- same-category? [metric grp]
  (= (metric :category) (grp :category)))

(defn- determine-sub-category [metric]
  (let [values (map #(get % (extract-label metric)) metric)]
    (cond
      (and (<= 0 (apply min values)) (>= 1 (apply max values))) :ratio
      :else :absolute)))

(defn- same-sub-category? [metric grp]
  (-> metric
      :data
      determine-sub-category
      (= (grp :sub-category))))

(def invariants [has-space-left? same-category? same-sub-category?])

(defn- is-compatible? [metric group]
  (every? true? (map #(% metric group) invariants)))

(defn- create-group [metric]
  {:category (metric :category)
   :sub-category (determine-sub-category (metric :data))
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

(defn group [folded]
  (loop [grouped []
         to-group folded]
    (if (empty? to-group)
      grouped
      (recur (add-to-grouped (first to-group) grouped) (rest to-group)))))

(defn process
  "Processed grouped data by executing a full-join on the time dimension."
  ([grouped]
   (process nil grouped))
  ([strategy grouped]
   (map #(update % :metrics (partial full-join "time" strategy)) grouped)))
