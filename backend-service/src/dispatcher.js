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
}

module.exports = { ServiceDispatcher: ServiceDispatcher };
