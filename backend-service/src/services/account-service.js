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
        return Promise.all([
          account,
          secrets.isPasswordValid(context, account.passwordHash, password)
        ]);
      })
      .then(([account, isValid]) => {
        if (isValid) {
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

  getAuthenticatedAccount(context, token) {
    return context
      .getService(SecretsService)
      .then((secrets) => {
        return secrets.verifyAndDecode(context, token);
      })
      .then((payload) => {
        return this.get(context, payload.accountId);
      });
  }

  getToken(context, account) {
    return context.getService(SecretsService).then((secrets) => {
      return secrets.getForAccount(context, account);
    });
  }
}

module.exports = { AccountService: AccountService };
