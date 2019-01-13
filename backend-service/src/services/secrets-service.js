const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret";

class SecretsService {
  getForAccount(context, account) {
    return Promise.resolve(
      jwt.sign(
        {
          accountId: account.uuid
        },
        JWT_SECRET,
        { expiresIn: "24h" }
      )
    );
  }

  verifyAndDecode(context, token) {
    return Promise.resolve(jwt.verify(token, JWT_SECRET));
  }

  isPasswordValid(context, hash, password) {
    return bcrypt.compare(password, hash);
  }
}

module.exports = { SecretsService: SecretsService };
