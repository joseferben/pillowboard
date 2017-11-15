(ns dashboard.fold
  (:require [dashboard.event :as event]))

(defn- extract-label
  "Extracts label from set of tupels."
  [metric]
  (->> metric
      :data
      first
      keys
      (filter #(not= % "time"))
      first))

(defn- determine-target-idx
  "Returns the index of the metric given a `label` and the folded state `to-check`."
  [to-check label]
  (loop [to-check to-check
         label label
         idx 0]
    (cond
      (empty? to-check) -1
      (= (extract-label (first to-check)) label) idx
      :default (recur (rest to-check) label (inc idx)))))
          
(defmulti fold-event (fn [event _] (event :type)))

(defmethod fold-event :time-point [{:keys [time label value]} folded]
  (let [target-idx (determine-target-idx folded label)]
    (if (= -1 target-idx)
      (conj folded {:category :timeseries
                    :data #{{"time" time label value}}})
      (update-in folded [target-idx :data] conj {"time" time label value}))))

(defn fold-events
  "Given a vector of `events` it returns the accumulated state
  by folding all events on top of each other."
  ([events]
   (fold-events events []))
  ([to-fold folded]
   (if (empty? to-fold)
     folded
     (fold-events (rest to-fold) (fold-event (first to-fold) folded)))))

