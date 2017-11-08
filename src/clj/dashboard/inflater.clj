(ns dashboard.inflater
  (:require
   [clojure.spec.alpha :as s]))

(s/def ::chart-type #{:line :area :scatter})
(s/def ::data vector?)
(s/def ::meta map?)
(s/def ::data-chunk (s/keys :req-un [::data ::meta]))
(s/def ::content (s/map-of keyword? ::data-chunk))

(s/def ::type ::chart-type)
(s/def ::chart-data keyword?)
(s/def ::x-axis keyword?)
(s/def ::chart-entry (s/keys :req-un [::type ::chart-data ::x-axis]))
(s/def ::config (s/map-of keyword? ::chart-entry))

(s/def ::dashboard-data (s/keys :req-un [::content ::config]))

(def static-default-config {:board {:width 3}})
(def default-colors ["#FF5733" "#33CAFF" "#7D33FF"])
  
(defn- get-colors
  [key content]
  (-> content
      (get-in [key :data])
      count
      dec
      (take default-colors)
      vec))

(defn- extract-config
  "Extracting config from chart data"
  [key content]
  {:colors (get-colors key content)})

(defn- derive-config [content acc key]
  (merge acc {key (extract-config key content)}))

(defn- extract-configs [content]
  (reduce (partial derive-config content) {} (keys content)))

(defn- inflate-config [content config]
  (merge-with into
              config
              (extract-configs content)
              static-default-config))

(defn inflate [data]
  (update data :config (partial inflate-config (data :content))))
