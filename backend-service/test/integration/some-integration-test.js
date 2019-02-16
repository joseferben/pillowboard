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

    it("create dashboard yields new dashboard", async () => {
      const { token } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );
      const dashboardsBefore = await client.getMyDashboards(token);

      await client.createDashboard(token, { name: "my-new-board" });

      const dashboardsAfter = await client.getMyDashboards(token);

      expect(dashboardsAfter.length - 1).to.be.equal(dashboardsBefore.length);
      expect(dashboardsAfter).to.deep.include({ name: "my-new-board" });
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

  describe("authorization", () => {
    it("get all accounts returns error for non-admin user", async () => {
      const { token } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );
      await expect(client.getAccounts(token)).to.be.rejected;
    });
    it("get all accounts returns all accounts for admin", async () => {
      const { token } = await client.authenticate(
        "jesse.pinkman@example.com",
        "password"
      );
      expect(await client.getAccounts(token)).to.be.an("array");
    });
    it("get dashboard returns dashboard for non-admin owner and error for non-admin user", async () => {
      const { token: tokenWalt } = await client.authenticate(
        "walter.white@example.com",
        "password"
      );

      const dashboard = await client
        .getMyDashboards(tokenWalt)
        .then((dashboards) => dashboards[0]);

      expect(dashboard).to.have.property("id");

      const { token: tokenTuco } = await client.authenticate(
        "tuco.salamanca@example.com",
        "password"
      );

      await expect(client.getDashboard(tokenTuco, dashboard.id)).to.be.rejected;
    });
  });
});
