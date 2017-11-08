(ns dashboard.transformer
  (:require
   [clojure.spec.alpha :as s]))

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
  (-> {:name key
       :data (vec (label-data (get content key)))}
      (merge (dissoc (get config key) :data :name))))

(defn- extract-charts
  [data]
  (vec (map (partial key->chart data) (get-keys (data :config)))))

(defn transform
  "Given data (content & config) returns data that is consumeable by the charts"
  [data]
    {:charts (extract-charts data)})
