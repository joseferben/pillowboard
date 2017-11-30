(ns dashboard.core
  (:require [dashboard.pipeline.event :refer [fold-events post->event generate-events]]
            [dashboard.pipeline.group :refer [group process]]
            [dashboard.pipeline.configure :refer [configure]]
            [dashboard.pipeline.transform :refer [transform]]
            [dashboard.auth :refer [str->int]]
            [dashboard.db :refer [events-all event-insert!]]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

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

;; TODO fix?
(defn generate-state-and-broadcast!
  [broadcast-state]
  ;;(let [generated-events (generate-events 15)]
  ;;  (reset! events generated-events)
  ;;  (broadcast-state (pipeline generated-events))))
  )

;; TODO fix?
(defn reset-state-and-broadcast!
  [broadcast-state]
  ;;(event-delete-all!)
  ;;(broadcast-state (pipeline @events))
  )
