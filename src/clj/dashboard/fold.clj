(ns dashboard.fold
  (:require [dashboard.event :as event])

(defmulti fold-event (fn [event _] (event :type)))

(defmethod fold-event :time-point [{:keys [time label value]} folded]
  (let [data-key (get-data-key label folded)]
    (merge-with into
    (update-in folded [:content data-key :data] conj-time-data {:time time :value value})
    (update-in folded [:content data-key :meta] conj-meta-data time label value))))

(defn- fold-events
  ([events]
   (fold-events events {}))
  ([to-process processed]
   (if (empty? to-process)
     processed
     (fold-events (rest to-process) (fold-event (first to-process) processed)))))

