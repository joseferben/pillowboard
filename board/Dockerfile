FROM java:openjdk-8-jre
MAINTAINER Josef Erben <josef@pillowboard.io>

COPY target/dashboard-standalone.jar dashboard-standalone.jar
ENV PORT 3000

EXPOSE 3000
CMD java -jar dashboard-standalone.jar
