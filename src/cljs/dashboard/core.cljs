(ns dashboard.core
  (:require [reagent.core :as reagent]
            [re-frame.core :refer [dispatch-sync]]
            [day8.re-frame.http-fx]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.routes :refer [start-history!]]
            [dashboard.events]
            [dashboard.subs]
            [dashboard.views]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)

(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

(start-history!)

(defn ^:export main
  []
  ;; Put an initial value into app-db.
  (dispatch-sync [:initialise-db])

  (reagent/render [dashboard.views/app]
                  (.getElementById js/document "app")))
