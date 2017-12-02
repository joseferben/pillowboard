(ns user
  (:require [ragtime.jdbc :as jdbc]
            [ragtime.repl :as repl]
            [dashboard.db :refer [db]]))

(defn load-config []
  (let [url (db :subname)
        user (db :user)
        password (db :password)
        connection-uri (str "jdbc:postgresql:" url
                            "?user=" user
                            "&password=" password)]
    {:datastore  (jdbc/sql-database {:connection-uri connection-uri})
     :migrations (jdbc/load-resources "migrations")}))

(defn migrate []
  (repl/migrate (load-config)))

(defn rollback []
  (repl/rollback (load-config)))
