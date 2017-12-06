(ns dashboard.db
  (:require [dashboard.db.events :as events]
            [dashboard.db.dashboards :as dashboards]
            [dashboard.db.users :as users]
            [dashboard.db.tokens :as tokens]
            [dashboard.pipeline.event :refer [event-type]]
            [clj-http.client :as client]
            [environ.core :refer [env]]
            [cheshire.core :refer [generate-string parse-string]]
            [buddy.hashers :as hashers]))

(def db (or (env :database-url) "http://localhost:5984/db"))

(def doc-views {:dashboard {:view "dashboards-view"}
                :user {:view "users-view"}})

(defn- p-get
  "Returns the body of a response to a GET request to `url` as clojure map."
  [url]
  (-> url
      client/get
      :body
      parse-string))

(defn- p-put!
  "PUTs a stringified `body` to a `url`."
  [url body]
  (client/put url {:body (generate-string body)}))

(defn- map->query [query]
  (str "?" (clojure.string/join "&" (map #(str (first %) "=" (second %)) query))))

(defn- get-doc [doc-id]
  (p-get (str db "/" doc-id)))

(defn- get-view [{view :view} & [query]]
  (p-get (str db "/_design/doc/_view/" view (map->query query))))

(defn- put-doc!
  "PUTs a document with `doc-id` with `init`ial values."
  [doc-id & [init]]
  (p-put! (str db "/" doc-id) (or init {})))

(defn- update-doc!
  "Updates a document with id `doc-id` by applying a function
  `f` with arguments `args` to the old version of that document."
  [doc-id f & args]
  (let [old (get-doc doc-id)]
    (p-put! (str db "/" doc-id)
            (merge (apply f old args) {"_rev" (get old "_rev")}))))

(defn events-all
  "Retrieves a list of all stored events for the dashboard with `id`.
  The list may contain events of different types."
  [id]
  (get (get-doc id) "events" []))

(defn- event-meta-insert!
  "Stores meta data of an event."
  [event-id {:keys [mode]}]
  (events/event-meta-insert db {:event_id event-id :mode mode}))

(defn event-insert!
  [event board-id]
  (update-doc! board-id update "events" conj event))

(defn dashboards-all
  "Retrieves a list of dashboard id name paris for a user with `user-id`.
  Without argument all dashboards are returned."
  ([user-id]
   (get-view (doc-views :dashboard) {"key" user-id}))
  ([]
   (get-view (doc-views :dashboard))))

(defn dashboard-insert!
  "Stores a dashboard for a given user with `user-id`."
  [user-id name]
  (dashboards/dashboard-insert db {:user_id user-id :name name}))

(defn users-all
  "Retrieves a list of all users."
  []
  (users/users-all db))

(defn user-by-token
  "Retrieves a user by token, nil of no user exists."
  [token]
  (users/user-by-token db {:token token}))

(defn user-by-email
  "Retrieves a user by email, nil of no user exists."
  [email]
  (-> (users/user-by-email db {:email email})
      (dissoc :password)))

(defn user-insert!
  "Stores a user with given `email` and `password`."
  [email password]
  (users/user-insert db {:email email :password (hashers/encrypt password)}))

(defn token-insert!
  "Stores a token for a `user-id`."
  [user-id id]
  (tokens/token-insert db {:id id :user_id user-id}))

(defn user-password-matches?
  "Check to see if the password given matches the digest of the user's saved password"
  [email password]
  (-> (users/user-by-email db {:email email})
      :password
      (->> (hashers/check password))))
