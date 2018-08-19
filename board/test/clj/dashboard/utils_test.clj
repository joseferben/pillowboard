(ns clj.dashboard.utils-test
  (:require [clojure.test :refer [deftest is]]
            [dashboard.utils :as sut]))

(deftest test-str->int
  (is (= 42 (sut/str->int 42)))
  (is (= 42 (sut/str->int "42")))
  (is (= 0 (sut/str->int nil)))
  (is (= 0 (sut/str->int {}))))
