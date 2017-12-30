(ns dashboard.views
  (:require
   [dashboard.styles.core :as styles]
   [dashboard.grid :as grid]
   [dashboard.db :refer [db]]
   [stylefy.core :as stylefy]
   [cljs-http.client :as http]
   [stylefy.core :as stylefy :refer [use-style]]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  (let [data-endpoint (-> js/window .-location .-href)]
   [:section.hero.is-fullheight
    [:div.hero-body
     [:div.container
      [:div.column.is-8.is-offset-2
       [:div.box
        [:div.instructions
          [:h4.title.is-4 "Usage"]
          [:div.usage "Get started by POSTing metrics to the data endpoint of this dashboard:"]
          [:p]
          [:code "http POST " data-endpoint " commits:=3"]
          [:p]
          [:div.usage "The time will be set automatically. You can override the time value like this:"]
          [:p]
          [:code "http POST " data-endpoint " commits:=3 time:=1510851134350"]
          [:p]
          [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]
          [:div.usage "To automatically sum the values, you can specify a mode:"]
          [:p]
          [:code "http POST " data-endpoint " bugs-fixed:=1 mode=sum"]]]]]]]))

(defn page
  []
  (let [board-state (@db :board)]
    [:div.top-container]
    ;;[dev-toolbar]
    (if (or (nil? board-state) (empty? (board-state :charts)))
      [instructions]
      [:div.container
       [grid/main board-state]])))
