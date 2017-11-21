(ns dashboard.core
  (:require [dashboard.pipeline.event :refer [fold-events post->event generate-events]]
            [dashboard.pipeline.group :refer [group process]]
            [dashboard.pipeline.configure :refer [configure]]
            [dashboard.pipeline.transform :refer [transform]]
            [dashboard.db :refer [event-all event-insert! event-delete-all!]]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

(timbre/set-level! :trace)

;; TODO simple form of persistence by writing timeseries to files
(def events (atom []))

(defn pipeline [events]
  ((comp transform configure (partial process :last) group fold-events) events))

(defn fetch-state! []
  (pipeline (event-all)))

(defn- store-event!
  [event]
  (event-insert event)
  (tracef "Stored event: %s" event)
  (fetch-state!))

(defn store-post-and-broadcast!
  [post broadcast-state]
  (let [event (post->event post)]
    (broadcast-state (store-event! event))))

(defn generate-state-and-broadcast!
  [broadcast-state]
  (let [generated-events (generate-events 15)]
    (reset! events generated-events)
    (broadcast-state (pipeline generated-events))))

(defn reset-state-and-broadcast!
  [broadcast-state]
  (event-delete-all!)
  (broadcast-state (pipeline @events)))
