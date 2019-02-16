const { encode } = require("base-64");

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

const defaultOpts = ({ token, body, method }) => {
  const opts = {
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: 0
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  if (method) {
    opts.method = method;
  }
  return opts;
};

class Client {
  constructor(authBaseUrl, apiBaseUrl, client) {
    this.auth = authBaseUrl;
    this.api = apiBaseUrl;
    this.apiPulic = apiBaseUrl + "public/";
    this.fetch = client ? client : fetch;
  }

  authenticate(login, password) {
    const opts = {
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Basic " + encode(login + ":" + password),
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0
      }
    };
    return this.fetch(this.auth + "token", opts).then(responseHandler);
  }

  pushData(token, data, opts) {
    return this.fetch(
      this.apiPulic + "data",
      defaultOpts({ token, body: data, method: "POST" })
    ).then(responseHandler);
  }

  getMyAccount(token) {
    return this.fetch(this.api + "accounts/my", defaultOpts({ token })).then(
      responseHandler
    );
  }

  getAccounts(token) {
    return this.fetch(this.api + "accounts", defaultOpts({ token })).then(
      responseHandler
    );
  }

  getDashboard(token, id) {
    return this.fetch(
      this.api + "dashboards/" + id,
      defaultOpts({ token })
    ).then(responseHandler);
  }

  getMyDashboards(token) {
    return this.fetch(this.api + "dashboards/my", defaultOpts({ token })).then(
      responseHandler
    );
  }

  createDashboard(token, opts) {
    const body = JSON.stringify({
      type: "CreateDashboard",
      payload: { name: opts.name }
    });
    return this.fetch(
      this.api + "events",
      defaultOpts({ token, method: "POST" })
    ).then(responseHandler);
  }
}

module.exports = { Client: Client };
