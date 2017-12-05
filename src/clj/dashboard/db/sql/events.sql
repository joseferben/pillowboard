-- src/clj/dashboard/db/sql/events.sql
-- Events

-- :name events-timeseries-all :? :*
-- :doc Select all timeseries events
select event_timeseries.name, event_timeseries.time, event_timeseries.value, meta_data.mode
from event_timeseries
join event_timeseries on meta_data.event_id = event_timeseries.id
where event_timeseries.dashboard_id = :id

-- :name events-gauge-all :? :*
-- :doc Select all gauge events
select event_gauge.name, event_gauge.value, meta_data.mode
from event_gauge
join event_gauge on meta_data.event_id = event_gauge.id
where event_gauge.dashboard_id = :id

-- :name events-tuple-all :? :*
-- :doc Select all tuple events
select event_tuple.name1, event_tuple.value1, event_tuple.name2, event_tuple.value2, event_tuple.mode
from event_tuple
join event_tuple on meta_data.event_id = event_tuple.id
where event_tuple.dashboard_id = :id

-- :name event-meta-insert :! :n
-- :doc Insert meta data of an event
insert into meta_data (event_id, mode)
values (:event_id, :mode)

-- :name event-timeseries-insert :<! :n
-- :doc Insert a single event
insert into event_timeseries (dashboard_id, name, time, value)
values (:dashboard_id, :name, :time, :value) returning id

-- :name event-gauge-insert :<! :n
-- :doc Insert a single event
insert into event_gauge (dashboard_id, name, value)
values (:dashboard_id, :name, :value) returning id

-- :name event-tuple-insert :<! :n
-- :doc Insert a single event
insert into event_tuple (dashboard_id, name1, value1, name2, value2)
values (:dashboard_id, :name1, :value1, :name2, :value2) returning id

-- :name event-delete-all :! :n
-- :doc Remove all events
truncate table event
