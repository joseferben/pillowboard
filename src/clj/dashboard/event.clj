(ns dashboard.event
  (:require [dashboard.inflater :as inflater]
            [dashboard.transformer :as transformer]
            [taoensso.timbre :as timbre :refer (tracef debugf infof warnf errorf)]
            [clojure.spec.alpha :as s]))

(timbre/set-level! :trace) 

(s/def ::time integer?)
(s/def ::label keyword?)
(s/def ::value number?)
(s/def ::event (s/keys :req-un [::time ::label ::value]))

;; atom holding all the state as events
(def events (atom []))

(defn epoch->date
  [millis]
  (str (java.util.Date. millis)))

(defn- post->event
  [post]
  (debugf "Received raw post: %s" post)
  {:type :time-point
   :time (or (post :time) (System/currentTimeMillis))
   :label (keyword (first (keys post)))
   :value (read-string (first (vals post)))}) 

(defn- process-data
  [data [time value]]
  [(conj (or (first data) []) time)
   (conj (or (second data) []) value)])

(defn- get-data-key
  ([label folded]
   (get-data-key label folded 0))
   ([label folded counter]
  (let [data (get-in folded [:content label :data])]
        (if (or (nil? data) (< (count data) 3))
          label
          (get-data-key (keyword (str label counter)) folded (inc counter))))))

(defn- conj-meta-data [old time label value]
  )

(defn- conj-time-data [old-data time label value]
  (merge-with into {}
              ))
  
(defmulti fold-event (fn [event _] (event :type)))

(defmethod fold-event :time-point [{:keys [time label value]} folded]
  (let [data-key (get-data-key label folded)]
    (merge-with into
    (update-in folded [:content data-key :data] conj-time-data {:time time :value value})
    (update-in folded [:content data-key :meta] conj-meta-data time label value))))

  ;;(-> folded
  ;;    (update-in [:content label :data] process-data [(epoch->date time) value])
  ;;    (assoc-in [:content label :meta :labels] [:x-axis label])))

(defn- fold-events
  ([events]
   (fold-events events {}))
  ([to-process processed]
   (if (empty? to-process)
     processed
     (fold-events (rest to-process) (fold-event (first to-process) processed)))))

(defn- make-renderable
  [data]
  (-> data
      (inflater/inflate)
      (transformer/transform)))

(defn- store-event!
  [event]
  (swap! events conj event)
  (tracef "Stored event: %s" event)
  (make-renderable (fold-events @events)))

(defn store-post!
  [post broadcast-state]
  (let [event (post->event post)]
    (if (s/valid? ::event event)
      (broadcast-state (store-event! event))
      (throw (IllegalArgumentException. (str "Tried to store malformed event: " event))))))

(defn get-state!
  []
  (make-renderable (fold-events @events)))
