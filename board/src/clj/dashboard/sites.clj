(ns dashboard.sites
  (:require [hiccup.core :refer [html]]))

(defn index []
 (html
  [:html
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta
     {:content "width=device-width, initial-scale=1" :name "viewport"}]
    [:link {:type "image/x-icon" :href "favicon.ico" :rel "icon"}]
    [:link
     {:rel "stylesheet"
      :href
      "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"}]
    [:link
     {:href
      "https://cdnjs.cloudflare.com/ajax/libs/typeplate-starter-kit/3.0.1/css/typeplate.min.css"
      :type "text/css"
      :rel "stylesheet"}]
    [:link
     {:href "/css/style.css", :type "text/css" :rel "stylesheet"}]
    [:style#_stylefy-constant-styles_]
    [:style#_stylefy-styles_]]
   [:body
    [:div#app]
    [:script {:type "text/javascript" :src "/js/compiled/app.js"}]
    [:script "window.onload = function () { dashboard.core.main();}"]]]))
