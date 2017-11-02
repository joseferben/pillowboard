(ns clj.dashboard.transformer-test
  (:require [dashboard.transformer :as sut]
            [clojure.spec.alpha :as s]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(defmacro not-thrown? [e expr]
  `(is (not ('thrown? ~e ~expr))))

(testing "transformer"
  (deftest transform-returns-valid-data
    (let [inflated (edn/read-string (slurp "resources/sample-inflated.edn"))]
    (is (s/valid? ::sut/dashboard-data (sut/transform inflated))))))


