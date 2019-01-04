const uuidv1 = require("uuid/v1");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const hash = (password) =>
  new Promise((res, rej) => {
    bcrypt.hash(password, 3, function(reason, hash) {
      if (reason) rej(new Error("Failed to hash password: ", reason.message));
      res(hash);
    });
  });

exports.seed = function(knex, Promise) {
  return knex("accounts")
    .del()
    .then(function() {
      const password = "password";
      return hash(password).then((hash) =>
        knex("accounts").insert([
          {
            uuid: uuidv1(),
            family_name: "White",
            given_name: "Walter",
            password: hash,
            email: "walter.white@example.com"
          }
        ])
      );
    });
};
