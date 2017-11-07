(ns clj.dashboard.inflater-test
  (:require [dashboard.inflater :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "inflater"
  (deftest merge-static-defaults
    (let [fun #'dashboard.inflater/add-static-defaults
          target {:foo {:bar 42}}
          defaults {:foo {:bar 7} :another {:default "something"}}
          expected {:foo {:bar 42} :another {:default "something"}}]
      (is (= expected (fun target defaults)))))

  (deftest inflate
    (let [actual (sut/inflate (edn/read-string (slurp "resources/sample.edn")))
          expected (edn/read-string (slurp "resources/sample-inflated.edn"))]
    (is (= expected actual)))))
