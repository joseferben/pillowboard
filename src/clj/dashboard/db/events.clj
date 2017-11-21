(ns dashboard.db.events
    (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "dashboard/db/sql/events.sql")
