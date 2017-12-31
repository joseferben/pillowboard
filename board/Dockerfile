FROM java:openjdk-8-jre
MAINTAINER Josef Erben <josef@200ok.ch>

COPY target/dashboard-standalone.jar dashboard-standalone.jar
COPY wait-for-it.sh wait-for-it.sh
ENV PORT 3000

EXPOSE 3000
