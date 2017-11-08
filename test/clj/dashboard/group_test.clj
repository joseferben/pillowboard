(ns clj.dashboard.group-test
  (:require  [dashboard.group :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "group"
  (deftest group
   (let [actual (sut/group (edn/read-string (slurp "resources/folded.edn")))
          expected (edn/read-string (slurp "resources/grouped.edn"))]
      (is (= expected actual)))))

