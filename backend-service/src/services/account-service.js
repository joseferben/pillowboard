const { ClientError } = require("../types");

const { SecretsService } = require("./secrets-service");

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

  get(context, id) {
    return this.repo.get(context, id);
  }

  authenticate(context, login, password) {
    return context
      .getService(SecretsService)
      .then((secrets) =>
        Promise.all([this.getByEmail(context, login), secrets])
      )
      .then(([account, secrets]) => {
        if (secrets.isPasswordValid(context, account, password)) {
          return account;
        } else {
          throw new Error("Invalid password provided");
        }
      })
      .catch((reason) => {
        console.error(reason);
        throw new ClientError("Invalid login credentials provided");
      });
  }

  getToken(context, account) {
    return context.getService(SecretsService).then((secrets) => {
      return secrets.getForAccount(context, account);
    });
  }
}

module.exports = { AccountService: AccountService };
