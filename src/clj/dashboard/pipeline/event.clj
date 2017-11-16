(ns dashboard.pipeline.event
  (:require [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.spec.alpha :as s]))

(timbre/set-level! :trace) 

(defn epoch->date
  [millis]
  (str (java.util.Date. millis)))

(defn- conj-metrics [metrics [time value]]
  (update metrics :data
          (fn [old]
            [(conj (first old) time)
             (conj (second old) value)])))

(defn- extract-metric-name
  "Extracts label from set of tupels."
  [metric]
  (->> metric
      :data
      first
      keys
      (filter #(not= % "time"))
      first))

(defn- get-idx [state name]
  (prn (first state))
  (loop [idx 0
         state state]
    (cond
      (empty? state) -1
      (= name (extract-metric-name (first state))) idx
      :else (recur (inc idx) (rest state)))))

(defprotocol Event
  (fold-event [x state]))

(defrecord TimeSeriesEvent [name time value]
  Event
  (fold-event [x state]
    (let [idx (get-idx state name)]
      (if (= idx -1)
        (conj state {:category :timeseries
                     :data #{{"time" time name value}}})
        (update-in state [idx :data] conj {"time" time name value})))))

(defrecord GaugeEvent [name value]
  Event
  (fold-event [x state]
    (let [idx (get-idx state name)]
      (if (= idx -1)
        (conj state {:category :gauge
                     :name name
                     :data value})
        (assoc-in state [idx :data] value)))))

(defn- extract-name [post]
  (first (filter #(= % :type) (keys post))))

(defmulti post->event (fn [post] (post :type)))

(defmethod post->event :gauge [post]
  (debugf "Received raw post of type gauge: %s" post)
  (let [name (extract-name post)
        value (read-string (get post name))]
    (GaugeEvent. name value)))

(defmethod post->event :default [post]
  (debugf "Received raw post of type timeseries: %s" post)
  (let [name (extract-name post)
        value (read-string (get post name))
        time (or (post :time) (System/currentTimeMillis))]
    (TimeSeriesEvent. name time value)))

(defn fold-events
  [events]
  (loop [to-process events
         processed []]
    (if (empty? to-process)
      processed
      (recur (rest to-process) (fold-event (first to-process) processed)))))
