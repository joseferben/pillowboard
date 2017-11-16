(ns clj.dashboard.pipeline.configure-test
  (:require [dashboard.pipeline.configure :as sut]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(testing "configure metrics, dimensions and board"
  (deftest configure
   (let [actual (sut/configure (edn/read-string (slurp "resources/04-merged.edn")))
          expected (edn/read-string (slurp "resources/05-configured.edn"))]
     (is (= expected actual)))))
