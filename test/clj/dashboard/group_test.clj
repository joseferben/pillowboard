(ns clj.dashboard.group-test
  (:require  [dashboard.group :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "grouping data"
  (comment (deftest group
   (let [actual (sut/group (edn/read-string (slurp "resources/02-folded.edn")))
          expected (edn/read-string (slurp "resources/03-grouped.edn"))]
     (is (= expected actual)))))
  (deftest merge
   (let [actual (sut/group (edn/read-string (slurp "resources/02-folded.edn")))
          expected (edn/read-string (slurp "resources/03-grouped.edn"))]
      (is (= expected actual)))))

