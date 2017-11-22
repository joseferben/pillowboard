-- -*- mode: sql; sql-product: postgres; -*-

insert into user_account (email, password)
values ('demo@example.com', '12341234');

insert into dashboard (user_id, name)
values (1, 'demo-board');
