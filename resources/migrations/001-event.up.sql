-- -*- mode: sql; sql-product: postgres; -*-

create table event (
       id serial primary key,
       type varchar(40) not null,
       name varchar(60) not null,
       time int not null default 0,
       create_at timestamp not null default current_timestamp
);
