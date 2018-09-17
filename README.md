# Pillowboard

Tests: ![](https://circleci.com/gh/jerben/dashboard.svg?style=svg)

[pillowboard.io](https://pillowboard.io)

This is a **zero** configuration data-driven dashboard. Stop wasting time setting up dashboards, just throwing your data at this one!
The dashboard tries to make sense of your data and present it in a sensible way.

![Screenshot](doc/screenshot.png?raw=true "Screenshot")


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

Copyright © 2018 Josef Erben

## Pretty printing tests

Use [this](https://github.com/venantius/ultra) lein plugin to pretty print tests.
