(defproject dashboard "0.1.0-SNAPSHOT"
  :description "Zero config dashboard that makes sense of your data."
  :url "http://www.200ok.ch"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :global-vars {*warn-on-reflection* false
                *assert* true}
  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async  "0.3.443"]
                 [org.clojure/spec.alpha "0.1.143"]
                 [org.clojure/test.check "0.10.0-alpha2"]
                 [com.layerware/hugsql "0.4.8"]
                 [org.postgresql/postgresql "42.1.4.jre6"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-devel "1.6.3"]
                 [ring/ring-json "0.4.0"]
                 [buddy/buddy-hashers "1.3.0"]
                 [buddy/buddy-auth "2.1.0"]
                 [ring-cors "0.1.11"]
                 [ragtime "0.7.2"]
                 [com.layerware/hugsql "0.4.8"]
                 [cheshire "5.8.0"]
                 [compojure "1.5.1"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.3-alpha1"]
                 [day8.re-frame/http-fx "0.1.4"]
                 [cljs-ajax "0.7.3"]
                 [bidi "2.1.2"]
                 [kibu/pushy "0.3.8"]
                 [binaryage/devtools "0.9.4"]
                 [com.taoensso/sente "1.11.0"]
                 [com.taoensso/timbre "4.7.4"]
                 [stylefy "1.0.1"]
                 [http-kit "2.2.0"]
                 [cljsjs/recharts "0.22.4-2"]
                 [cljsjs/moment "2.17.1-1"]
                 [cljs-http "0.1.44"]]
  :plugins [[lein-figwheel "0.5.14"]
            [lein-ring "0.9.7"]
            [lein-kibit "0.1.6"]
            [lein-bikeshed "0.5.0"]
            [jonase/eastwood "0.2.5"]
            [com.jakemccrary/lein-test-refresh "0.21.1"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :ring {:handler dashboard.handler/app}
  :aliases {"migrate"  ["run" "-m" "user/migrate"]
            "rollback" ["run" "-m" "user/rollback"]}
  :uberjar-name "dashboard-standalone.jar"
  :main dashboard.handler
  :source-paths ["src/clj" "src/cljc"]
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs" "src/cljc"]
                :figwheel {:on-jsload "dashboard.core/main"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main dashboard.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src/cljs" "src/cljc"]
                :compiler {:output-to "resources/public/js/compiled/app.js"
                           :main dashboard.core
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
                   :ragtime {:database "jdbc:postgresql://localhost:5432/postgres?user=postgres&password=postgres"}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}
             :uberjar {:hooks [leiningen.cljsbuild]}})
