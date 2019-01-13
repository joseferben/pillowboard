const { Account } = require("../types");

class AccountRepository {
  getAll(context) {
    return context.conn
      .then((knex) => knex.select().from("accounts"))
      .then((accounts) => accounts.map((account) => new Account(account)));
  }

  getByEmail(context, email) {
    return context.conn.then((knex) =>
      knex("accounts")
        .where("email", email)
        .first()
    );
  }

  get(context, id) {
    return context.conn.then((knex) =>
      knex("accounts")
        .where("uuid", id)
        .first()
    );
  }
}

module.exports = { AccountRepository: AccountRepository };
