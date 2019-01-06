class AccountService {
  constructor(repo) {
    this.repo = repo;
  }

  getAll(context) {
    return this.repo.getAll(context);
  }

  getByEmail(context, email) {
    return this.repo.getByEmail(context, email);
  }

  getByUuid(context, uuid) {
    return this.repo.getByEmail(context, uuid);
  }
}

module.exports = { AccountService: AccountService };
