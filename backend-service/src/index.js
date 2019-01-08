const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport");
const Knex = require("knex");

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

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

const public = express.Router();
const internal = express.Router();

public.use(cors());

if (process.env.NODE_ENV === "development") {
  internal.use(cors());
} else if (process.env.NODE_ENV === "production") {
  app.use(compression());
}

app.use("/api/public", public);
app.use("/api", internal);

public.get("/", (req, res) => {
  res.send("Hello World!");
});

internal.get("/accounts", (req, res) => {
  const context = { conn: Promise.resolve(knex) };
  dispatcher
    .getService(AccountService)
    .then((accounts) => {
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
      console.log("Request failed", reason.message);
      res.status(500).json({ message: reason.message });
    });
});

internal.get("/my/dashboards", (req, res) => {
  const context = { conn: Promise.resolve(knex) };
  dispatcher
    .getServices([AccountService, DashboardService])
    .then(([accounts, dashboards]) => {
      return Promise.all([accounts.get(context, req.user.id), dashboards]);
    })
    .then(([account, dashboards]) => {
      const data = dashboards.getByAccount(context, account);
      res.json(data);
    })
    .catch((reason) => {
      console.log("Request failed:", reason.message);
      res.status(500).json({ message: reason.message });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
