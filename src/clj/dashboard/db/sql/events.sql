-- src/resources/sql/events.sql
-- Events

-- :name events-timeseries-all :? :*
-- :doc Select all timeseries events
select * from event_timeseries

-- :name events-gauge-all :? :*
-- :doc Select all gauge events
select * from event_gauge

-- :name events-tuple-all :? :*
-- :doc Select all tuple events
select * from event_tuple

-- :name event-timeseries-insert :! :n
-- :doc Insert a single event
insert into event_timeseries (name, time, value)
values (:name, :time, :value)

-- :name event-gauge-insert :! :n
-- :doc Insert a single event
insert into event_gauge (name, value)
values (:name, :value)

-- :name event-tuple-insert :! :n
-- :doc Insert a single event
insert into event_tuple (name1, value1, name2, value2)
values (:name1, :value1, :name2, :value2)

-- :name event-delete-all :! :n
-- :doc Remove all events
truncate table event
