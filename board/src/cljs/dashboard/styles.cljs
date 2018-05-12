(ns dashboard.styles)

(def centric-content {:margin-left "auto"
                      :margin-right "auto"
                      :width "500px"})

(def component-style {:background-color "transparent"})

(def grid-wrapper {:display "flex"
                   :flex-direction "row"
                   :flex-wrap "wrap"})

(def card-style {:border "none"
                 :margin "0.3em"})

(def margin-top {:margin-top "12px"})

(def margin-right {:margin-right "10px"})

(def card-content-style {:padding "0.5em"})

(defn grid-item-style
  [{:keys [x y width height]}]
  {:grid-column (str x "/" (+ x width))
   :grid-row (str y "/" (+ y height))})
