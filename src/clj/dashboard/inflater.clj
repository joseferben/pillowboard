(ns dashboard.inflater
  (:require
   [clojure.spec.alpha :as s]))

(s/def ::chart-type #{:line :area :scatter})
(s/def ::data vector?)
(s/def ::meta map?)
(s/def ::data-chunk (s/keys :req-un [::data ::meta]))
(s/def ::content (s/map-of keyword? ::data-chunk))

(s/def ::type ::chart-type)
(s/def ::chart-data keyword?)
(s/def ::x-axis keyword?)
(s/def ::chart-entry (s/keys :req-un [::type ::chart-data ::x-axis]))
(s/def ::config (s/map-of keyword? ::chart-entry))


(s/def ::dashboard-data (s/keys :req-un [::content ::config]))

(def static-default-config {:board {:width 3}})
  
(defn- get-keys [data]
  (filter #(not= % :board) (keys data)))

(defn- add-default-data
  [item k]
  (assoc item :data (or (item :data) k)))

(defn- extract-x-axis
  [item data]
  (let [labels (get-in data [:content (item :data) :meta :labels])]
  (if (contains? labels :time)
    :time
    (first labels))))

(defn- add-default-axis
  [data item k]
  (if (= (item :type) :area)
    item
    (assoc item :x-axis (or (item :x-axis) (extract-x-axis item data)))))

(defn- add-default
  [config f]
  (reduce (fn [acc k] (assoc acc k (f (get config k) k)))
          {}
          (get-keys config)))

(defn- add-static-defaults
  [config defaults]
  (merge-with into defaults config))

(defn inflate [data]
  (-> data
      (get :config)
      (add-default add-default-data)
      (add-default (partial add-default-axis data))
      (add-static-defaults static-default-config)
      (#(assoc data :config %))))
