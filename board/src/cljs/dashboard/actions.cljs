(ns dashboard.actions
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [dashboard.db :refer [db]]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente :refer (cb-success?)]))

(defn- extract-id
  "Extracts board id from current URL."
  []
  (-> js/window
      .-location
      .-pathname
      (clojure.string/split #"/")
      last))

(defn register-current-board!
  []
  (let [board-id (@db :id)]
    (infof "Registering board with id: %s" board-id)
    ((@db :chsk-send!) [:board/register-board board-id] 20000)))

(defn init-db!
  []
  (let [id (extract-id)]
    (debugf "Initializing db with board-id: %s" id)
    (swap! db assoc :id id)))

(defn init-ws!
  [handle-event]
  (debugf "Opening ws")
  (let [{:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket-client!
         "/chsk"
         {:type :auto
          :packer :edn})]
    (swap! db merge {:chsk chsk :ch-recv ch-recv
                     :chsk-send! send-fn :state state})
    (go (while true
          (let [{ev-msg :event} (<! ch-recv)]
            (infof "Reiceved event: %s" ev-msg)
            (handle-event ev-msg send-fn))))))

(defn set-board-state!
  [state]
  (swap! db assoc :board state))
