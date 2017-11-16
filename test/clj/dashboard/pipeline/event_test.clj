(ns clj.dashboard.pipeline.event-test
  (:require [dashboard.pipeline.event :as sut :refer [->GaugeEvent ->TimeSeriesEvent epoch->date] :rename {epoch->date to-date}]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "event"
  (deftest fold-events
    (let [fun #'dashboard.pipeline.event/fold-events
          events [(->TimeSeriesEvent "commit" 0 0)
                  (->TimeSeriesEvent "commit" 1 2)
                  (->TimeSeriesEvent "merge-request" 1 1)
                  (->TimeSeriesEvent "merge-request" 2 11)
                  (->TimeSeriesEvent "commit" 4 4)
                  (->TimeSeriesEvent "commit" 5 2)]
          expected [{:category :timeseries
                     :data #{{"time" 0 "commit" 0}
                             {"time" 1 "commit" 2}
                             {"time" 4 "commit" 4}
                             {"time" 5 "commit" 2}}}
                    {:category :timeseries
                     :data #{{"time" 1 "merge-request" 1}
                             {"time" 2 "merge-request" 11}}}]]
      (is (= expected (fun events)))))
  (deftest post->event
    (let [event  (sut/post->event {"foo" 2})]
      (is (> 50 (Math/abs (- (get event :time) (System/currentTimeMillis)))))
      (is (= "foo" (get event :name)))
      )))
