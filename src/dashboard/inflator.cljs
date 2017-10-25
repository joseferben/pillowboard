(ns dashboard.inflator)

(def before {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                     :meta {:labels [:time :commit]}}
           :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                           [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                           [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                    :meta {:labels [:accepted :in-progress :donex]}}
           :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                       :meta {:labels [:incidents :traffic]}}
           :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                  [0 1 0 0 2 2 3 0 2 1]
                                  [0 1 1 2 2 3 2 1 2 4]]
                           :meta {:labels [:time :pull-requests :bugs]}}}
 :config {:commits [{:type "Line"}]
          :sprint [{:type "Area"}]
          :stability [{:type "Scatter"}]
          :pull-requests [{:type "Line"}]}})

(def after {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                     :meta {:labels [:time :commit]}}
           :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                           [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                           [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                    :meta {:labels [:accepted :in-progress :donex]}}
           :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                       :meta {:labels [:incidents :traffic]}}
           :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                  [0 1 0 0 2 2 3 0 2 1]
                                  [0 1 1 2 2 3 2 1 2 4]]
                           :meta {:labels [:time :pull-requests :bugs]}}}
 :config {:commits [{:type "Line"
                     :data :commits
                     :x-axis :time}]
          :sprint [{:type "Area"
                    :data :sprint}]
          :stability [{:type "Scatter"
                       :data :stability
                       :x-axis :time}]
          :pull-requests [{:type "Line"
                           :data :pull-requests
                           :x-axis :time}]
          :board {:width 3}}})

(defn- get-keys [data]
  (filter #(not= % :board) (keys data)))

(defn- add-default-data [{config :config}]
  (reduce (fn [acc k]
            (assoc acc k
                   (map #(assoc % :data (or (% :data) k)) (get config k)))) {}
          (get-keys config)))

(defn- add-default-board-config
  [{config :config}]
  (assoc config :board {:width 3}))

(defn inflate [data])
