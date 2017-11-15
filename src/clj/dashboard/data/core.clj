(ns dashboard.data.core)

(defn- average-strategy [before after]
  )

(defn- full-join
  "Joins two tuple vectors `t1` and `t2`.
   Non-existing values are filled with nil"
  ([t1 t2]
   (full-join t1 t2 []))
  ([t1 t2 joined]
   (let [t1x (first (first t1))
         t1y (second (first t1))
         t2x (first (first t2))
         t2y (second (first t2))]
     (cond
       (and (empty? t1) (empty? t2)) joined
       (empty? t2) (full-join (rest t1) t2 (conj joined [t1x t1y nil]))
       (empty? t1) (full-join t1 (rest t2) (conj joined [t2x nil t2y]))
       (< t1x t2x) (full-join (rest t1) t2 (conj joined [t1x t1y nil]))
       (> t1x t2x) (full-join t1 (rest t2) (conj joined [t2x nil t2y]))
       (= t1x t2x) (full-join (rest t1) (rest t2) (conj joined [t1x t1y t2y]))
       :else (throw (IllegalStateException. (str "full-join t1: " t1 " t2: " t2)))))))

(defn full-join-average
  "Join two tuple vectors `t1` and `t2` using the :nil join strategy."
  [t1 t2]
  (apply-strategy (full-join t1 t2) average-strategy))
