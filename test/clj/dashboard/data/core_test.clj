(ns clj.dashboard.data.core-test
  (:require [dashboard.data.core :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "data processing library"
  (deftest full-join-last-value-strategy-matching-length
    (let [tupel1 [[1 2 3 4] [2 3 1 2]]
          tupel2 [[1 2 5 6] [2 1 0 0]]
          expected [[1 2 3 4 5 6] [2 3 1 2 2 2] [2 1 1 1 0 0]]]
      (is (= expected (sut/full-join-last-value tupel1 tupel2)))))
  (deftest full-join-last-value-strategy
    (let [tupel1 [[1 3] [2 3]]
          tupel2 [[1 2 5 6] [2 1 0 0]]
          expected [[1 2 3 5 6] [2 2 3 3 3] [2 1 1 0 0]]]
      (is (= expected (sut/full-join-last-value tupel1 tupel2))))))
