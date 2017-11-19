(ns dashboard.core
  (:require [dashboard.pipeline.event :refer [fold-events post->event generate-events]]
            [dashboard.pipeline.group :refer [group process]]
            [dashboard.pipeline.configure :refer [configure]]
            [dashboard.pipeline.transform :refer [transform]]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]))

(timbre/set-level! :trace) 

;; TODO simple form of persistence by writing timeseries to files
(def events (atom []))

(defn pipeline [events]
  ((comp transform configure process group fold-events) events))

(defn fetch-state! []
  (pipeline @events))

(defn- store-event!
  [event]
  (swap! events conj event)
  (tracef "Stored event: %s" event)
  (fetch-state!))

(defn store-post-and-broadcast!
  [post broadcast-state]
  (let [event (post->event post)]
      (broadcast-state (store-event! event))))

(defn generate-state-and-broadcast!
  [broadcast-state]
  (let [generated-events (generate-events 10)]
    (reset! events generated-events)
    (broadcast-state (pipeline generated-events))))
