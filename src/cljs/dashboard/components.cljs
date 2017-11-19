(ns dashboard.components
  (:require
   [stylefy.core :as stylefy]
   [cljs-http.client :as http]
   [reagent.core :as reagent :refer [atom]]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  [:div.instructions
   [:h4 "Usage"]
   [:div.usage "Get started by POSTing metrics to /dashboard:"]
   [:p]
   [:code "http POST /dashboard commits:=3"]
   [:p]
   [:div.usage "The time will be set automatically. You can override the time value like this:"]
   [:p]
   [:code "http POST /dashboard commits:=3 time:=1510851134350"]
   [:p]
   [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]
   [:div.usage "Note: The data is currently not persisted."]])

(defn randomize-button
  "Randomizes data data of the dashboard."
  []
  [:div.button {:on-click (fn [] (http/post "/api/random" {:json-params {:foo :bar}}))}
   "Randomize"])
