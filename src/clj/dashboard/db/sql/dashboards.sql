-- src/clj/dashboard/db/sql/dashboard.sql
-- Dashboards

-- :name dashboard-insert :! :n
-- :doc Insert a single dashboard for a user
insert into dashboard (user_id, name)
values (:user_id, :name)
