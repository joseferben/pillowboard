(ns dashboard.data.core)

(defn- third [col]
  (if (> (count col) 3)
    (nth col 2)
    nil))
    
(defn- last-value-strategy
  "This is a join-strategy that replaces an unknown value with the last known value."
  [before item]
  (or item before 0))

(defn- full-join
  "Joins two tuple vectors `t1` and `t2`.
   Non-existing values are filled with nil.
   It it assumed that both vector are sorted by the first values of the tuples."
  ([t1 t2]
   (full-join (apply mapv vector t1) (apply mapv vector t2) []))
  ([t1 t2 joined]
   (let [t1x (first (first t1))
         t1y (second (first t1))
         t2x (first (first t2))
         t2y (second (first t2))]
     (cond
       (and (empty? t1) (empty? t2)) (apply mapv vector joined)
       (empty? t2) (full-join (rest t1) t2 (conj joined [t1x t1y nil]))
       (empty? t1) (full-join t1 (rest t2) (conj joined [t2x nil t2y]))
       (< t1x t2x) (full-join (rest t1) t2 (conj joined [t1x t1y nil]))
       (> t1x t2x) (full-join t1 (rest t2) (conj joined [t2x nil t2y]))
       (= t1x t2x) (full-join (rest t1) (rest t2) (conj joined [t1x t1y t2y]))
       :else (throw (IllegalStateException. (str "full-join t1: " t1 " t2: " t2)))))))

(defn- iterate-values
  "Applies strategy to all elements with value nil"
  [strategy]
  (fn [vals]
    (:result (reduce (fn [acc val]
                       (let [new-val (strategy (acc :before) val)]
                       (assoc (update acc :result conj new-val) :before new-val)))
                     {:result [] :before nil} vals))))

(defn- apply-strategy
  "Applies `strategy` to `joined` data to deal with nil entries."
  [joined strategy]
  (map (iterate-values strategy) joined))

(defn full-join-last-value
  "Join two tuple vectors `t1` and `t2` using the :nil join strategy."
  [t1 t2]
  (apply-strategy (full-join t1 t2) last-value-strategy))
