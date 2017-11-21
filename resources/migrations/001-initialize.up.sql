-- -*- mode: sql; sql-product: postgres; -*-

create table user_account (
       id    serial primary key,
       password		  text not null,
       email		  varchar(50) not null,
       created_at timestamp not null default current_timestamp
);

create table dashboard (
       id serial primary key,
       name varchar(40) not null,
       user_id integer references user_account on delete cascade,
       created_at timestamp not null default current_timestamp
);

create table auth_token (
       id varchar(44) primary key,
       user_id integer references user_account on delete cascade,
       created_at timestamp not null default current_timestamp
);

create table event_timeseries (
       id serial primary key,
       dashboard_id integer references dashboard on delete cascade,
       name varchar(60) not null,
       time int not null default 0,
       value real not null default 0.0,
       created_at timestamp not null default current_timestamp
);

create table event_gauge (
       id serial primary key,
       dashboard_id integer references dashboard on delete cascade,
       name varchar(60) not null,
       value real not null default 0.0,
       created_at timestamp not null default current_timestamp
);

create table event_tuple (
       id serial primary key,
       dashboard_id integer references dashboard on delete cascade,
       name1 varchar(60) not null,
       value1 real not null default 0.0,
       name2 varchar(60) not null,
       value2 real not null default 0.0,
       created_at timestamp not null default current_timestamp
);
