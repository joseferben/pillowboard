(ns dashboard.event
  (:require
   [clojure.spec.alpha :as s]))

(s/def ::time integer?)
(s/def ::label keyword?)
(s/def ::value number?)
(s/def ::event (s/keys :req-un [::time ::label ::value]))

;; atom holding all the state as events
(def events (atom []))

(defn- post->event
  [post]
  {:time (System/currentTimeMillis)
   :label (first (keys post)) 
   :value (first (vals post))}) 

(defn store-post!
  [post chsk-send!]
  (let [event (post->event post)]
    (if (s/valid? ::event event)
      (swap! events conj event)
      (throw (IllegalArgumentException. (str "Tried to store malformed event: " event))))))

(defn process-data
  [data [time value]]
  [[(conj (first data) time)]
   [(conj (second data) value)]])

(defn process-content
  [{:keys [time label value]} state]
  (-> state
      (update-in [:content label :data] process-data [time label value])
      (update-in [:content label :meta :labels] [:time label])))

(defn process-config
  [event state])

(defn process
  [event state]
  (->> state
      (process-content event)
      (process-config event)))

(defn process-events
  ([events]
   (process-events events {}))
  ([to-process processed]
   (process-events (rest events) (process (first events) processed))))