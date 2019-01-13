class TimePoint {}
class Chart {}
class Dashboard {
  constructor(data) {
    this.id = data.uuid;
    this.account = data.account;
    this.name = data.name;
    this.status = data.status;
  }
}
class Event {}
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
  Event,
  Dashboard,
  Chart,
  TimePoint,
  ClientError,
  ServerError
};
