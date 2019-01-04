exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("accounts", function(t) {
      t.increments("id");
      t.uuid("uuid").notNullable();
      t.string("family_name").notNullable();
      t.string("given_name").notNullable();
      t.string("password").notNullable();
      t.string("email").notNullable();
      t.timestamps(true, true);
      t.unique(["email", "uuid", "id"]);
    }),

    knex.schema.createTable("events", function(t) {
      t.increments("id");
      t.uuid("uuid").notNullable();
      t.json("payload");
      t.string("status").notNullable();
      t.timestamps(true, true);
      t.unique(["uuid", "id"]);
    }),

    knex.schema.createTable("dashboards", function(t) {
      t.increments("id");
      t.uuid("uuid").notNullable();
      t.uuid("owner").notNullable();
      t.string("status").notNullable();
      t.timestamps(true, true);
      t.unique(["uuid", "id"]);
    }),

    knex.schema.createTable("charts", function(t) {
      t.increments("id");
      t.uuid("uuid").notNullable();
      t.uuid("dashboard").notNullable();
      t.string("status").notNullable();
      t.timestamps(true, true);
      t.unique(["uuid", "id"]);
    }),

    knex.schema.createTable("points", function(t) {
      t.increments("id");
      t.uuid("uuid").notNullable();
      t.uuid("chart").notNullable();
      t.string("name").notNullable();
      t.float("value");
      t.timestamps(true, true);
      t.unique(["uuid", "id"]);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("accounts"),
    knex.schema.dropTable("events"),
    knex.schema.dropTable("dashboards"),
    knex.schema.dropTable("charts"),
    knex.schema.dropTable("points")
  ]);
};
