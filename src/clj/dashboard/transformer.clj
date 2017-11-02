(ns dashboard.transformer)

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
  [data]
  {:charts (extract-charts data)})
