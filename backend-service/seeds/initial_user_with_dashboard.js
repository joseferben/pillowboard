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

const userUuids = [uuidv1(), uuidv1()];
const dashboardUuids = [uuidv1()];
const chartUuids = [uuidv1()];
const pointTimes = [
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
        return hash(password).then((hash) =>
          knex("accounts").insert([
            {
              uuid: userUuids[0],
              family_name: "White",
              given_name: "Walter",
              password: hash,
              email: "walter.white@example.com"
            },
            {
              uuid: userUuids[1],
              family_name: "Pinkman",
              given_name: "Jesse",
              password: hash,
              email: "jesse.pinkman@example.com"
            }
          ])
        );
      }),
    knex("dashboards")
      .del()
      .then(() => {
        return knex("dashboards").insert([
          {
            uuid: userUuids[0],
            owner: userUuids[0],
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
            uuid: chartUuids[0],
            dashboard: dashboardUuids[0],
            name: "test-chart",
            status: "active"
          }
        ]);
      }),
    knex("points_time")
      .del()
      .then(() => {
        return knex("points_time").insert([
          {
            uuid: uuidv1(),
            chart: chartUuids[0],
            time: new Date(pointTimes[0]),
            name: "foo",
            value: 0.2
          },
          {
            uuid: uuidv1(),
            chart: chartUuids[0],
            time: new Date(pointTimes[1]),
            name: "foo",
            value: 0.3
          },
          {
            uuid: uuidv1(),
            chart: chartUuids[0],
            time: new Date(pointTimes[2]),
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
            type: "createUser",
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
            type: "createUser",
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
            type: "createBoard",
            payload: JSON.stringify({
              owner: userUuids[0],
              name: "test-board"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "createChart",
            payload: JSON.stringify({
              dashboard: dashboardUuids[0],
              name: "test-chart"
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "timePoint",
            payload: JSON.stringify({
              chart: chartUuids[0],
              time: new Date(pointTimes[0]),
              name: "foo",
              value: 0.2
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "timePoint",
            payload: JSON.stringify({
              chart: chartUuids[0],
              time: new Date(pointTimes[1]),
              name: "foo",
              value: 0.3
            })
          },
          {
            uuid: uuidv1(),
            status: "processed",
            type: "timePoint",
            payload: JSON.stringify({
              chart: chartUuids[0],
              time: new Date(pointTimes[2]),
              name: "foo",
              value: 0.5
            })
          }
        ]);
      })
  ]);
};
