(ns dashboard.core
  (:require [reagent.core :as r]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            ;;[dashboard.events]
            ;;[dashboard.subs]
            [dashboard.views :as views]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)

(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

(defn ^:export main
  []
  (r/render [views/page nil]
                  (.getElementById js/document "app")))
