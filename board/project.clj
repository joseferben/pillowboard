(defproject dashboard "0.4.3"
  :description "Zero config dashboard that makes sense of your data."
  :url "http://board.erben.io"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.0"
  :global-vars {*warn-on-reflection* false
                *assert* true}
  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async  "0.3.443"]
                 [org.clojure/spec.alpha "0.1.143"]
                 [org.clojure/test.check "0.10.0-alpha2"]
                 [ring/ring "1.6.3"]
                 [ring/ring-defaults "0.3.1"]
                 [ring/ring-json "0.4.0"]
                 [clj-http "3.7.0"]
                 [com.taoensso/timbre "4.10.0"]
                 [io.aviso/pretty "0.1.34"]
                 [cheshire "5.8.0"]
                 [compojure "1.6.1"]
                 [reagent "0.8.0"]
                 [cljs-ajax "0.7.3"]
                 [binaryage/devtools "0.9.4"]
                 [stylefy "1.0.1"]
                 [cljsjs/recharts "0.22.4-2"]
                 [cljsjs/moment "2.17.1-1"]
                 [cljs-http "0.1.45"]]

  :plugins [[lein-figwheel "0.5.14"]
            [lein-cloverage "1.0.10"]
            [lein-ring "0.9.7"]
            [lein-kibit "0.1.6"]
            [lein-bikeshed "0.5.0"]
            [io.aviso/pretty "0.1.34"]
            [jonase/eastwood "0.2.5"]
            [com.jakemccrary/lein-test-refresh "0.22.0"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :ring {:handler dashboard.handler/app}
  :uberjar-name "dashboard-standalone.jar"
  :main dashboard.handler
  :source-paths ["src/clj" "src/cljc"]
  :test-selectors {:default (complement :slow)
                   :slow    :slow
                   :all (constantly true)}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs" "src/cljc"]
                :figwheel {:on-jsload "dashboard.core/main"
                           :open-urls ["http://localhost:3449/index.html"]}
                :compiler {:main dashboard.core
                           :asset-path "/js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src/cljs" "src/cljc"]
                :compiler {:output-to "resources/public/js/compiled/app.js"
                           :main dashboard.core
                           :asset-path "/js/compiled/out"
                           :optimizations :advanced
                           :pretty-print false}}]}
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [figwheel-sidecar "0.5.14"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]]
                   :source-paths ["src/clj" "src/cljc"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}
             :uberjar {:hooks [leiningen.cljsbuild]
                       :aot :all}
             :ci {:local-repo ".m2"}})
