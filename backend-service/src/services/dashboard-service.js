class DashboardService {
  constructor(repo) {
    this.repo = repo;
  }

  getByAccount(context, account) {
    return this.repo.getByAccount(context, account);
  }
}

module.exports = { DashboardService };
