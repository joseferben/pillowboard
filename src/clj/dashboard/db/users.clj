(ns dashboard.db.users
    (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "dashboard/db/sql/users.sql")
