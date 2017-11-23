(ns dashboard.views
  (:require
   [stylefy.core :as stylefy]
   [cljs-http.client :as http]
   [reagent.core :as reagent :refer [atom]]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  [:div.instructions
   [:h4.title.is-4 "Usage"]
   [:div.usage "Get started by POSTing metrics to /api/dashboard:"]
   [:p]
   [:code "http POST /api/dashboard commits:=3"]
   [:p]
   [:div.usage "The time will be set automatically. You can override the time value like this:"]
   [:p]
   [:code "http POST /api/dashboard commits:=3 time:=1510851134350"]
   [:p]
   [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]
   [:div.usage "Note: The data is currently not persisted."]])

(defn- randomize-button
  "Randomizes data of the dashboard."
  []
  [:div.button {:on-click (fn [] (http/post "/api/random" {:json-params {:foo :bar}}))}
   "Randomize"])

(defn- reset-button
  "Resets data of the dashboard, can be used to show instructions again."
  []
  [:div.button {:on-click (fn [] (http/post "/api/reset" {:json-params {:foo :bar}}))}
   "Reset"])

(defn dev-toolbar
  []
  [:div.dev-toolbar
   [randomize-button]
   [reset-button]])


(defn dashboard-container
  "Injects app-state into dashboard, enables re-render"
  []
  [:div.top-container
   ;;[dev-toolbar]
   (if (or (nil? @app-state) (empty? (@app-state :charts)))
     [instructions]
     [:div.container
      [grid/main @app-state]])])

(defn app []
  (stylefy/init))
