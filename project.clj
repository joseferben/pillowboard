(defproject dashboard "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [org.clojure/core.async  "0.3.443"]
                 [org.clojure/clojurescript "1.9.946"]
                 [stylefy "1.0.1"]
                 [cljsjs/recharts "0.22.4-2"]
                 [reagent "0.7.0"]]
  :plugins [[lein-figwheel "0.5.14"]
            [lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]
  :ring {:handler dashboard.core/app}
  :main dashboard.core
  :source-paths ["src/clj"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]
                :figwheel {:on-jsload "dashboard.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main dashboard.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/compiled/app.js"
                           :main dashboard.core
                           :optimizations :advanced
                           :pretty-print false}}]}
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
