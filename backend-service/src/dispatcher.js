class ServiceDispatcher {
  constructor() {
    this.services = new Map();
  }

  set(name, service) {
    this.services.set(name, service);
  }

  getService(name) {
    return Promise.resolve(this.services.get(name));
  }

  newRequestContext(req, knex) {
    return { conn: Promise.resolve(knex) };
  }
}

module.exports = { ServiceDispatcher: ServiceDispatcher };
