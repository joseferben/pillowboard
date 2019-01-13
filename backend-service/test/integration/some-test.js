const { expect } = require("chai").use(require("chai-as-promised"));
const Knex = require("knex");

const { Client } = require("../../src/client.js");

describe("canary test", () => {
  it("canary", () => {
    expect(1 + 1).to.be.equal(2);
  });
});

describe("db connection", () => {
  const knex = Knex({
    client: "pg",
    version: "7.7.1",
    connection: {
      host: "localhost",
      user: "admin",
      password: "password",
      database: "pillowboard-development"
    }
  });
  const client = new Client(
    "http://localhost:3000/authentication/",
    "http://localhost:3000/api/"
  );

  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  beforeEach((done) => {
    knex.seed.run().then(() => done());
  });

  describe("create dashbaord", () => {
    it("post data as anonymous user creates dashboard and point series", async () => {
      const res = await client.post({
        time: Date.now(),
        name: "foo",
        value: 42
      });
    });
  });

  // describe("authenticate", () => {
  //   it("returns token with correct credentials", async () => {
  //     const { token } = await client.authenticate("admin", "admin");
  //     expect(token).to.be.a("string");
  //   });

  //   it("returns token with incorrect credentials", async () => {
  //     expect(client.authenticate("admin", "foo")).to.be.rejected;
  //   });
  // });
});
