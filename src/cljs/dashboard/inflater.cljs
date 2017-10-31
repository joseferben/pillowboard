(ns dashboard.inflater)

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
  (if (= (item :type) "Area")
    item
    (assoc item :x-axis (or (item :x-axis) (extract-x-axis item data)))))

(defn- add-default
  [config f]
  (reduce (fn [acc k] (assoc acc k (f (get config k) k)))
          {}
          (get-keys config)))

(defn- add-default-config
  [config]
  (assoc config :board {:width 3}))

(defn inflate [data]
  (-> data
      (get :config)
      (add-default add-default-data)
      (add-default (partial add-default-axis data))
      (add-default-config)
      (#(assoc data :config %))))
