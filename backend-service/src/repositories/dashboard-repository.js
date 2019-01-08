class DashboardRepository {
  getByAccount(context, account) {
    return context.models.Dashboard.query().where({ owner: account.uuid });
  }
}

module.exports = { DashboardRepository: DashboardRepository };
