(ns dashboard.db.tokens
    (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "dashboard/db/sql/tokens.sql")
