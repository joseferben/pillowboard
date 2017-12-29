(ns dashboard.routes
  (:require [bidi.bidi :as bidi]
            [re-frame.core :refer [dispatch]]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [pushy.core :as pushy]))

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
    (debugf "Setting panel:  %s" matched-route)
    (dispatch [:set-page {:page panel-name :id id}])))

(def history
 (pushy/pushy dispatch-route parse-url))

(def url-for (partial bidi/path-for routes))

(defn start-history! []
  (pushy/start! history))

(defn nav! [url]
  (pushy/set-token! history url)
  false)
