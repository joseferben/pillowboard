(ns dashboard.views
  (:require
   [dashboard.styles.core :as styles]
   [dashboard.grid :as grid]
   [stylefy.core :as stylefy]
   [cljs-http.client :as http]
   [re-frame.core :refer [subscribe dispatch]]
   [stylefy.core :as stylefy :refer [use-style]]))

(defn instructions
  "Displays basic instructions on how to use the board."
  []
  (let [base-url (-> js/window .-location .-origin)
        board-id (@(subscribe [:active]) :id)
        data-endpoint (str base-url "/api/data/" board-id)]
   [:section.hero.is-fullheight
    [:div.hero-body
     [:div.container
      [:div.column.is-8.is-offset-2
       [:div.box
        [:div.instructions
          [:h4.title.is-4 "Usage"]
          [:div.usage "Get started by POSTing metrics to the data endpoint of this dashboard:"]
          [:p]
          [:code "http POST " data-endpoint " commits:=3"]
          [:p]
          [:div.usage "The time will be set automatically. You can override the time value like this:"]
          [:p]
          [:code "http POST " data-endpoint " commits:=3 time:=1510851134350"]
          [:p]
          [:div.usage "The key defines the unique name of the metric. The values must be numbers, the value of the time key must be millis since epoch."]]]]]]]))

(defn dashboard [{:keys [id name created_at]}]
  [:tr {:key id}
   [:td {:width "5%"} [:i.fa.fa-area-chart]]
   [:td name]
   [:td [:a.button.is-small.is-primary {:href (str "#/dashboard/" id)} "Open"]]])

(defn dashboards []
  [:table.table.is-fullwidth.is-striped
   [:tbody (map dashboard @(subscribe [:dashboards]))]])

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
           "Remember me"]]
         [:a.button.is-block.is-info.is-large {:on-click #(dispatch [:login])} "Login"]]]
       [:p.has-text-grey
        [:a {:href "/register"} "Sign up"]]]]]])

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
             :on-change #(dispatch [:fill-in (-> % .-target .-value) :register :email])
             :placeholder "Your Email",
             :type "email"}]]]
         [:div.field
          [:div.control
           [:input.input.is-large
            {:on-change #(dispatch [:fill-in (-> % .-target .-value) :register :password])
             :on-key-press #(when (= (-> % .-key) "Enter") (dispatch [:register]))
             :placeholder "Your Password", :type "password"}]]]
         [:a.button.is-block.is-info.is-large {:on-click #(dispatch [:register])} "Sign up"]]]
       [:p.has-text-grey
        [:a {:href "/login"} "Login"]]]]]])

(defn admin-page []
 [:nav.navbar.is-dark
  [:div.container (use-style styles/margin-top)
   [:div.columns
    [:div.column.is-3
     [:aside.menu
      [:p.menu-label "General"]
      [:ul.menu-list
       [:li [:a.is-active "Dashboards"]]]
      [:p.menu-label "Account"]
      [:ul.menu-list
       [:li [:a "Security Settings"]]]]]
    [:div.column.is-9
     [:nav.breadcrumb
      {:aria-label "breadcrumbs"}
      [:ul
       [:li [:a {:href "../"} "Logout"]]
       [:li.is-active [:a {:aria-current "page", :href "#"} "Admin"]]]]
     [:section.hero.is-info.welcome.is-small
      [:div.hero-body
       [:div.container
        [:h1.title "Hello there."]
        [:h2.subtitle
         "I hope you are having a great day!"]]]]
     [:div.columns
      [:div.column.is-6
       [:div.card.boards-card (use-style styles/margin-top)
        [:header.card-header
         [:p.card-header-title
          "Dashboards"]
         [:a.card-header-icon
          {:aria-label "more options"
           :href "#"}
          [:input.input.is-small
           (merge (use-style styles/margin-right)
                  {:type "text"
                   :on-change #(dispatch [:fill-in (-> % .-target .-value) :to-add :name])
                   :placeholder "Dashboard Name"})]
          [:span.icon [:i.fa.fa-plus-circle
                       {:on-click #(dispatch [:add-dashboard])
                        :aria-hidden "true"}]]]]
        [:div.card-table
         [:div.content
          [dashboards]]]
        [:footer.card-footer
         [:a.card-footer-item {:href "#"} "View All"]]]]
      [:div.column.is-6]]]]]])

(defn dashboard-page
  []
  [:div.top-container
   ;;[dev-toolbar]
   (let [board-state @(subscribe [:board-state])]
     (if (or (nil? board-state) (empty? (board-state :charts)))
       [instructions]
       [:div.container
        [grid/main board-state]]))])

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
   [admin-page])

(defmethod page :board [_]
  [dashboard-page])

(defn app []
  [page @(subscribe [:active])])
