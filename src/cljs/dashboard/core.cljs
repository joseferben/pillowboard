(ns dashboard.core
  (:require [goog.events :as events]
            [reagent.core :as reagent]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.events]
            [dashboard.subs]
            [dashboard.views]
            [devtools.core :as devtools])
  (:require-macros [secretary.core :refer [defroute]])
  (:import [goog History]
           [goog.history EventType]))

(devtools/install!)
(enable-console-print!)

(secretary/set-config! :prefix "#")

(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

(defroute "/" [] (dispatch [:set-showing {:landing nil}]))
(defroute "/admin/:user-id" [user-id] (dispatch [:set-showing {:admin user-id}]))
(defroute "/dashboard/:board-id" [board-id] (dispatch [:set-showing {:board board-id}]))

(def history
  (doto (History.)
    (events/listen EventType.NAVIGATE
                   (fn [event] (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn ^:export main
  []
  ;; Put an initial value into app-db.
  (dispatch-sync [:initialise-db])

  (reagent/render [dashboard.views/app]
                  (.getElementById js/document "app")))
