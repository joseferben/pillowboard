const uuidv1 = require("uuid/v1");

class TimePoint {}
class Chart {}
const DashboardStatus = {
  ACTIVE: "active"
};
class Dashboard {
  constructor(data) {
    this.id = data.uuid ? data.uuid : uuidv1();
    this.owner = data.owner;
    this.name = data.name;
    this.status = data.status ? data.status : DashboardStatus.ACTIVE;
  }
}
class Command {
  constructor(data) {
    if (!data.actor) throw new ClientError("Command has no actor defined");
    if (!data.type) throw new ClientError("Command has no type defined");
    if (!data.payload) throw new ClientError("Command has no payload defined");
    this.actor = data.actor;
    this.type = data.type;
    this.payload = data.payload;
  }
}
class Account {
  constructor(data) {
    this.id = data.uuid;
    this.familyName = data.family_name;
    this.givenName = data.given_name;
    this.email = data.email;
    this.passwordHash = data.password_hash;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
  }
}
class ClientError extends Error {}
class ServerError extends Error {}

module.exports = {
  Account,
  Command,
  Dashboard,
  Chart,
  TimePoint,
  ClientError,
  ServerError
};
