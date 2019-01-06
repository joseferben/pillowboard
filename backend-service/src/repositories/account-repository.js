class AccountRepository {
  getAll(context) {
    return context.models.Account.query();
  }

  getByEmail(context, email) {
    return Promise.reject(new Error("Not implemented"));
  }

  getByUuid(context, uuid) {
    return Promise.reject(new Error("Not implemented"));
  }
}

module.exports = { AccountRepository: AccountRepository };
