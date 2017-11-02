(ns clj.dashboard.core-test
  (:require [dashboard.core :as sut]
            [clojure.test :refer [deftest testing is]]))

(testing "canary"
  (deftest canary
    (is (= 4 (+ 2 2)))))
