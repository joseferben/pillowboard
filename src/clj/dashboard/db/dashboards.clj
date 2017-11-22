(ns dashboard.db.dashboards
    (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "dashboard/db/sql/dashboards.sql")
