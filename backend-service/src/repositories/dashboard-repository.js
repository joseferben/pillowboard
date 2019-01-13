const { Dashboard } = require("../types");

class DashboardRepository {
  getByAccount(context, account) {
    return context.conn
      .then((knex) => knex("dashboards").where({ owner: account.id }))
      .then((data) => data.map((dashboard) => new Dashboard(dashboard)));
  }
}

module.exports = { DashboardRepository: DashboardRepository };
