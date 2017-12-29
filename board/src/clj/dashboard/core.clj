(ns dashboard.core
  (:require [dashboard.pipeline.event :refer [fold-events post->event generate-events]]
            [dashboard.pipeline.group :refer [group process]]
            [dashboard.pipeline.configure :refer [configure]]
            [dashboard.pipeline.transform :refer [transform]]
            [dashboard.db :refer [events-all event-insert!]]
            [user :as user]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

(defn- str->int
  "Returns an int, doesn't attempt parsing if already int or doesn't match regex of
  an int."
  [str]
  (cond
    (number? str) str
    (and (re-matches (re-pattern "\\d+") str) (string? str)) (read-string str)
    :else str))

(defn pipeline [events]
  ((comp transform configure (partial process :last) group fold-events) events))

(defn fetch-state! [board-id]
  (pipeline (events-all (str->int board-id))))

(defn- store-event!
  [event board-id]
  (debugf "Event to store: %s" event)
  (event-insert! event (str->int board-id))
  (debugf "Stored event: %s" event)
  (fetch-state! board-id))

(defn store-post-and-broadcast!
  [post broadcast-state board-id]
  (let [event (post->event post)]
    (broadcast-state (store-event! event board-id))))
