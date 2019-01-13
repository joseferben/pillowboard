const { Account, ServerError } = require("./types");

class RequestContext {
  constructor(data) {
    this.conn = data.conn;
    this.dispatcher = data.dispatcher;
  }

  getService(name) {
    return this.dispatcher.getService(name);
  }

  scopedId(obj) {
    if (obj instanceof Account) {
      return "accounts/" + obj.id;
    } else {
      throw new ServerError(
        "Can not get scoped id for object of type " + obj.constructor.name
      );
    }
  }
}

class ServiceDispatcher {
  constructor() {
    this.services = new Map();
  }

  set(name, service) {
    if (!name || !service) {
      throw new Error(
        "Failed to register invalid service values in dispatcher"
      );
    }
    this.services.set(name, service);
  }

  getService(name) {
    return Promise.resolve(this.services.get(name));
  }

  newRequestContext(req, knex) {
    return new RequestContext({
      conn: Promise.resolve(knex),
      dispatcher: this
    });
  }
}

module.exports = { ServiceDispatcher: ServiceDispatcher };
