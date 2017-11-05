(ns clj.dashboard.event-test
  (:require [dashboard.event :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "event"
  (deftest process-empty  
    (let [event {:time 1 :label :foo :value 42}
          expected {:content {:foo {:data [[1] [42]] :meta {:labels [:time :foo]}}}}]
      (is (= expected (sut/process event {}))))))
