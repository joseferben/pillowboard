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
      (is (= expected (sut/full-join "a" [tuple1 tuple2])))))
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
      (is (= expected (sut/full-join "a" [tuple1 tuple2])))))
  (deftest full-join-nil-strategy
    (let [tuple1 #{{"a" 1 "b" 2}
                   {"a" 2 "b" 3}
                   {"a" 3 "b" 1}
                   {"a" 4 "b" 2}}
          tuple2 #{{"a" 1 "c" 2}
                   {"a" 6 "c" 0}}
          expected #{{"a" 1 "b" 2 "c" 2}
                     {"a" 2 "b" 3 "c" nil}
                     {"a" 3 "b" 1 "c" nil}
                     {"a" 4 "b" 2 "c" nil}
                     {"a" 6 "b" nil "c" 0}}]
      (is (= expected (sut/full-join "a" :nil [tuple1 tuple2])))))
  (deftest full-join-three-tuples
    (let [tuple1 #{{"a" 1 "b" 2}
                   {"a" 2 "b" 3}
                   {"a" 3 "b" 1}
                   {"a" 4 "b" 2}}
          tuple2 #{{"a" 1 "c" 2}
                   {"a" 6 "c" 0}}
          tuple3 #{{"a" 1 "d" 11}
                   {"a" 7 "d" 12}}
          expected #{{"a" 1 "b" 2 "c" 2 "d" 11}
                     {"a" 2 "b" 3 "c" 2 "d" 11}
                     {"a" 3 "b" 1 "c" 2 "d" 11}
                     {"a" 4 "b" 2 "c" 2 "d" 11}
                     {"a" 6 "b" 2 "c" 0 "d" 11}
                     {"a" 7 "b" 2 "c" 0 "d" 12}}]
      (is (= expected (sut/full-join "a" [tuple1 tuple2 tuple3]))))))
