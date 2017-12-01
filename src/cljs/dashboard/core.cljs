(ns dashboard.core
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [day8.re-frame.http-fx]
            [secretary.core :as secretary :include-macros true]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.events]
            [dashboard.subs]
            [dashboard.views]
            [devtools.core :as devtools])
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.history.Html5History
             goog.Uri))

(devtools/install!)
(enable-console-print!)

;;(secretary/set-config! :prefix "#")

(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

(defroute "/" [] (dispatch [:set-page {:page :login}]))
(defroute "/login" [] (dispatch [:set-page {:page :login}]))
(defroute "/register" [] (dispatch [:set-page {:page :register}]))
(defroute "/admin" [user-id] (dispatch [:set-page {:page :admin}]))
(defroute "/dashboard/:board-id" [board-id] (dispatch [:set-page {:page :board :id board-id}]))
(secretary/defroute "/test" [] (prn "Test is working!"))

(defn ^:export main
  []
  ;; Put an initial value into app-db.
  (dispatch-sync [:initialise-db])

  (reagent/render [dashboard.views/app]
                  (.getElementById js/document "app")))

;; -------------------------
;; History
(defn hook-browser-navigation! []
  (let [history (doto (Html5History.)
                  (events/listen
                    EventType/NAVIGATE
                    (fn [event]
                      (secretary/dispatch! (.-token event))))
                  (.setUseFragment false)
                  (.setPathPrefix "")
                  (.setEnabled true))]

    (events/listen js/document "click"
                   (fn [e]
                     (. e preventDefault)
                     (let [path (.getPath (.parse Uri (.-href (.-target e))))
                           title (.-title (.-target e))]
                       (when path
                         (. history (setToken path title))))))))

;; need to run this after routes have been defined
(hook-browser-navigation!)
