(ns clj.dashboard.pipeline.transform-test
  (:require  [clj.dashboard.pipeline.transform :as sut]
             [clojure.edn :as edn]
             [clojure.test :refer [deftest testing is]]))

;; replace with good test, renderer can consume 05-configured data
(comment (testing "transform"
  (deftest transform
   (let [actual (sut/transform (edn/read-string (slurp "resources/05-configured.edn")))
          expected (edn/read-string (slurp "resources/06-transformed.edn"))]
     (is (= expected actual))))))
