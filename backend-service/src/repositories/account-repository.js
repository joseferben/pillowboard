const { Account } = require("../types");

class AccountRepository {
  getAll(context) {
    return context.conn
      .then((trx) => trx.select().from("accounts"))
      .then((accounts) => accounts.map((account) => new Account(account)));
  }

  getByEmail(context, email) {
    return context.conn
      .then((trx) =>
        trx("accounts")
          .where("email", email)
          .first()
      )
      .then((data) => new Account(data));
  }

  get(context, id) {
    return context.conn
      .then((trx) =>
        trx("accounts")
          .where("uuid", id)
          .first()
      )
      .then((data) => new Account(data));
  }
}

module.exports = { AccountRepository: AccountRepository };
