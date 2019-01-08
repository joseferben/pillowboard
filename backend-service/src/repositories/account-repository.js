const { Account } = require("../types");

class AccountRepository {
  getAll(context) {
    return context.conn
      .then((knex) => knex.select().from("accounts"))
      .then((accounts) => accounts.map((account) => new Account(account)));
  }

  getByEmail(context, email) {
    return Promise.reject(new Error("Not implemented"));
  }

  getByUuid(context, uuid) {
    return Promise.reject(new Error("Not implemented"));
  }
}

module.exports = { AccountRepository: AccountRepository };
