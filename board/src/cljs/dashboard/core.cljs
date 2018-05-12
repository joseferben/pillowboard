(ns dashboard.core
  (:require [reagent.core :as r]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.actions :refer [init-db!]]
            [dashboard.views :as views]))

(enable-console-print!)
(timbre/set-level! :info)

(infof "ClojureScript appears to have loaded correctly.")

(defn init!
  []
  (infof "Initializing dashboard SPA.")
  (init-db!)
  (r/render [views/page]
            (.getElementById js/document "app")))

(defn ^:export main
  []
  (init!))
