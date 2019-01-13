const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport");
const Knex = require("knex");
const BearerStrategy = require("passport-http-bearer").Strategy;
const { BasicStrategy } = require("passport-http");

const {
  Account,
  Event,
  Dashboard,
  Chart,
  TimePoint,
  ClientError,
  ServerError
} = require("./types");
const { SecretsService } = require("./services/secrets-service");
const { AuthorizationService } = require("./services/authorization-service");
const {
  AuthorizationRepository
} = require("./repositories/authorization-repository");
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
  AuthorizationService,
  new AuthorizationService(new AuthorizationRepository())
);
dispatcher.set(SecretsService, new SecretsService());
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

passport.use(
  "basic",
  new BasicStrategy(
    { passReqToCallback: true },
    (req, login, password, done) => {
      dispatcher
        .getService(AccountService)
        .then((accounts) => {
          return accounts.authenticate(req.context, login, password);
        })
        .then((account) => {
          done(null, account);
        })
        .catch((err) => {
          done(err, false);
        });
    }
  )
);

passport.use(
  "bearer",
  new BearerStrategy({ passReqToCallback: true }, (req, token, done) => {
    dispatcher
      .getService(AccountService)
      .then((accounts) => {
        return accounts.getAuthenticatedAccount(req.context, token);
      })
      .then((account) => {
        done(null, account);
      })
      .catch((reason) => {
        if (reason instanceof ClientError) {
          done(null, false, { message: reason.message });
        } else if (reason instanceof ServerError) {
          done(null, false, {
            message: "Something went wrong, our admins have been notified"
          });
        } else {
          done(reason);
        }
      });
  })
);

const authorize = (operation, dispatcher, objExtractor) => {
  return (req, res, next) => {
    dispatcher
      .getService(AuthorizationService)
      .then((a11n) => {
        return a11n.authorize(
          req.context,
          operation,
          req.user,
          objExtractor(req)
        );
      })
      .then((authorized) => {
        if (authorized) {
          next();
        } else {
          console.error("Insufficient access rights");
          res.status(403).json({ message: "Insufficient access rights" });
        }
      })
      .catch((reason) => {
        console.error("Authorization failed:", reason);
        res.status(500).json("Request failed");
      });
  };
};

const wrap = (fn) => (...args) => {
  const promise = fn(...args);
  if (promise === undefined) {
    throw new Error("Return a promise in all handlers!");
  }
  return promise.catch(args[2]);
};

app.use(logger("dev"));
app.use(function initiliazeRequestContext(req, res, next) {
  req.context = dispatcher.newRequestContext(req, knex);
  next();
});
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

const apiPublic = express.Router();
const apiInternal = express.Router();
const apiAuth = express.Router();

apiPublic.use(cors());

if (process.env.NODE_ENV === "development") {
  apiInternal.use(cors());
} else if (process.env.NODE_ENV === "production") {
  app.use(compression());
}

app.use("/api/public", apiPublic);
app.use("/api", apiInternal);
app.use("/authentication", apiAuth);

app.use(function errorHandler(err, req, res, next) {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof ClientError) {
    return res.status(400).json({ message: err.message });
  } else if (err instanceof ServerError) {
    res
      .status(500)
      .json({ message: "Something went wrong, our admins have been notified" });
  } else {
    res.status(500).json({
      message: "Something went wrong, our admins have been notified"
    });
  }
});

apiAuth.get(
  "/token",
  passport.authenticate("basic", {
    session: false
  }),
  wrap((req, res, next) => {
    return dispatcher
      .getService(AccountService)
      .then((accounts) => accounts.getToken(req.context, req.user))
      .then((token) => {
        res.json({ token: token });
        next();
      });
  })
);

apiInternal.get(
  "/accounts",
  passport.authenticate("bearer", {
    session: false
  }),
  authorize("accounts/get_all", dispatcher, () => "domains/system"),
  wrap((req, res, next) => {
    return dispatcher
      .getService(AccountService)
      .then((accounts) => {
        return accounts.getAll(req.context);
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

apiInternal.get(
  "/accounts/my",
  passport.authenticate("bearer", {
    session: false
  }),
  authorize("accounts/get", dispatcher, (req) => req.user),
  wrap((req, res, next) => {
    return dispatcher
      .getService(AccountService)
      .then((accounts) => {
        return accounts.get(req.context, req.user.id);
      })
      .then((account) => {
        const data = account;
        data.password = "****";
        res.json(data);
      });
  })
);

apiInternal.get(
  "/dashboards/my",
  passport.authenticate("bearer", {
    session: false
  }),
  authorize("dashboards/get", dispatcher, (req) => req.user),
  wrap((req, res, next) => {
    return dispatcher
      .getService(DashboardService)
      .then((dashboards) => {
        return dashboards.getByAccount(req.context, req.user);
      })
      .then((dashboards) => {
        res.json(dashboards);
      });
  })
);

apiPublic.post(
  "/data",
  wrap((req, res, next) => {
    return dispatcher
      .getService(DashboardService)
      .then((dashboards) => {
        return dashboards.getByAccount(req.context, req.user);
      })
      .then((dashboards) => {
        res.json(dashboards);
      });
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
