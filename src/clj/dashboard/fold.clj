(ns dashboard.fold
  (:require [dashboard.event :as event]))

(defn- conj-data-points 
  [time-new value-new[time value]]
  [(conj time time-new) (conj value value-new)])

(defn- determine-target-idx
  [to-check label]
  (loop [to-check to-check
         label label
         idx 0]
    (cond
      (empty? to-check) -1
      (= ((first to-check) :label) label) idx
      :default (recur (rest to-check) label (inc idx)))))
          
(defmulti fold-event (fn [event _] (event :type)))

(defmethod fold-event :time-point [{:keys [time label value]} folded]
  (let [target-idx (determine-target-idx folded label)]
    (if (= -1 target-idx)
      (conj folded {:category :temporal
                    :label label
                    :data [[time] [value]]})
      (update-in folded [target-idx :data] (partial conj-data-points time value)))))

(defn fold-events
  ([events]
   (fold-events events []))
  ([to-fold folded]
   (if (empty? to-fold)
     folded
     (fold-events (rest to-fold) (fold-event (first to-fold) folded)))))

