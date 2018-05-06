(ns dashboard.core
  (:require [reagent.core :as r]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.actions :refer [init-db! init-poller!]]
            [dashboard.views :as views]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)
(timbre/set-level! :info)

(infof "ClojureScript appears to have loaded correctly.")

(defn init!
  []
  (infof "Initializing dashboard SPA.")
  (init-poller!)
  (init-db!)
  (r/render [views/page]
            (.getElementById js/document "app")))

(defn ^:export main
  []
  (init!))
