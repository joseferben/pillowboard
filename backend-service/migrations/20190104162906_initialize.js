exports.up = function(knex, Promise) {
  knex.schema.createTable("accounts", function(t) {
    t.increments("id");
    t.uuid("uuid");
    t.string("familiy_name");
    t.string("given_name");
    t.string("email");
    t.timestamps();
    t.unique(["email", "uuid", "id"]);
  });

  knex.schema.createTable("events", function(t) {
    t.increments("id");
    t.uuid("uuid");
    t.json("payload");
    t.string("status");
    t.timestamps();
    t.unique(["uuid", "id"]);
  });

  knex.schema.createTable("dashboards", function(t) {
    t.increments("id");
    t.uuid("uuid");
    t.string("status");
    t.timestamps();
    t.unique(["uuid", "id"]);
  });

  knex.schema.createTable("points", function(t) {
    t.increments("id");
    t.uuid("uuid");
    t.json("payload");
    t.timestamps();
    t.unique(["uuid", "id"]);
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("accounts");
  knex.schema.dropTable("events");
  knex.schema.dropTable("dashboards");
  knex.schema.dropTable("points");
};
