const fetch = require("node-fetch");

const responseHandler = (res) => {
  if (res.status >= 400) {
    if (res.status >= 500) {
      return Promise.reject(new Error("Server failure"));
    } else if (res.status === 401) {
      return Promise.reject(new Error("Unauthorized"));
    } else if (res.status === 403) {
      return Promise.reject(new Error("Forbidden"));
    } else if (res.status === 404) {
      return Promise.reject(new Error("Not found"));
    } else {
      return Promise.reject(new Error("Bad request"));
    }
  } else {
    return res.json();
  }
};

class Client {
  constructor(authBaseUrl, apiBaseUrl, client) {
    this.auth = authBaseUrl;
    this.api = apiBaseUrl;
    this.fetch = client ? client : fetch;
  }

  authenticate(username, password) {
    this.fetch(this.auth + "token").then(responseHandler);
  }
}

module.exports = { Client: Client };
