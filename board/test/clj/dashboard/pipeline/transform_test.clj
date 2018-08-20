(ns clj.dashboard.pipeline.transform-test
  (:require  [dashboard.pipeline.transform :as sut]
             [clojure.edn :as edn]
             [clojure.test :refer [deftest testing is]]))

(deftest transform-board-with-no-charts
  (let [actual (sut/transform {:charts []})]
    (is (= {:charts []} actual))))

(deftest transform-fix-invalid-input
  (is (= {:charts []}
         (sut/transform {:charts nil})))
  (is (= {:charts [{:metrics []}]}
         (sut/transform {:charts [{:metrics nil}]}))))

(deftest sort-metrics
  (let [input [{:foo 42} {:bar 24}]]
     (is (= input (sut/sort-metrics input))))
  (is (= [{:time 24} {:time 42}]
         (sut/sort-metrics [{:time 42} {:time 24}])))
  (is (= [{:time :abc} {:time :bcd}]
         (sut/sort-metrics [{:time :bcd} {:time :abc}]))))
