(ns dashboard.actions
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [dashboard.db :refer [db]]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<! chan]]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]))

(defn- extract-id
  "Extracts board id from current URL."
  []
  (-> js/window
      .-location
      .-pathname
      (clojure.string/split #"/")
      last))

(defn init-db!
  []
  (let [id (extract-id)]
    (debugf "Initializing db with board-id: %s" id)
    (reset! db {:id id})))

(defn set-board-state!
  [state]
  (swap! db assoc :board state))

(defn init-poller!
  []
  (let [id (extract-id)
        timer (chan)]
    (debugf "Initializing poller with board-id: %s" id)
    (js/setInterval #(go (>! timer :tick)) 5000)
    (go-loop []
      (let [{response :body} (<! (http/get (str "/data/" (extract-id))))]
          (debugf "Setting state: %s" response)
          (set-board-state! response))
      (<! timer)
      (recur))))
