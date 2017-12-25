(ns figwheel.connect.build-dev (:require [dashboard.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/dashboard.core.main (apply js/dashboard.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'dashboard.core/main' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

