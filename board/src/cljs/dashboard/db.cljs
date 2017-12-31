(ns dashboard.db
  (:require [reagent.core :as r]))

(def db (r/atom (sorted-map)))
