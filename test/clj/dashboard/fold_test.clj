(ns clj.dashboard.fold-test
  (:require [dashboard.fold :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "fold"
  (deftest fold
    (let [events [{:type :time-point :time 0 :label :commit :value 0}
                  {:type :time-point :time 1 :label :commit :value 2}
                  {:type :time-point :time 1 :label :merge-request :value 1}
                  {:type :time-point :time 2 :label :merge-request :value 11}
                  {:type :time-point :time 4 :label :commit :value 4}
                  {:type :time-point :time 5 :label :commit :value 2}]
          expected [{:category :temporal
                     :label :commit
                     :data [[0 1 4 5] [0 2 4 2]]}
                    {:category :temporal
                     :label :merge-request
                     :data [[1 2] [1 11]]}]
          actual (sut/fold-events events)]
      (is (= expected actual)))))
