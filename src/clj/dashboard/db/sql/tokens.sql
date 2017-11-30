-- src/clj/dashboard/db/sql/tokens.sql
-- Tokens

-- :name token-insert :! :n
-- :doc Insert a single token for a user with `user-id`
insert into auth_token (id, user_id)
values (:id, :user_id)
