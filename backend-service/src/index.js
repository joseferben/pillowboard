const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport");
const Knex = require("knex");

const {
  Account,
  Event,
  Dashboard,
  Chart,
  TimePoint,
  ClientError,
  ServerError
} = require("./types");
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

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  console.log("Request failed", err.message);
  if (err instanceof ClientError) {
    res.status(400).json({ message: err.message });
  } else if (err instanceof ServerError) {
    res
      .status(500)
      .json({ message: "Something went wrong, our admins have been notified" });
  }
});

public.get("/", (req, res) => {
  res.send("Hello World!");
});

const wrap = (fn) => (...args) => {
  const promise = fn(...args);
  if (promise === undefined) {
    throw new Error("Return a promise in all handlers!");
  }
  return promise.catch(args[2]);
};

internal.get(
  "/accounts",
  wrap((req, res, next) => {
    const context = { conn: Promise.resolve(knex) };
    return dispatcher
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
      });
  })
);

internal.get(
  "/my/dashboards",
  wrap((req, res, next) => {
    const context = { conn: Promise.resolve(knex) };
    return dispatcher
      .getServices([AccountService, DashboardService])
      .then(([accounts, dashboards]) => {
        return Promise.all([accounts.get(context, req.user.id), dashboards]);
      })
      .then(([account, dashboards]) => {
        const data = dashboards.getByAccount(context, account);
        res.json(data);
      });
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
