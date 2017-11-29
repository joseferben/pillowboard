(ns dashboard.events
  (:require
   [dashboard.db :refer [default-db]]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
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
  ([uri on-success on-failure {:keys [token]}]
   (-> (fetch uri on-success on-failure)
       (assoc-in [:http-xhrio :headers] {"Authorization" (str "Token " token)}))))

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
  ([uri data on-success on-failure {:keys [token]}]
   (-> (fetch uri on-success on-failure)
       (assoc-in [:http-xhrio :headers] {"Authorization" (str "Token " token)}))))

(reg-event-fx
 :set-page
 []
 (fn [{:keys [db]} [_ page]]
   (merge
     (if (= (page :page) :admin)
       {:dispatch [:fetch-dashboards]})
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
   {:db (-> db
         (assoc :email (get-in db [:form :login :email]))
         (dissoc :form)
         (assoc :token auth-token))
    :dispatch [:set-page {:page :admin}]}))

(reg-event-db
 :f-login
 []
 (fn [db [_ response]]
   (infof "Failed login: " response)))

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
   (prn response)
   (assoc db :dashboards (response :dashboards))))

(reg-event-db
 :f-fetch-dashboards
 []
 (fn [db [_ response]]
   (infof "Failed request: " response)))
