(ns dashboard.core
  (:require [reagent.core :as reagent]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [day8.re-frame.http-fx]
            [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [dashboard.events]
            [dashboard.subs]
            [dashboard.views]
            [devtools.core :as devtools]))

(devtools/install!)
(enable-console-print!)

(timbre/set-level! :debug)

(infof "ClojureScript appears to have loaded correctly.")

(def routes ["/" {"" :login
                  "login" :login
                  "register" :register
                  "admin" :admin
                  "dashboard/" {[:id] :board}}])

(defn- parse-url [url]
  (bidi/match-route routes url))

(defn- dispatch-route [matched-route]
  (prn matched-route)
  (let [panel-name (:handler matched-route)
        id (get-in matched-route [:route-params :id])]
    (debugf "Setting panel: %s" matched-route)
    (dispatch [:set-page {:page panel-name :id id}])))

(def history
 (pushy/pushy dispatch-route parse-url))

(def url-for (partial bidi/path-for routes))

(pushy/start! history)

(defn nav! [url]
  (pushy/set-token! history url)
  false)

(defn ^:export main
  []
  ;; Put an initial value into app-db.
  (dispatch-sync [:initialise-db])

  (reagent/render [dashboard.views/app]
                  (.getElementById js/document "app")))
