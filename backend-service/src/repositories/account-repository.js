const { Account } = require("../types");

class AccountRepository {
  getAll(context) {
    return context.conn
      .then((trx) => trx.select().from("accounts"))
      .then((accounts) => accounts.map((account) => new Account(account)));
  }

  getByEmail(context, email) {
    return context.conn.then((trx) =>
      trx("accounts")
        .where("email", email)
        .first()
    );
  }

  get(context, id) {
    return context.conn.then((trx) =>
      trx("accounts")
        .where("uuid", id)
        .first()
    );
  }
}

module.exports = { AccountRepository: AccountRepository };
