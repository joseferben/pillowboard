(ns dashboard.core
  (:require [dashboard.db :refer [event-insert! events-all]]
            [dashboard.pipeline.configure :refer [configure]]
            [dashboard.pipeline.event :refer [fold-events post->event]]
            [dashboard.pipeline.group :refer [group process]]
            [dashboard.pipeline.transform :refer [transform]]
            [dashboard.utils :refer [str->int]]
            [taoensso.timbre :as timbre :refer [debugf]]))

(defn- pipeline [events]
  ((comp transform configure (partial process :last) group fold-events) events))

(defn fetch-state!
  "Returns the state of the dashboard with id `board-id`."
  [board-id]
  (pipeline (events-all board-id)))

(defn- store-event!
  [event board-id]
  (debugf "Event to store: %s" event)
  (event-insert! event board-id)
  (debugf "Stored event: %s" event)
  (fetch-state! board-id))

(defn store-post!
  "Stores data from a POST to the board with `board-id`."
  [board-id post]
  (if (nil? post)
    nil
    (store-event! (post->event post) board-id)))
