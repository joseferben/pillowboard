(ns dashboard.events
  (:require
   [dashboard.db :refer [default-db]]
   [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
   [re-frame.core :refer [reg-event-db reg-event-fx
                          inject-cofx path trim-v after debug]]))

(reg-event-fx
 :set-page
 []
 (fn [{:keys [db]} [_ page]]
   {:db (assoc db :active page)}))

(reg-event-db
 :fill-in
 []
 (fn [db [_ value form field]]
   (assoc-in db [:form form field] value)))

(reg-event-fx
 :login
 (fn [{:keys [db]} [_ evt]]
  (post "/api/sessions" :s-login :f-login)))

;; TODO implement post, adjsust /sessions handler to return user-id

(reg-event-fx
 :s-login
 (fn [{:keys [db]} [_ {:keys [auth-token user-id]}]]
   {:db (-> db
         (assoc-in [:session :user-id] user-id)
         (assoc-in [:session :email] (get-in [:form :login :email]))
         (dissoc :form)
         (assoc :token auth-token))
    :dispatch [:set-page {:page :admin :id user-id}]}))

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

(defn- fetch [uri on-success on-failure]
  {:http-xhrio {:method          :get
                :uri             uri
                :timeout         8000
                :response-format (ajax.core/json-response-format {:keywords? true})
                :on-success      [on-success]
                :on-failure      [on-failure]}})

(defn- post [uri body on-success on-failure]
  {:http-xhrio {:method          :post
                :uri             uri
                :timeout         8000
                :response-format (ajax.core/json-response-format {:keywords? true})
                :on-success      [on-success]
                :on-failure      [on-failure]}})

(reg-event-fx
  :fetch-dashboards
  (fn [{:keys [db]} [evt id]]
    (fetch (str "/api/dashboards/" id) :s-fetch-dashboards :f-fetch-dashboards)))

(reg-event-db
 :s-fetch-dashboards
 []
 (fn [db [_ response]]
   (assoc db :dashboards response)))

(reg-event-db
 :f-fetch-dashboards
 []
 (fn [db [_ response]]
   (infof "Failed request: " response)))
