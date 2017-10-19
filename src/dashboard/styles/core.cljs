(ns dashboard.styles.core)

;; debug
(def component-style {:color "#333333"
                      :background-color "#FFFFFF"
                      :border "0px solid black"})

(def grid-wrapper {:display "grid"
                   :grid-template-columns "repeat(3, 1fr)"
                   :grid-gap "0.2em"
                   :grid-auto-rows "minmax(100px, auto)"})

(defn grid-item-style
  [{:keys [x y width height]}]
  {:grid-column (str x "/" (+ x width))
   :grid-row (str y "/" (+ y height))})

