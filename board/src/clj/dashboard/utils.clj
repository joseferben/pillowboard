(ns dashboard.utils)

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn str->int
  "Returns an int, doesn't attempt parsing if already int or doesn't match regex of
  an int."
  [str]
  (cond
    (nil? str) 0
    (number? str) str
    (and (string? str) (re-matches (re-pattern "\\d+") str) (string? str)) (read-string str)
    :else 0))
