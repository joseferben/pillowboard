class SecretsService {
  getForAccount(context, account) {
    return Promise.resolve("abc");
  }

  isPasswordValid(context, account, password) {
    return Promise.resolve(true);
  }
}

module.exports = { SecretsService: SecretsService };
