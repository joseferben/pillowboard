(ns dashboard.transformer)

(def after {:charts
                          [{:name :commits
                            :data
                            [{:time 0 :commits 1}
                             {:time 1 :commits 3}
                             {:time 2 :commits 2}
                             {:time 3 :commits 7}
                             {:time 4 :commits 3}
                             {:time 5 :commits 2}
                             {:time 6 :commits 6}
                             {:time 7 :commits 5}
                             {:time 8 :commits 2}
                             {:time 9 :commits 4}]
                            :type :line
                            :pos [0 0]}
                           {:name :pull-requests
                            :data
                            [{:time 0 :pull-requests 0 :bugs 0}
                             {:time 1 :pull-requests 2 :bugs 1}
                             {:time 2 :pull-requests 3 :bugs 2}
                             {:time 3 :pull-requests 1 :bugs 1}
                             {:time 4 :pull-requests 2 :bugs 6}
                             {:time 5 :pull-requests 0 :bugs 7}
                             {:time 6 :pull-requests 2 :bugs 3}
                             {:time 7 :pull-requests 1 :bugs 2}
                             {:time 8 :pull-requests 8 :bugs 2}]
                            :type :line
                            :pos [0 2]}
                           {:name :sprint-progress
                            :data
                            [{:accepted 0.1 :in-progress 0.0 :done 0.0}
                             {:accepted 0.2 :in-progress 0.0 :done 0.0}
                             {:accepted 0.2 :in-progress 0.0 :done 0.0}
                             {:accepted 0.3 :in-progress 0.2 :done 0.0}
                             {:accepted 0.4 :in-progress 0.2 :done 0.1}
                             {:accepted 0.5 :in-progress 0.3 :done 0.1}
                             {:accepted 0.5 :in-progress 0.3 :done 0.2}
                             {:accepted 0.5 :in-progress 0.8 :done 0.2}
                             {:accepted 0.8 :in-progress 0.8 :done 0.3}
                             {:accepted 0.8 :in-progress 0.9 :done 0.8}
                             {:accepted 0.9 :in-progress 0.9 :done 0.9}
                             {:accepted 1.0 :in-progress 0.9 :done 0.8}
                             {:accepted 1.0 :in-progress 1.0 :done 0.8}
                             {:accepted 1.0 :in-progress 1.0 :done 0.9}
                             {:accepted 1.0 :in-progress 1.0 :done 1.0}]
                            :type :area
                            :post [1 0]}
                           {:name :incidents
                            :data
                            [{:incidents 0 :traffic 1}
                             {:incidents 2 :traffic 3}
                             {:incidents 1 :traffic 0}
                             {:incidents 4 :traffic 1}
                             {:incidents 8 :traffic 3}
                             {:incidents 23 :traffic 12}
                             {:incidents 12 :traffic 48}
                             {:incidents 8 :traffic 23}
                             {:incidents 21 :traffic 79}
                             {:incidents 18 :traffic 97}
                             {:incidents 9 :traffic 123}]
                            :type :scatter
                            :pos [1 2]}]})

(def before {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                     :meta {:labels [:time :commit]}}
           :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                           [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                           [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                    :meta {:labels [:accepted :in-progress :done]}}
           :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                       :meta {:labels [:incidents :traffic]}}
           :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                  [0 1 0 0 2 2 3 0 2 1]
                                  [0 1 1 2 2 3 2 1 2 4]]
                           :meta {:labels [:time :pull-requests :bugs]}}}
 :config {:commits {:type "Line"}
          :sprint {:type "Area"}
          :stability {:type "Scatter"}
          :pull-requests {:type "Line"}}})

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
   :type (get config key)})

(defn- extract-charts
  [data]
  (vec (map (partial key->chart data) (keys (data :config)))))

(defn transform
  [data]
  {:charts (extract-charts data)})
