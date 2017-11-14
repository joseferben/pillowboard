(ns dashboard.data.core)

(defn- nil-strategy [_]
  nil)

(def join-strategies {:nil nil-strategy})

(defn- full-join
  [t1 t2 joined]
   (cond
     (or (empty? t1) (empty t2)) joined
     (< (first (first t1)) (first (first t2))) (full-join (rest t1) t2 (conj joined [(first (first t1)) (first (second t1)) nil]))
     (> (first (first t1)) (first (first t2))) (full-join t1 (rest t2) (conj joined [(first (first t1)) nil (first (second t2))]))
     (= (first (first t1)) (first (first t2))) (full-join (rest t1) (rest t2) (conj joined [(first (first t1)) (first (second t1)) (first (second t2))]))
     :else "nope"))

(defn full-join-nil [t1 t2]
  (full-join (join-strategies :nil)))

;; Checkout https://stackoverflow.com/questions/13009939/outer-join-in-clojure
