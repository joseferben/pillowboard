(ns clj.dashboard.pipeline.group-test
  (:require  [dashboard.pipeline.group :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "processing and grouping data"
  (deftest aggregate
    (let [fun #'dashboard.pipeline.group/aggregate
          events [{"time" 0 "bug" 0}
                  {"time" 1 "bug" 1}
                  {"time" 8 "bug" 9}
                  {"time" 2 "bug" 0}
                  {"time" 4 "bug" 12}
                  {"time" 5 "bug" 38}
                  {"time" 6 "bug" 24}
                  {"time" 3 "bug" 8}
                  {"time" 12 "bug" 3}]
          expected [{"time" 0 "bug" 0}
                    {"time" 1 "bug" 1}
                    {"time" 2 "bug" 1}
                    {"time" 3 "bug" 9}
                    {"time" 4 "bug" 21}
                    {"time" 5 "bug" 59}
                    {"time" 6 "bug" 83}
                    {"time" 8 "bug" 92}
                    {"time" 12 "bug" 95}]]
      (is (= expected (fun events "bug"))))))
(deftest execute-aggregate
    (let [fun #'dashboard.pipeline.group/execute-aggregate
          events {:category :timeseries
                  :count 1
                  :sub-category :sum
                  :metrics [#{{"time" 0 "bug" 0}
                              {"time" 1 "bug" 1}
                              {"time" 2 "bug" 0}
                              {"time" 3 "bug" 8}
                              {"time" 4 "bug" 12}
                              {"time" 5 "bug" 38}
                              {"time" 6 "bug" 24}
                              {"time" 8 "bug" 9}
                              {"time" 12 "bug" 3}}]}
          expected {:category :timeseries
                    :count 1
                    :sub-category :sum
                    :metrics [[{"time" 0 "bug" 0}
                               {"time" 1 "bug" 1}
                               {"time" 2 "bug" 1}
                               {"time" 3 "bug" 9}
                               {"time" 4 "bug" 21}
                               {"time" 5 "bug" 59}
                               {"time" 6 "bug" 83}
                               {"time" 8 "bug" 92}
                               {"time" 12 "bug" 95}]]}]
      (is (= expected (fun events)))))
(deftest process
  (let [actual (sut/process (edn/read-string (slurp "resources/03-grouped.edn")))
        expected (edn/read-string (slurp "resources/04-merged.edn"))]
    (is (= expected actual))))
(deftest group
  (let [actual (sut/group (edn/read-string (slurp "resources/02-folded.edn")))
        expected (edn/read-string (slurp "resources/03-grouped.edn"))]
    (is (= expected actual))))
