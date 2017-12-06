(ns dashboard.db
  (:require [dashboard.pipeline.event :refer [event-type]]
            [clj-http.client :as client]
            [environ.core :refer [env]]
            [cheshire.core :refer [generate-string parse-string]]
            [buddy.hashers :as hashers]))

(def db (or (env :database-url) "http://localhost:5984/db"))

(def doc-views {:dashboard {:all {:view "dashboards-view"}}
                :user {:all {:view "users-view"}
                       :email {:view "users-email-view"}}
                :sessions {:all {:view "sessions-view"}}})

(defn uuid [] (.toString (java.util.UUID/randomUUID)))

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
  (->> query
       (map #(str (first %) "=" "\"" (second %) "\""))
       (clojure.string/join "&")
       (str "?")))

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

(defn event-insert!
  "Inserts `event` at the board with id `board-id`."
  [event board-id]
  (update-doc! board-id update "events" conj event))

(defn dashboards-all
  "Retrieves a list of dashboard id name paris for a user with `user-id`.
  Without argument all dashboards are returned."
  ([user-id]
   (get-view (get-in doc-views [:dashboard :all]) {"key" user-id}))
  ([]
   (get-view (get-in doc-views [:dashboard :all]))))

(defn dashboard-insert!
  "Stores a dashboard for a given user with `user-id`."
  [user-id name]
  (put-doc! (uuid) {:user-id user-id :name name :events []}))

(defn users-all
  "Retrieves a list of all users."
  []
  (get-view (get-in doc-views [:user :all])))

(defn user-by-token
  "Retrieves a user by token, nil of no user exists."
  [token]
  (let [sessions (get-view (get-in doc-views [:sessions :all]))]
    (-> sessions
        (get "rows")
        first
        (get "id")
        get-doc
        (get-in ["tokens" token])
        get-doc)))

(defn user-by-email
  "Retrieves a user by email, nil of no user exists."
  [email]
  (let [user-id (first (get (get-view (get-in doc-views [:user :email]) {"key" email}) "rows" []))]
    (get-doc (get user-id "id"))))

(defn user-insert!
  "Stores a user with given `email` and `password`."
  [email password]
  (put-doc! (uuid) {:type "user" :email email :password (hashers/encrypt password)}))

(defn token-insert!
  "Stores a token for a `user-id`."
  [user-id id]
  (let [sessions (get-view (get-in doc-views [:sessions :all]))]
    (if (zero? (get sessions "total_rows"))
      (put-doc! (uuid) {:type "sessions" :tokens {id user-id}})
      (update-doc! (get (first (get sessions "rows")) "id") update "tokens" assoc id user-id))))

(defn user-password-matches?
  "Check to see if the password given matches the digest of the user's saved password"
  [email password]
  (-> (users/user-by-email db {:email email})
      :password
      (->> (hashers/check password))))
