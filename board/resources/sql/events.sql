-- sql/points.sql
-- Input data points the dashboards are based on

-- :name create-dashboards!
-- :command :execute
-- :result :raw
-- :doc Create time points table
create table if not exists dashboards (
  id  uuid primary key,
  created_at    timestamp not null default current_timestamp
)

-- :name create-dashboard-event!
-- :command :execute
-- :result :raw
-- :doc Create time points table
create table if not exists dashboard_event (
  dashboard_id  uuid not null references dashboards(id),
  event_id      uuid not null references events(id),
  created_at    timestamp not null default current_timestamp
)

-- :name create-events!
-- :command :execute
-- :result :raw
-- :doc Create time points table
create table if not exists events (
  id            uuid primary key,
  data          jsonb not null,
  created_at    timestamp not null default current_timestamp
)

-- A :result value of :n below will return affected rows:
-- :name insert-event! :! :n
-- :doc Insert a data point
insert into events (id, data)
values (:id, :data)

-- A :result value of :n below will return affected rows:
-- :name insert-event-for-dashboard! :! :n
-- :doc Insert a data point
insert into events (id, data)
values (:event-id, :data)

-- A :result value of :n below will return affected rows:
-- :name insert-dashboard-event! :! :n
-- :doc Insert a data point
insert into dashboard_event (dashboard_id, event_id)
values (:dashboard-id, :event-id)

-- A :result value of :n below will return affected rows:
-- :name insert-dashboard! :! :n
-- :doc Insert a data point
insert into dashboards (id)
values (:id)

-- A ":result" value of ":1" specifies a single record
-- (as a hashmap) will be returned
-- :name select-events-of-dashboard :*
-- :doc Get all events of dashboard
select e.id, e.data from events as e
join dashboard_event as d on d.event_id = e.id
where d.dashboard_id::text = :id

-- A ":result" value of ":1" specifies a single record
-- (as a hashmap) will be returned
-- :name number-of-dashboard-with-id :1
-- :doc Get all events of dashboard
select count(*) from dashboards as d
where d.id::text = :id
