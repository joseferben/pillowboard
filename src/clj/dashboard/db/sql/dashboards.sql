-- src/clj/dashboard/db/sql/dashboard.sql
-- Dashboards

-- :name dashboards-all :? :*
-- :doc Selects all dashboards
select id, name, created_at from dashboard

-- :name dashboards-of-user :? :*
-- :doc Selects all dashboards of a given user with :user_id
select id, name, created_at from dashboard where user_id = :user_id

-- :name dashboard-insert :! :n
-- :doc Insert a single dashboard for a user
insert into dashboard (user_id, name)
values (:user_id, :name)
