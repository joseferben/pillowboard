class DashboardRepository {
  getByAccount(context, account) {
    return context.conn.then((trx) =>
      trx("dashboards").where({ owner: account.uuid })
    );
  }
}

module.exports = { DashboardRepository: DashboardRepository };
