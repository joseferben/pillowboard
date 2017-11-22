-- src/clj/dashboard/db/sql/users.sql
-- Users

-- :name user-insert :! :n
-- :doc Insert a single user
insert into user_account (email, password)
values (:email, :password)
