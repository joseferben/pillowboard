(ns clj.dashboard.transformer-test
  (:require [dashboard.transformer :as sut]
            [clojure.spec.alpha :as s]
            [clojure.edn :as edn]
            [clojure.test :refer [deftest testing is]]))

(s/def ::chart-type #{:line :area :scatter})
(s/def ::chart-data (s/map-of keyword? (s/or :integer integer? :float float? :date string?)))
(s/def ::name keyword?)
(s/def ::data (s/coll-of ::chart-data ::kind vector?))
(s/def ::type ::chart-type)
(s/def ::chart (s/keys :req-un [::name ::data ::type]))
(s/def ::charts (s/coll-of ::chart ::kind vector?))
(s/def ::dashboard-data (s/map-of keyword? ::charts))

(defmacro not-thrown? [e expr]
  `(is (not ('thrown? ~e ~expr))))

(testing "transformer"
  (deftest transform-returns-valid-data
    (let [inflated (edn/read-string (slurp "resources/sample-inflated.edn"))]
    (is (s/valid? ::dashboard-data (sut/transform inflated))))))


