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

  authenticate(context, username, password) {
    return Promise.reject(new Error("Not implemented"));
  }

  getToken(context, user) {
    return Promise.reject(new Error("Not implemented"));
  }
}

module.exports = { AccountService: AccountService };
