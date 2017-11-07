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
  
(defn- get-keys [data]
  (filter #(not= % :board) (keys data)))

(defn- add-default-data
  [item k]
  (assoc item :data (or (item :data) k)))

(defn- add-default
  [config f]
  (reduce (fn [acc k] (assoc acc k (f (get config k) k)))
          {}
          (get-keys config)))

(defn- add-static-defaults
  [config defaults]
  (merge-with into defaults config))

(defn inflate_old [data]
  (-> data
      (get :config)
      (add-default add-default-data)
      ;; TODO always just take first value as x-axis?
      ;; Change order to respect x-axis settings
      ;;(add-default (partial add-default-axis data))
      (add-static-defaults static-default-config)
      (#(assoc data :config %))))

(defn- get-colors
  [key content]
  (-> content
      (get-in [key :data])
      (count)
      (dec)
      (take default-colors)))

(defn- inflate-dashboard-config
  [config]
  (merge config static-default-config))

(defn- process-config
  [key to-process content]
  (update to-process key
             (fn [old] (merge old {:colors (get-colors key content)}))))

(defn- inflate-chart-configs
  ([{to-process :config content :content}]
     (inflate-chart-configs (keys to-process) to-process content))
  ([keys-to-process processing content]
   (if (empty? keys-to-process)
     processing
     (inflate-chart-configs (rest keys-to-process)
                            (process-config (first keys-to-process) processing content)
                            content))))

(defn inflate [data]
  (->> (update data :config inflate-dashboard-config)
      (#(merge-with into % {:config (inflate-chart-configs data)}))))
