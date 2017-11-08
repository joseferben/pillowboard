(ns clj.dashboard.inflater-test
  (:require [dashboard.inflater :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(comment (testing "inflater"
  (deftest inflate
    (let [actual (sut/inflate (edn/read-string (slurp "resources/sample.edn")))
          expected (edn/read-string (slurp "resources/sample-inflated.edn"))]
    (is (= expected actual))))))
