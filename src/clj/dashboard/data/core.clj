(ns dashboard.data.core
  (:require [clojure.set :as set]))

(defn- last-value-strategy
  "This is a join-strategy that replaces an unknown value with the last known value."
  [before item all-keys]
  (reduce (fn [acc key]
            (assoc acc key (or (get item key) (get before key) 0))) {} all-keys))

(defn- merge-doubles [k tuples]
  (reduce (fn [acc item] (if (= (get (last acc) k) (get item k))
                           (vec (conj (drop-last acc) (merge (last acc) item)))
                           (conj acc item)))
          [] tuples))

(defn- full-join-tuples [t1 t2 k]
  (->> (set/union t1 t2)
       (sort (fn [a b] (compare (get a k) (get b k))))
       vec
       (merge-doubles k)
       (sort (fn [a b] (compare (get a k) (get b k))))
       vec))

(defn- get-all-keys [vs]
  (keys (apply merge vs)))

(defn- iterate-values
  "Applies strategy to all elements with value nil"
  [strategy]
  (fn [vals]
    (let [all-keys (get-all-keys vals)]
      (get (reduce (fn [acc val]
                         (let [new-val (strategy (acc :before) val all-keys)]
                           (assoc (update acc :result conj new-val) :before new-val)))
                       {:result [] :before nil} vals) :result))))

(defn- apply-strategy
  "Applies `strategy` to `joined` data to deal with nil entries."
  [joined strategy]
  ((iterate-values strategy) joined))

(defn full-join
  "Joins two tuples `t1` and `t2` on `key` using the default `last-value-strategy` join strategy."
  ([k t1 t2]
   (set (apply-strategy (full-join-tuples t1 t2 k) last-value-strategy)))
  ([k tuples]
   (reduce (fn [acc item] (full-join k acc item)) tuples)))
