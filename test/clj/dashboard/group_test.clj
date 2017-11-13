(ns clj.dashboard.group-test
  (:require  [dashboard.group :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(comment (testing "grouping data"
  (deftest group
   (let [actual (sut/group (edn/read-string (slurp "resources/folded.edn")))
          expected (edn/read-string (slurp "resources/grouped.edn"))]
     (is (= expected actual))))
  (deftest merge
   (let [actual (sut/join-data (edn/read-string (slurp "resources/grouped.edn")))
          expected (edn/read-string (slurp "resources/merged.edn"))]
      (is (= expected actual))))))

