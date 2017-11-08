(ns clj.dashboard.grouper-test
  (:require [dashboard.grouper :as sut]
            [clojure.test :as t]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(comment (testing "grouper"
  (deftest group
    (let [actual (sut/group (edn/read-string (slurp "resources/folded.edn")))
          expected (edn/read-string (slurp "resources/grouped.edn"))]
    (is (= expected actual))))))

