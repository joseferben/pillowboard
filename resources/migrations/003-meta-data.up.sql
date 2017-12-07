-- -*- mode: sql; sql-product: postgres; -*-

create table meta_data (
       id    serial primary key,
       password		  text not null,
       email		  varchar(50) not null,
       created_at timestamp not null default current_timestamp
);
