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

  describe("dashboards", () => {
    it("user can fetch their dashboards", async () => {
      const { token } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );
      expect(await client.getMyDashboards(token)).to.be.an("array");
    });

    it("push data creates one new dashboard", async () => {
      const { token } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );
      const dashboardsBefore = await client.getMyDashboards(token);

      const res = await client.pushData(token, {
        time: Date.now(),
        name: "foo",
        value: 42
      });

      const dashboardsAfter = await client.getMyDashboards(token);
      expect(dashboardsAfter.length - 1).to.be.equal(dashboardsBefore.length);
    });
  });

  describe("authentication", () => {
    it("login with credentials returns token", async () => {
      const { token } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );
      expect(token).to.be.a("string");
    });

    it("login with invalid credentials returns error", async () => {
      expect(client.authenticate("walter.white@example.com", "foo")).to.be
        .rejected;
    });

    it("get my account with token returns account of current user", async () => {
      const { token } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );
      const account = await client.getMyAccount(token);

      expect(account).to.have.property("email", "walter.white@example.com");
    });
  });
});
