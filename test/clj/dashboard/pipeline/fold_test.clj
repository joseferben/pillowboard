(ns clj.dashboard.pipeline.fold-test
  (:require [dashboard.pipeline.fold :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(comment (testing "fold"
  (deftest fold
    (let [events [{:type :time-point :time 0 :label "commit" :value 0}
                  {:type :time-point :time 1 :label "commit" :value 2}
                  {:type :time-point :time 1 :label "merge-request" :value 1}
                  {:type :time-point :time 2 :label "merge-request" :value 11}
                  {:type :time-point :time 4 :label "commit" :value 4}
                  {:type :time-point :time 5 :label "commit" :value 2}]
          expected [{:category :timeseries
                     :data #{{"time" 0 "commit" 0}
                             {"time" 1 "commit" 2}
                             {"time" 4 "commit" 4}
                             {"time" 5 "commit" 2}}}
                    {:category :timeseries
                     :data #{{"time" 1 "merge-request" 1}
                             {"time" 2 "merge-request" 11}}}]
          actual (sut/fold-events events)]
      (is (= expected actual))))))
