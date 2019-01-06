const express = require("express");
const Knex = require("knex");
const { Model } = require("objection");

const { Account, Event, Dashboard, Chart, TimePoint } = require("./models");
const { AccountService } = require("./services/account-service");
const { AccountRepository } = require("./repositories/account-repository");
const { DashboardService } = require("./services/dashboard-service");
const { DashboardRepository } = require("./repositories/dashboard-repository");
const { ChartService } = require("./services/chart-service");
const { ChartRepository } = require("./repositories/chart-repository");
const { TimePointService } = require("./services/time-point-service");
const { TimePointRepository } = require("./repositories/time-point-repository");
const { EventService } = require("./services/event-service");
const { EventRepository } = require("./repositories/event-repository");

const { ServiceDispatcher } = require("./dispatcher");

const app = express();
const port = 3000;

const knex = Knex({
  client: "pg",
  version: "7.7.1",
  connection: {
    host: "database",
    user: "admin",
    password: "password",
    database: "pillowboard-development"
  }
});

const models = {
  Account: Account.bindKnex(knex),
  Event: Event.bindKnex(knex),
  Dashboard: Dashboard.bindKnex(knex),
  Chart: Chart.bindKnex(knex),
  TimePoint: TimePoint.bindKnex(knex)
};

const dispatcher = new ServiceDispatcher();
dispatcher.set(AccountService, new AccountService(new AccountRepository()));
dispatcher.set(
  DashboardService,
  new DashboardService(new DashboardRepository())
);
dispatcher.set(ChartService, new ChartService(new ChartRepository()));
dispatcher.set(
  TimePointService,
  new TimePointService(new TimePointRepository())
);
dispatcher.set(EventService, new EventService(new EventRepository()));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/accounts", (req, res) => {
  dispatcher
    .getService(AccountService)
    .then((accounts) => {
      const context = { models };
      return accounts.getAll(context);
    })
    .then((accounts) => {
      const data = accounts.map((account) => {
        account.password = "****";
        return account;
      });
      res.json(data);
    })
    .catch((reason) => {
      console.log("Request failed");
      res.status(500).json({ message: reason.message });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
