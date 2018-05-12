(ns dashboard.views
  (:require
   [dashboard.styles :as s]
   [dashboard.grid :as grid]
   [dashboard.db :refer [db]]
   [dashboard.actions :refer [init-poller!]]
   [stylefy.core :as stylefy]
   [cljs-http.client :as http]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  (init-poller!)
  (let [data-endpoint (str (-> js/window .-location .-origin)
                           "/api/data"
                           (-> js/window .-location .-pathname))]
    [:div
     [:h5 "Usage"]
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
     [:code data-endpoint "?foo=3&mode=sum"]]))

(defn starter
  []
  [:div
   [:h5 "Your generated dashboard:"]
   [:a {:href (str "/" (random-uuid))} "Open"]])

(defn page
  []
  (let [board-state (@db :board)]
    [:div.content-container (stylefy/use-style s/centric-content)
     (cond
      (= "/" (-> js/window .-location .-pathname)) [starter]
      (or (nil? board-state) (empty? (board-state :charts))) [instructions]
      :else [:div.container [grid/main board-state]])]))
