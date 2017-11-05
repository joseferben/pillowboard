(ns clj.dashboard.event-test
  (:require [dashboard.event :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "event"
  (deftest process-empty  
    (let [event {:time 1 :label :foo :value 42}
          expected {:content {:foo {:data [[1] [42]] :meta {:labels [:time :foo]}}}
                    :config {:foo {:type :line}}}]
      (is (= expected (sut/process-event event {})))))

  (deftest process-on-non-empty  
    (let [event {:time 1 :label :foo :value 42}
          expected {:content {:what {:data [[1] [2]] :meta {:labels [:time :ever]}}
                             :foo {:data [[1] [42]] :meta {:labels [:time :foo]}}}
                    :config {:what {:type :line}
                             :foo {:type :line}}}]
      (is (= expected
             (sut/process-event event
                                {:content {:what {:data [[1] [2]]
                                                  :meta {:labels [:time :ever]}}}
                                 :config {:what {:type :line}}}))))))
