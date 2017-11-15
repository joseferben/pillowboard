(ns clj.dashboard.data.core-test
  (:require [dashboard.data.core :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "data processing library"
  (deftest full-join-matching-length
    (let [tuple1 [[1 2 3 4] [2 3 1 2]]
          tuple2 [[1 2 5 6] [2 1 0 0]]
          expected [[1 2 3 4 5 6] [2 3 1 2 2 2] [2 1 1 1 0 0]]]
      (is (= expected (sut/full-join tuple1 tuple2)))))
  (deftest full-join
    (let [tuple1 [[1 3] [2 3]]
          tuple2 [[1 2 5 6] [2 1 0 0]]
          expected [[1 2 3 5 6] [2 2 3 3 3] [2 1 1 0 0]]]
      (is (= expected (sut/full-join tuple1 tuple2)))))
  (deftest full-join-three-tuples
    (let [tuple1 [[1 3] [2 3]]
          tuple2 [[1 2 5 6] [2 1 0 0]]
          tuple3 [[2 7] [12 14]]
          expected [[1 2 3 5 6 7] [2 2 3 3 3 3] [2 1 1 0 0 0] [0 12 12 12 12 12 14]]]
      (is (= expected (sut/full-join [tuple1 tuple2 tuple3]))))))
