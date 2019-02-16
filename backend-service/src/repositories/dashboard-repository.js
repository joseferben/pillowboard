const { Dashboard } = require("../types");

class DashboardRepository {
  create(context, dashboard) {
    return context.conn.then((trx) =>
      trx
        .insert({
          uuid: dashboard.id,
          owner: dashboard.owner,
          name: dashboard.name,
          status: dashboard.status
        })
        .into("dashboards")
    );
  }

  getByAccount(context, account) {
    return context.conn
      .then((knex) => knex("dashboards").where({ owner: account.id }))
      .then((data) => data.map((dashboard) => new Dashboard(dashboard)));
  }
}

module.exports = { DashboardRepository: DashboardRepository };
