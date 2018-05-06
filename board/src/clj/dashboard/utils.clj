(ns dashboard.utils)

(defn str->int
  "Returns an int, doesn't attempt parsing if already int or doesn't match regex of
  an int."
  [str]
  (cond
    (number? str) str
    (and (re-matches (re-pattern "\\d+") str) (string? str)) (read-string str)
    :else str))
