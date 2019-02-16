const uuidv1 = require("uuid/v1");
const bcrypt = require("bcrypt");

const accounts = [uuidv1(), uuidv1(), uuidv1()];
const dashboards = [uuidv1()];
const charts = [uuidv1()];
const pointsGroups = [uuidv1()];
const points = [
  Date.now() - 5 * 1000,
  Date.now() - 3 * 1000,
  Date.now() - 1 * 1000
];

exports.seed = function(knex, Promise) {
  return Promise.all([
    knex("accounts")
      .del()
      .then(() => {
        const password = "password";
        return bcrypt.hash(password, 3).then((hash) =>
          knex("accounts").insert([
            {
              uuid: accounts[0],
              family_name: "White",
              given_name: "Walter",
              password_hash: hash,
              email: "walter.white@example.com"
            },
            {
              uuid: accounts[1],
              family_name: "Pinkman",
              given_name: "Jesse",
              password_hash: hash,
              email: "jesse.pinkman@example.com"
            },
            {
              uuid: accounts[2],
              family_name: "Salamanca",
              given_name: "Tuco",
              password_hash: hash,
              email: "tuco.salamanca@example.com"
            }
          ])
        );
      }),
    knex("role_assignments")
      .del()
      .then(() => {
        return knex("role_assignments").insert([
          {
            uuid: uuidv1(),
            role: "owner",
            assignee: "accounts/" + accounts[0],
            context: "dashboards/" + dashboards[0]
          },
          {
            uuid: uuidv1(),
            role: "owner",
            assignee: "accounts/" + accounts[0],
            context: "charts/" + charts[0]
          },
          {
            uuid: uuidv1(),
            role: "owner",
            assignee: "accounts/" + accounts[0],
            context: "pointsGroups/" + pointsGroups[0]
          },
          {
            uuid: uuidv1(),
            role: "admin",
            assignee: "accounts/" + accounts[1],
            context: "domains/system"
          }
        ]);
      }),
    knex("dashboards")
      .del()
      .then(() => {
        return knex("dashboards").insert([
          {
            uuid: dashboards[0],
            owner: accounts[0],
            name: "test-board",
            status: "active"
          }
        ]);
      }),
    knex("charts")
      .del()
      .then(() => {
        return knex("charts").insert([
          {
            uuid: charts[0],
            dashboard: dashboards[0],
            points_group: pointsGroups[0],
            name: "test-chart",
            status: "active"
          }
        ]);
      }),
    knex("points_groups")
      .del()
      .then(() => {
        return knex("points_groups").insert([
          {
            uuid: pointsGroups[0],
            name: "test-group"
          }
        ]);
      }),
    knex("time_points")
      .del()
      .then(() => {
        return knex("time_points").insert([
          {
            uuid: uuidv1(),
            points_group: pointsGroups[0],
            time: new Date(points[0]),
            name: "foo",
            value: 0.2
          },
          {
            uuid: uuidv1(),
            points_group: pointsGroups[0],
            time: new Date(points[1]),
            name: "foo",
            value: 0.3
          },
          {
            uuid: uuidv1(),
            points_group: pointsGroups[0],
            time: new Date(points[2]),
            name: "foo",
            value: 0.5
          }
        ]);
      }),
    knex("events")
      .del()
      .then(() => {
        return knex("events").insert([
          {
            uuid: uuidv1(),
            status: "processed",
            type: "CreateAccount",
            payload: JSON.stringify({
              familyName: "White",
              givenName: "Walter",
              password: "***",
              email: "walter.white@example.com"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "CreateAccount",
            payload: JSON.stringify({
              familyName: "Pinkman",
              givenName: "Jesse",
              password: "***",
              email: "jesse.pinkman@example.com"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "CreateAccount",
            payload: JSON.stringify({
              familyName: "Salamanca",
              givenName: "Tuco",
              password: "***",
              email: "tuco.salamanca@example.com"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "CreateBoard",
            payload: JSON.stringify({
              owner: accounts[0],
              name: "test-board"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "CreateChart",
            payload: JSON.stringify({
              dashboard: dashboards[0],
              name: "test-chart"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "PushTimePoint",
            payload: JSON.stringify({
              chart: charts[0],
              time: new Date(points[0]),
              name: "foo",
              value: 0.2
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "PushTimePoint",
            payload: JSON.stringify({
              chart: charts[0],
              time: new Date(points[1]),
              name: "foo",
              value: 0.3
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "PushTimePoint",
            payload: JSON.stringify({
              chart: charts[0],
              time: new Date(points[2]),
              name: "foo",
              value: 0.5
            })
          }
        ]);
      })
  ]);
};
