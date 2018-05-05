(ns dashboard.views
  (:require
   [dashboard.grid :as grid]
   [dashboard.db :refer [db]]
   [cljs-http.client :as http]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  (let [data-endpoint (str (-> js/window .-location .-origin)
                           "/api/data"
                           (-> js/window .-location .-pathname))]
   [:section.hero.is-fullheight
    [:div.hero-body
     [:div.container
      [:div.column.is-8.is-offset-2
       [:div.box
        [:div.instructions
          [:h4.title.is-4 "Usage"]
          [:div.usage "Get started by pushing metrics to the data endpoint of this dashboard. Just set the data as
                       query parameter and issue a GET request:"]
          [:p]
          [:code data-endpoint "?foo=3"]
          [:p]
          [:div.usage "The time will be set automatically. You can override the time value like this:"]
          [:p]
          [:code data-endpoint "?foo=3&time=1510851134350"]
          [:p]
          [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]
          [:div.usage "To automatically sum the values, you can specify a mode:"]
          [:p]
          [:code data-endpoint "?foo=3&mode=sum"]]]]]]]))

(defn page
  []
  (let [board-state (@db :board)]
    [:div.top-container]
    (if (or (nil? board-state) (empty? (board-state :charts)))
      [instructions]
      [:div.container
       [grid/main board-state]])))
