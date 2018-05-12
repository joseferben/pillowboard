(ns dashboard.core
  (:require [reagent.core :as r]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.actions :refer [init-db!]]
            [dashboard.views :as views]
            [stylefy.core :as stylefy]))

(enable-console-print!)

(def debug?
  ^boolean goog.DEBUG)

(defn init!
  []
  (timbre/merge-config! {:level (if debug? :debug :error)})
  (debugf "ClojureScript appears to have loaded correctly.")
  (debugf "Initializing styles.")
  (stylefy/init)
  (debugf "Initializing in-memeory state.")
  (init-db!)
  (debugf "Mounting to root element.")
  (r/render [views/page]
            (.getElementById js/document "app")))

(defn ^:export main
  []
  (init!))
