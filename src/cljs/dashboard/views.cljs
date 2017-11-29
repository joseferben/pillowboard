(ns dashboard.views
  (:require
   [stylefy.core :as stylefy]
   [cljs-http.client :as http]
   [secretary.core :refer [dispatch!]]
   [re-frame.core :refer [subscribe dispatch]]
   [reagent.core :as reagent :refer [atom]]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  [:div.instructions
   [:h4.title.is-4 "Usage"]
   [:div.usage "Get started by POSTing metrics to /api/dashboard:"]
   [:p]
   [:code "http POST /api/dashboard commits:=3"]
   [:p]
   [:div.usage "The time will be set automatically. You can override the time value like this:"]
   [:p]
   [:code "http POST /api/dashboard commits:=3 time:=1510851134350"]
   [:p]
   [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]
   [:div.usage "Note: The data is currently not persisted."]])

(defn- randomize-button
  "Randomizes data of the dashboard."
  []
  [:div.button {:on-click (fn [] (http/post "/api/random" {:json-params {:foo :bar}}))}
   "Randomize"])

(defn- reset-button
  "Resets data of the dashboard, can be used to show instructions again."
  []
  [:div.button {:on-click (fn [] (http/post "/api/reset" {:json-params {:foo :bar}}))}
   "Reset"])

(defn dev-toolbar
  []
  [:div.dev-toolbar
   [randomize-button]
   [reset-button]])

(comment (defn dashboard-container
           "Injects app-state into dashboard, enables re-render"
           []
           [:div.top-container
            ;;[dev-toolbar]
            (if (or (nil? @app-state) (empty? (@app-state :charts)))
              [instructions]
              [:div.container
               [grid/main @app-state]])]))

(defn register-form []
  [:form
   [:div.field
    [:label.label "Email"]
    [:div.input {:type "email" :placeholder "Email input"}]
    [:span.icon.is-small.is-left
     [:i.fa.fa-envelope]]]])

(defn login-form []
  [:form
   [:div.field
    [:label.label "Email"]
    [:div.input {:type "email" :placeholder "Email input"}]
    [:span.icon.is-small.is-left
     [:i.fa.fa-envelope]]]])

(defn page-container [])


(defn dashboard [{:keys [name created_at]}]
  [:div
   [:h4 name]
   [:span (str "Created at " created_at)]])

(defn dashboards []
  [:div (map dashboard @(subscribe [:dashboards]))])

(defn login-page []
   [:section.hero.is-fullheight
    [:div.hero-body
     [:div.container.has-text-centered
      [:div.column.is-4.is-offset-4
       [:h3.title.has-text-grey "Login"]
       [:p.subtitle.has-text-grey "Please login to proceed."]
       [:div.box
        ;[:figure.avatar [:img {:src "http://200ok.ch/img/200ok.svg"}]]
        [:form
         [:div.field
          [:div.control
           [:input.input.is-large
            {:auto-focus "",
             :on-change #(dispatch [:fill-in (-> % .-target .-value) :login :email])
             :placeholder "Your Email",
             :type "email"}]]]
         [:div.field
          [:div.control
           [:input.input.is-large
            {:on-change #(dispatch [:fill-in (-> % .-target .-value) :login :password])
             :on-key-press #(when (= (-> % .-key) "Enter") (dispatch [:login]))
             :placeholder "Your Password",
             :type "password"}]]]
         [:div.field
          [:label.checkbox
           [:input {:type "checkbox"}]
           "\n                  Remember me\n                "]]
         [:a.button.is-block.is-info.is-large {:on-click #(dispatch [:login])} "Login"]]]
       [:p.has-text-grey
        [:a {:href "#/register"} "Sign up"]]]]]])

(defn register-page []
  [:section.hero.is-fullheight
    [:div.hero-body
     [:div.container.has-text-centered
      [:div.column.is-4.is-offset-4
       [:h3.title.has-text-grey "Sign up"]
       [:p.subtitle.has-text-grey "Fill the form below to register."]
       [:div.box
        ;[:figure.avatar [:img {:src "http://200ok.ch/img/200ok.svg"}]]
        [:form
         [:div.field
          [:div.control
           [:input.input.is-large
            {:auto-focus "",
             :placeholder "Your Email",
             :type "email"}]]]
         [:div.field
          [:div.control
           [:input.input.is-large
            {:placeholder "Your Password", :type "password"}]]]
         [:div.field
          [:div.control
           [:input.input.is-large
            {:on-key-press #(when (= (-> % .-key) "Enter") (dispatch [:register]) :placeholder "Same Password", :type "password")}]]]
         [:div.field
          [:label.checkbox
           [:input {:type "checkbox"}]
           "\n                  Remember me\n                "]]
         [:a.button.is-block.is-info.is-large {:on-click #(dispatch [:register])} "Sign up"]]]
       [:p.has-text-grey
        [:a {:href "#/login"} "Login"]]]]]])

(defmulti page :page)

(defmethod page :default [_]
  [:div
   [login-page]])

(defmethod page :login [_]
  [:div
   [login-page]])

(defmethod page :register [_]
  [:div
   [register-page]])

(defmethod page :admin [_]
  [:div
   [:h3 "Welcome to the admin page!"]
   [:span @(subscribe [:email])]
   [dashboards]])

(defmethod page :board [_]
  [:div
   [:h3 "Welcome to the board!"]
   [:span @(subscribe [:email])]])

(defn app-old []
  (stylefy/init)
  [:div
   [page @(subscribe [:active])]
   [:h3 "Reframe successfully loaded"]
   [:span "Current route: " @(subscribe [:page])]
   [dashboards]
   [:button {:on-click #(dispatch [:fetch-dashboards 2])} "admin"]])

(defn app []
  [page @(subscribe [:active])])
