(ns clj.dashboard.data.core-test
  (:require [dashboard.data.core :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "data processing library"
  (deftest full-join-matching-length
    (let [tuple1 #{{"a" 1 "b" 2}
                   {"a" 2 "b" 3}
                   {"a" 3 "b" 1}
                   {"a" 4 "b" 2}}
          tuple2 #{{"a" 1 "c" 2}
                   {"a" 2 "c" 1}
                   {"a" 5 "c" 0}
                   {"a" 6 "c" 0}}
          expected #{{"a" 1 "b" 2 "c" 2}
                     {"a" 2 "b" 3 "c" 1}
                     {"a" 3 "b" 1 "c" 1}
                     {"a" 4 "b" 2 "c" 1}
                     {"a" 5 "b" 2 "c" 0}
                     {"a" 6 "b" 2 "c" 0}}]
      (is (= expected (sut/full-join tuple1 tuple2)))))
  (deftest full-join
    (let [tuple1 #{{"a" 1 "b" 2}
                   {"a" 2 "b" 3}
                   {"a" 3 "b" 1}
                   {"a" 4 "b" 2}}
          tuple2 #{{"a" 1 "c" 2}
                   {"a" 6 "c" 0}}
          expected #{{"a" 1 "b" 2 "c" 2}
                     {"a" 2 "b" 3 "c" 2}
                     {"a" 3 "b" 1 "c" 2}
                     {"a" 4 "b" 2 "c" 2}
                     {"a" 6 "b" 2 "c" 0}}]
      (is (= expected (sut/full-join tuple1 tuple2)))))
  (deftest full-join-three-tuples
    (let [tuple1 [[1 3] [2 3]]
          tuple2 [[1 2 5 6] [2 1 0 0]]
          tuple3 [[2 7] [12 14]]
          expected [[1 2 3 5 6 7] [2 2 3 3 3 3] [2 1 1 0 0 0] [0 12 12 12 12 14]]]
      (is (= expected (sut/full-join [tuple1 tuple2 tuple3]))))))
