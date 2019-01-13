class DashboardRepository {
  getByAccount(context, account) {
    return context.conn.then((knex) =>
      knex("dashboards").where({ owner: account.uuid })
    );
  }
}

module.exports = { DashboardRepository: DashboardRepository };
