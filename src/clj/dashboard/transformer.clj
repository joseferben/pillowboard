(ns dashboard.transformer
  (:require
   [clojure.spec.alpha :as s]))

(s/def ::chart-type #{:line :area :scatter})
(s/def ::chart-data (s/map-of keyword? (s/or :integer integer? :float float?)))
(s/def ::name keyword?)
(s/def ::data (s/coll-of ::chart-data ::kind vector?))
(s/def ::type ::chart-type)
(s/def ::chart (s/keys :req-un [::name ::data ::type]))
(s/def ::charts (s/coll-of ::chart ::kind vector?))
(s/def ::dashboard-data (s/map-of keyword? ::charts))

(defn- get-keys [data]
  (filter #(not= % :board) (keys data)))

(defn- label-row
  [labels row]
  (zipmap labels row))

(defn- label-data
  [{:keys [data meta]}]
  (->> data
       (apply mapv vector)
       (map (partial label-row (meta :labels)))))

(defn- key->chart
  [{:keys [content config]} key]
  {:name key
   :data (vec (label-data (get content key)))
   :type (get-in config [key :type])})

(defn- extract-charts
  [data]
  (vec (map (partial key->chart data) (get-keys (data :config)))))

(defn transform
  "Given data (content & config) returns data that is consumeable by the charts"
  [data]
  {:post [(s/valid? ::dashboard-data %)]}
  {:charts (extract-charts data)})
