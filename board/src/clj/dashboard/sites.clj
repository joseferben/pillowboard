(ns dashboard.sites
  (:require
   [dashboard.styles :as s]
   [dashboard.utils :refer [uuid]]
   [hiccup.core :refer [html]]))

(defn style [s]
  (clojure.string/join ";" (map #(str (name %) ":" ((keyword %) s)) (keys s))))

(defn head []
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
   [:style#_stylefy-styles_]])

(defn header
  []
  [:div {:style (style (merge {:text-align "right" :margin-bottom "5em"} s/centric-content))}
   [:a {:href "https://pillowboard.io"}
    [:img {:src "/images/pillow.svg" :width "80em"}]]])

(defn skeleton [content]
  (html
   [:html]
   (head)
   [:body content]))

(defn index []
  (skeleton
   [:div {:style (style s/centric-content)}
    (header)
    [:div.welcome
     [:b "Pillowboard.io"]
     [:span " visualizes your data without any prior configuration. Start pushing your data, no registration required."]
     [:p]
     [:span "Visit your personal dashboard to get started: "]
     [:br]
     [:code
      [:p]
      (let [gen-uuid (uuid)]
        [:a {:href (str "/" gen-uuid)} gen-uuid])]]]))

(defn dashboard []
  (skeleton
   [:div#app
    [:div {:style (style s/centric-content)}
     [:span "Loading dashboard..."]]
    [:script "window.onload = function () { dashboard.core.main();}"]
    [:script {:type "text/javascript" :src "/js/compiled/app.js"}]]))
