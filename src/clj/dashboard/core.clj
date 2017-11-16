(ns dashboard.core
  (:require [dashboard.pipeline.event :refer [fold-events post->event]]
            [dashboard.pipeline.group :refer [group process]]
            [dashboard.pipeline.configure :refer [configure]]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

(timbre/set-level! :trace) 

;; TODO simple form of persistence by writing timeseries to files
(def events (atom []))

(defn pipeline [folded]
  (comp configure process group))

(defn fetch-state! []
  (pipeline (fold-events @events)))

(defn- store-event!
  [event]
  (swap! events conj event)
  (tracef "Stored event: %s" event)
  (fetch-state!))

(defn store-post-and-broadcast!
  [post broadcast-state]
  (let [event (post->event post)]
      (broadcast-state (store-event! event))))

