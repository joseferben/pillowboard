(ns dashboard.views
  (:require
   [dashboard.styles :as s]
   [dashboard.grid :as grid]
   [dashboard.db :refer [db]]
   [dashboard.actions :refer [init-poller!]]
   [stylefy.core :refer [use-style]]
   [cljs-http.client :as http]))

(defn header
  []
  [:div (use-style (merge {:text-align "center"} s/centric-content))
   [:a {:href "https://pillowboard.io"}
    [:img {:src "/images/pillow.svg" :width "180em"}]]])

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  (init-poller!)
  (let [data-endpoint (str (-> js/window .-location .-origin)
                           "/api/data"
                           (-> js/window .-location .-pathname))]

   [:div (use-style s/centric-content)
    [header]
    [:div
     [:h5 "How to"]
     [:div.usage "Get started by pushing metrics to the data endpoint of this dashboard. Just set the data as query parameter and issue a GET request:"]
     [:figure
      [:code data-endpoint "?foo=3"]]
     [:div.usage "The time will be set automatically. You can override the time value like this:"]
     [:figure
      [:code data-endpoint "?foo=3&time=1510851134350"]]
     [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]
     [:div.usage "To automatically sum the values, you can specify a mode:"]
     [:figure
       [:code data-endpoint "?foo=3&mode=sum"]]]]))

(defn starter
  []
  [:div (use-style s/centric-content)
   [header]
   [:div.welcome (use-style {:margin-top "7em"})
     [:b "Pillowboard.io"]
     [:span " visualizes your data without any prior configuration. Start pushing your data, no registration required."]
    [:p]
    [:span "Visit your personal dashboard to get started: "]
    [:br]
    (let [personal-url (str (-> js/window .-location .-origin) "/" (random-uuid))]
      [:a {:href personal-url} personal-url])]])

(defn page
  []
  (let [board-state (@db :board)]
    [:div
     (cond
      (= "/" (-> js/window .-location .-pathname)) [starter]
      (or (nil? board-state) (empty? (board-state :charts))) [instructions]
      :else [:div.container [grid/main board-state]])]))
