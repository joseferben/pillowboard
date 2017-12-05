# dashboard

This is a **zero** configuration data driven dashboard. Stop wasting your time setting up dashboards, start throwing your data at it!
The dashboard tries to figure out itself how to visualize and present incoming data.

![Screenshot](doc/screenshot.png?raw=true "Screenshot")

## Features

* real-time data
* event sourcing
* authenticated/authorized dashboard admin panel
* supports generic time series data

## Roadmap

* more supported data types: gauge, n-tuples
* meta data support as configuration replacement

## Getting started

The fastest way to get started is by using `docker-compose`:

```
docker-compose up
```

## Development

To run the backend with auto-reload enabled run:

	lein run

To auto run the tests run:

	lein test-refresh

To get an interactive development environment in the frontend run:

	lein figwheel

Alternatively you can use something like Cider for emacs:

	M-x cider-jack-in-clojurescript

and open your browser at [localhost:3000](http://localhost:3000/).

You should have two REPLs now, one for CLJS and one for CLJ.

To clean all compiled files:

	lein clean

To create a production build run:

	lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

Get refactoring suggestions by using:

`lein kibit`

Run the bikeshed linter by using:

`lein bikeshed`

Run the eastwood linter by using:

`lein eastwood`

Run database migrations by using:

`lein migrate`

## License

Copyright © 2017 Josef Erben

## Pretty printing tests

Use [this](https://github.com/venantius/ultra) lein plugin to pretty print tests.


## data types

### time series
```clojure
{:type timeseries
 :name "foobar"
 :time 112313
 :value 42}
```

### gauge
```clojure
{:type gauge
 :name "foobar"
 :value 42}
```

### tuple
```clojure
{:type tuple
 :name1 "foo"
 :value1 42
 :name2 "bar"
 :value2 "24"}
```

## Example authenticated request

```
http POST :3000/api/dashboards 'Authorization:Token eBniAEtO/KEAGSP60/RD1Wwtb21V4RnNGWb6wZhHGms=' name=myboard
```
