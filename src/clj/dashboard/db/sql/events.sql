-- src/clj/dashboard/db/sql/events.sql
-- Events

-- :name events-timeseries-all :? :*
-- :doc Select all timeseries events
select name, time, value from event_timeseries where dashboard_id = :id

-- :name events-gauge-all :? :*
-- :doc Select all gauge events
select name, value from event_gauge where dashboard_id = :id

-- :name events-tuple-all :? :*
-- :doc Select all tuple events
select name1, value1, name2, value2 from event_tuple where dashboard_id = :id

-- :name event-timeseries-insert :! :n
-- :doc Insert a single event
insert into event_timeseries (dashboard_id, name, time, value)
values (:dashboard_id, :name, :time, :value)

-- :name event-gauge-insert :! :n
-- :doc Insert a single event
insert into event_gauge (dashboard_id, name, value)
values (:dashboard_id, :name, :value)

-- :name event-tuple-insert :! :n
-- :doc Insert a single event
insert into event_tuple (dashboard_id, name1, value1, name2, value2)
values (:dashboard_id, :name1, :value1, :name2, :value2)

-- :name event-delete-all :! :n
-- :doc Remove all events
truncate table event
