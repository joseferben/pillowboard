(ns dashboard.pipeline.event
  (:require [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]))

(timbre/set-level! :trace) 

(s/def ::time-value (s/and int? pos?))
(s/def ::metric-value (s/and int? pos?))
(s/def ::metric-name #{"commit" "merge-request" "user-registration"
                       "incident" "error" "alert" "tickets-done"})
(s/def ::metric-type #{:timeseries})

(s/def ::type ::metric-type)
(s/def ::name ::metric-name)
(s/def ::time ::time-value)
(s/def ::value ::metric-value)

(s/def ::event (s/keys :req-un [::type ::name ::time ::value]))

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
  (loop [idx 0
         state state]
    (cond
      (empty? state) -1
      (= name (extract-metric-name (first state))) idx
      :else (recur (inc idx) (rest state)))))

(defmulti fold-event (fn [event state] (event :type)))

(defmethod fold-event :timeseries
  [{:keys [time name value]} state]
  (let [idx (get-idx state name)]
    (if (= idx -1)
        (conj state {:category :timeseries
                     :data #{{"time" time name value}}})
        (update-in state [idx :data] conj {"time" time name value}))))

(defmethod fold-event :gauge
  [{:keys [name value]} state]
  (let [idx (get-idx state name)]
      (if (= idx -1)
        (conj state {:category :gauge
                     :name name
                     :data value})
        (assoc-in state [idx :data] value))))

(defn- extract-name [post]
  (first (filter #(not= % :type) (keys post))))

(defmulti post->event (fn [post] (post :type)))

(defmethod post->event :gauge [post]
  (debugf "Received raw post of type gauge: %s" post)
  (let [name (extract-name post)
        value (get post name)]
    {:type :timeseries :name name :data value}))

(defmethod post->event :default [post]
  (debugf "Received raw post of type timeseries: %s" post)
  (let [name (extract-name post)
        value (get post name)
        time (or (post "time") (System/currentTimeMillis))]
    {:type :timeseries :name name :time time :data value}))

(defn fold-events
  [events]
  (loop [to-process events
         processed []]
    (if (empty? to-process)
      processed
      (recur (rest to-process) (fold-event (first to-process) processed)))))

(defn generate-events
  "Returns a list of generated events using spec."
  []
  (gen/sample (s/gen ::event) 10))
