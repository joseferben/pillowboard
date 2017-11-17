(ns dashboard.styles.core)

;; debug
(def component-style {:color "#333333"
                      :background-color "#FFFFFF"
                      :border "0px solid black"})

(def grid-wrapper {:display "flex"
                   :flex-direction "row"
                   :flex-wrap "wrap"})

(defn grid-item-style
  [{:keys [x y width height]}]
  {:grid-column (str x "/" (+ x width))
   :grid-row (str y "/" (+ y height))})

