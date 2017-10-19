(ns dashboard.grid
  (:require
   [dashboard.styles.core :as styles]
   [stylefy.core :as stylefy :refer [use-style]]))

(defn main
  [{:keys [width height state]}]
  [:div.grid (use-style styles/grid-style)
   [:h1 (:text state)]])
