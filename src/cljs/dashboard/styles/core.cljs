(ns dashboard.styles.core)

;; debug
(def component-style {:background-color "transparent"})

(def grid-wrapper {:display "flex"
                   :flex-direction "row"
                   :flex-wrap "wrap"})

(def card-style {:background-color "#273646"
                 :border "none"
                 :margin "0.3em"})

(def margin-top {:margin-top "12px"})

(def card-content-style {:padding "0.5em"})

(defn grid-item-style
  [{:keys [x y width height]}]
  {:grid-column (str x "/" (+ x width))
   :grid-row (str y "/" (+ y height))})
