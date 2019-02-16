class DashboardService {
  constructor(repo) {
    this.repo = repo;
  }

  create(context, dashboard) {
    return this.repo.create(context, dashboard);
  }

  getByAccount(context, account) {
    return this.repo.getByAccount(context, account);
  }
}

module.exports = { DashboardService };
