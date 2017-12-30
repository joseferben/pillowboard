(ns dashboard.db
  (:require [reagent.core :as r]))

(defonce db (r/atom (sorted-map)))
