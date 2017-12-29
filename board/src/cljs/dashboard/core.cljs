(ns dashboard.core
  (:require [reagent.core :as r]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.db :refer [db]]
            [dashboard.ws :refer [handle-event]]
            [dashboard.actions :refer [init-db! init-ws!]]
            [dashboard.views :as views]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)
(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

(defn init!
  []
  (init-db!)
  (init-ws! handle-event)
  (r/render [views/page (@db :board)]
            (.getElementById js/document "app")))

(defn ^:export main
  []
  (init!))
