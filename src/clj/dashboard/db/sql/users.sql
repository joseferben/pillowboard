-- src/clj/dashboard/db/sql/users.sql
-- Users

-- :name users-all :? :*
-- :doc Select all users
select email from user_account

-- :name user-by-token :? :1
-- :doc Returns a single user that matches the token
select user_account.id from user_account join auth_token
on user_account.id = auth_token.user_id where auth_token.id = :token

-- :name user-by-email :? :1
-- :doc Returns a single user with the given email
select password from user_account
where email = :email

-- :name user-insert :! :n
-- :doc Insert a single user
insert into user_account (email, password)
values (:email, :password)
