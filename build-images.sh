#!/usr/bin/env bash

lein uberjar
docker build -t jerben/dashboard .
