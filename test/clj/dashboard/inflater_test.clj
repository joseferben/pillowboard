(ns clj.dashboard.inflater-test
  (:require [dashboard.inflater :as sut]
            [clojure.test :refer [deftest testing is]]))

(def before {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                                 :meta {:labels [:time :commit]}}
                       :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                                       [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                                       [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                                :meta {:labels [:accepted :in-progress :donex]}}
                       :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                                   :meta {:labels [:incidents :traffic]}}
                       :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                              [0 1 0 0 2 2 3 0 2 1]
                                              [0 1 1 2 2 3 2 1 2 4]]
                                       :meta {:labels [:time :pull-requests :bugs]}}}
             :config {:commits {:type :line}
                      :sprint {:type :area}
                      :stability {:type :scatter}
                      :pull-requests {:type :line}}})

(def after {:content {:commits {:data [[0 1 2 3 4 5 6 7 8 9] [0 1 1 2 0 2 3 1 4 2]]
                                :meta {:labels [:time :commit]}}
                      :sprint {:data [[0.1 0.2 0.3 0.5 0.6 0.6 0.6 0.8 0.9 1.0 1.0 1.0]
                                      [0.0 0.0 0.0 0.2 0.2 0.3 0.3 0.4 0.5 0.9 0.9 1.0]
                                      [0.0 0.0 0.0 0.0 0.1 0.4 0.3 0.5 0.6 0.9 1.0 1.0]]
                               :meta {:labels [:accepted :in-progress :donex]}}
                      :stability {:data [[0 1 2 1 2 4 8 9 8 12 5] [0 1 12 4 2 4 8 14 22 50 49]]
                                  :meta {:labels [:incidents :traffic]}}
                      :pull-requests {:data [[0 1 2 3 4 5 6 7 8 9]
                                             [0 1 0 0 2 2 3 0 2 1]
                                             [0 1 1 2 2 3 2 1 2 4]]
                                      :meta {:labels [:time :pull-requests :bugs]}}}
            :config {:commits {:type :line 
                                :data :commits
                                :x-axis :time}
                     :sprint {:type :area 
                               :data :sprint}
                     :stability {:type :scatter
                                  :data :stability
                                  :x-axis :incidents}
                     :pull-requests {:type :line
                                      :data :pull-requests
                                      :x-axis :time}
                     :board {:width 3}}})


(testing "inflater"
  (deftest merge-static-defaults
    (let [fun #'dashboard.inflater/add-static-defaults
          target {:foo {:bar 42}}
          defaults {:foo {:bar 7} :another {:default "something"}}
          expected {:foo {:bar 42} :another {:default "something"}}]
      (is (= expected (fun target defaults)))))

  (deftest inflate
    (let [actual (sut/inflate before)
        expected after]
    (is (= actual expected)))))
