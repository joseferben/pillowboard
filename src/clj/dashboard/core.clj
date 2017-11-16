(ns dashboard.core
  (:require [dashboard.pipeline.event :refer [fold-events post->event]]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

(def events (atom []))

(defn- make-renderable
  [data])

(defn fetch-state! []
  (make-renderable (fold-events @events)))

(defn- store-event!
  [event]
  (swap! events conj event)
  (tracef "Stored event: %s" event)
  (make-renderable (fold-events @events)))

(defn store-post!
  [post broadcast-state]
  (let [event (post->event post)]
      (broadcast-state (store-event! event))))

(timbre/set-level! :trace) 
