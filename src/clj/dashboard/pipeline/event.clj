(ns dashboard.pipeline.event
  (:require [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]))

(timbre/set-level! :trace)

(def event-labels '("commit" "merge-request" "user-registration"
                       "incident" "error" "alert" "tickets-done"
                       "time-spent" "foo" "bar"))
(s/def ::time-value (s/and int? pos?))
(s/def ::metric-value (s/and number?))
(s/def ::metric-name (s/and string?))

(s/def ::name ::metric-name)
(s/def ::time ::time-value)
(s/def ::value ::metric-value)

(s/def ::timeseries-event (s/keys :req-un [::name ::time ::value]))
(s/def ::gauge-event (s/keys :req-un [::name ::value]))
(s/def ::tuple-event (s/keys :req-un [::name1 ::value1 ::name2 ::value2]))

(defn event-type
  "Maps event data to an event type by analyzing the map structure.
   Supports higher arity calls."
  [event & _]
  (cond
    (s/valid? ::timeseries-event event) :timeseries
    (s/valid? ::gauge-event event) :gauge
    (s/valid? ::tuple-event event) :tuple
    :else :invalid))

(defn- extract-metric-name
  "Extracts label from set of tupels."
  [metric]
  (->> metric
      :data
      first
      keys
      (filter #(not= % "time"))
      first))

(defn- get-idx [state label]
  (loop [idx 0
         state state]
    (cond
      (empty? state) -1
      (= label (extract-metric-name (first state))) idx
      :else (recur (inc idx) (rest state)))))

(defmulti fold-event
  "Folds an event on already folded events to make up the initial state."
  event-type)

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

(defn- extract-name
  "Extract the event name of a post."
  [post]
  (first (filter #(not= % :type) (keys post))))

(defmulti post->event
  "Maps a post to an event."
  (fn [post] (post :type)))

(defmethod post->event :gauge [post]
  (debugf "Received raw post of type gauge: %s" post)
  (let [label (extract-name post)
        value (str (get post label))]
    {:name (name label) :value value}))

(defmethod post->event :default [post]
  (debugf "Received raw post of type timeseries: %s" post)
  (let [label (extract-name post)
        value (get post label)
        time (or (post "time") (System/currentTimeMillis))]
    {:name (name label) :time time :value value}))

(defn- random-event [label]
  {:name label :time (System/currentTimeMillis) :value (rand 5)})

(defn- randomize-value [before]
  (if (and (<= 0 (before :value)) (>= 1 (before :value)))
    (assoc before :value (rand 1))
    (update before :value (rand-nth [+ -]) (rand 30))))

(defn- randomize-event [before]
  (-> before
      (update :time + (rand-int 500))
      randomize-value))

(defn- random-events [n label]
  (take n (iterate randomize-event (random-event label))))

(defn fold-events
  "Returns folded events as initial board state given a seq of events."
  [events]
  (loop [to-process events
         processed []]
    (if (empty? to-process)
      processed
      (recur (rest to-process) (fold-event (first to-process) processed)))))

(defn generate-events
  ([n]
   (generate-events n event-labels '()))
  ([n labels result]
   (if (empty? labels)
     result
     (generate-events n (rest labels)
                      (concat result (random-events n (first labels)))))))
