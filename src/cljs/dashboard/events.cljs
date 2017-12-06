(ns dashboard.events
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :as async :refer (<! >! put! chan timeout)]
   [dashboard.ws :refer [handle-event]]
   [dashboard.db :refer [default-db]]
   [dashboard.routes :refer [nav!]]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente :refer (cb-success?)]
   [re-frame.core :refer [reg-event-db reg-event-fx
                          inject-cofx path trim-v after debug]]))

(defn- fetch
  "Given `uri` and two callbacks `on-success` and `on-failure` returns an effect
  Optionally provide `db` as last argument for authenticated requests."
  ([uri on-success on-failure]
   {:http-xhrio {:method          :get
                 :uri             uri
                 :timeout         8000
                 :response-format (ajax.core/json-response-format {:keywords? true})
                 :on-success      [on-success]
                 :on-failure      [on-failure]}})
  ([uri on-success on-failure {:keys [token]}])
  (assoc-in
    (fetch uri on-success on-failure)
    [:http-xhrio :headers]
    {"Authorization" (str "Token " token)}))

(defn- post
  "Given `uri` and two callbacks `on-success` and `on-failure` returns an effect
  Optionally provide `db` as last argument for authenticated requests."
  ([uri data on-success on-failure]
   {:http-xhrio {:method          :post
                 :params          data
                 :uri             uri
                 :timeout         8000
                 :format          (ajax.core/json-request-format)
                 :response-format (ajax.core/json-response-format {:keywords? true})
                 :on-success      [on-success]
                 :on-failure      [on-failure]}})
  ([uri data on-success on-failure {:keys [token]}
    (assoc-in
      (post uri data on-success on-failure)
      [:http-xhrio :headers]
      {"Authorization" (str "Token " token)})]))

(reg-event-fx
 :set-page
 []
 (fn [{:keys [db]} [_ page]]
   (merge
    (cond
      (= (page :page) :admin) {:dispatch [:fetch-dashboards]}
      (= (page :page) :board) {:dispatch [:open-ws (page :id)]})
    {:db (assoc db :active page)})))

(reg-event-db
 :fill-in
 []
 (fn [db [_ value form field]]
   (assoc-in db [:form form field] value)))

(reg-event-fx
 :login
 (fn [{:keys [db]} [_ evt]]
   (let [email (get-in db [:form :login :email])
         password (get-in db [:form :login :password])]
      (post "/api/sessions" {:email email :password password} :s-login :f-login))))

(reg-event-fx
 :s-login
 (fn [{:keys [db]} [_ {:keys [auth-token]}]]
   (infof "Successfully logged in.")
   (nav! "/admin")
   {:db (-> db
         (assoc :email (get-in db [:form :login :email]))
         (dissoc :form)
         (assoc :token auth-token))}))

(reg-event-db
 :f-login
 []
 (fn [db [_ response]]
   (infof "Failed to login: %s" response)))

(reg-event-fx
 :register
 (fn [{:keys [db]} [_ evt]]
   (let [email (get-in db [:form :register :email])
         password (get-in db [:form :register :password])]
      (post "/api/users" {:email email :password password} :s-register :f-register))))

(reg-event-fx
 :s-register
 (fn [{:keys [db]} [_ {:keys [auth-token]}]]
   (infof "Successfully registered.")
   {:db (dissoc db :form)
    :dispatch [:set-page {:page :login}]}))

(reg-event-db
 :f-register
 []
 (fn [db [_ response]]
   (infof "Failed to register: %s" response)))

(reg-event-fx
 :add-dashboard
 (fn [{:keys [db]} [_ evt]]
   (let [name (get-in db [:form :to-add :name])]
     (infof "Addding dashboard: %s" name)
     (post "/api/dashboards" {:name name} :s-add-dashboard :f-add-dashboard db))))

(reg-event-fx
 :s-add-dashboard
 (fn [{:keys [db]} [_ _]]
   (infof "Successfully added dashboard.")
   {:db (dissoc db :form)
    :dispatch [:set-page {:page :admin}]}))

(reg-event-db
 :f-add-dashboard
 []
 (fn [db [_ response]]
   (infof "Failed to add dashboard: %s" response)))

(reg-event-fx
 :initialise-db
 []
 (fn [{:keys [db]} _]
   {:db (assoc default-db :state {})}))

(reg-event-fx
  :fetch-dashboards
  (fn [{:keys [db]} [evt id]]
    (fetch "/api/dashboards/" :s-fetch-dashboards :f-fetch-dashboards db)))

(reg-event-db
 :s-fetch-dashboards
 []
 (fn [db [_ response]]
   (assoc db :dashboards (response :dashboards))))

(reg-event-db
 :f-fetch-dashboards
 []
 (fn [db [_ response]]
   (infof "Failed request: %s" response)))

(reg-event-db
 :open-ws
 []
 (fn [db [_ board-id]]
   (debugf "Opening ws for board: %s" board-id)
   (let [{:keys [chsk ch-recv send-fn state]}
         (sente/make-channel-socket-client!
          "/chsk"
          {:type :auto
           :packer :edn})]
     (go (while true
           (let [{ev-msg :event} (<! ch-recv)]
             (infof "Reiceved event: %s" ev-msg)
             (handle-event ev-msg send-fn))))
     (-> db
         (assoc :chsk chsk)
         (assoc :ch-chsk ch-recv)
         (assoc :chsk-send! send-fn)
         (assoc :chsk-state state)))))

(reg-event-db
 :register-board
 []
 (fn [db [_ _]]
   (let [board-id (get-in db [:active :id])]
     (infof "Registering board with id: %s" board-id)
     ((db :chsk-send!) [:board/register-board board-id] 20000)
     db)))

(reg-event-db
 :set-board-state
 []
 (fn [db [_ state]]
   (infof "Updating board state to: %s" state)
   (assoc db :board-state state)))
