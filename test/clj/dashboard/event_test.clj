(ns clj.dashboard.event-test
  (:require [dashboard.event :as sut :refer [epoch->date] :rename {epoch->date to-date}]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(comment (testing "event"
  (deftest fold-event-empty-state  
    (let [fun #'dashboard.event/fold-event
          event {:time 1 :label :foo :value 42}
          expected {:content {:foo {:data [[(to-date 1)] [42]] :meta {:labels [:x-axis :foo]}}}
                    :config {:foo {:type :line}}}]
      (is (= expected (fun event {})))))

  (deftest fold-event-on-state 
    (let [fun #'dashboard.event/fold-event
          event {:time 1 :label :foo :value 42}
          expected {:content {:what {:data [[(to-date 1)] [2]] :meta {:labels [:x-axis :ever]}}
                              :foo {:data [[(to-date 1)] [42]] :meta {:labels [:x-axis :foo]}}}
                    :config {:what {:type :line}
                             :foo {:type :line}}}]
      (is (= expected
             (fun event
                  {:content {:what {:data [[(to-date 1)] [2]]
                                    :meta {:labels [:x-axis :ever]}}}
                   :config {:what {:type :line}}})))))

  (deftest fold-events
    (let [fun #'dashboard.event/fold-events
          events [{:time 1 :label :foo :value 42}
                  {:time 2 :label :bar :value 7}
                  {:time 2 :label :foo :value 24}]
          expected {:content {:bar {:data [[(to-date 2)] [7]] :meta {:labels [:x-axis :bar]}}
                              :foo {:data [[(to-date 1) (to-date 2)] [42 24]] :meta {:labels [:x-axis :foo]}}}
                    :config {:bar {:type :line}
                             :foo {:type :line}}}]
      (is (= expected (fun events)))))))
