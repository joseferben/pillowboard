const { Model } = require("objection");

class TimePoint extends Model {
  static get tableName() {
    return "points_time";
  }

  static get relationMappings() {
    return {
      belongsToCharts: {
        relation: Model.BelongsToOneRelation,
        modelClass: Chart,
        join: {
          from: "points_time.chart",
          to: "charts.uuid"
        }
      }
    };
  }
}

class Chart extends Model {
  static get tableName() {
    return "charts";
  }

  static get relationMappings() {
    return {
      belongsToDashboard: {
        relation: Model.BelongsToOneRelation,
        modelClass: Dashboard,
        join: {
          from: "charts.dashboard",
          to: "dashboards.uuid"
        }
      }
    };
  }
}

class Dashboard extends Model {
  static get tableName() {
    return "dashboards";
  }

  static get relationMappings() {
    return {
      belongsToAccount: {
        relation: Model.BelongsToOneRelation,
        modelClass: Account,
        join: {
          from: "dashboards.owner",
          to: "accounts.uuid"
        }
      }
    };
  }
}

class Event extends Model {
  static get tableName() {
    return "events";
  }
}

class Account extends Model {
  static get tableName() {
    return "accounts";
  }

  static get relationMappings() {
    return {
      ownsDashboard: {
        relation: Model.HasManyRelation,
        modelClass: Dashboard,
        join: {
          from: "accounts.uuid",
          to: "dashboards.owner"
        }
      }
    };
  }
}

module.exports = { Account, Event, Dashboard, Chart, TimePoint };
