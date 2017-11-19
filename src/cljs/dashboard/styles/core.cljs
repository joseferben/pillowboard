(ns dashboard.styles.core)

;; debug
(def component-style {:background-color "transparent"})

(def grid-wrapper {:display "flex"
                   :flex-direction "row"
                   :flex-wrap "wrap"})

(defn grid-item-style
  [{:keys [x y width height]}]
  {:grid-column (str x "/" (+ x width))
   :grid-row (str y "/" (+ y height))})
