(ns clj.dashboard.pipeline.event-test
  (:require [dashboard.pipeline.event :as sut :refer [->GaugeEvent ->TimeSeriesEvent epoch->date] :rename {epoch->date to-date}]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "event"
  (deftest fold-events
    (let [fun #'dashboard.pipeline.event/fold-events
          events [(->GaugeEvent "foo" 42)
                  (->TimeSeriesEvent "bar" 7 2)
                  (->TimeSeriesEvent "bar" 24 3)
                  (->GaugeEvent "foo" 2)]
          expected [{:category :gauge
                     :name "foo"
                     :data 2}
                    {:category :timeseries
                     :name "bar"
                     :data [[7 24] [2 3]]}]]
      (is (= expected (fun events))))))
