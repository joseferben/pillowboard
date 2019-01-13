const admin = "admin";
const domains = { SYSTEM: "domains/system" };

class AuthorizationService {
  constructor(repo) {
    this.repo = repo;
  }

  authorize(context, predicate, subject, object) {
    if (typeof object !== "string") {
      object = context.scopedId(object);
    }
    if (typeof subject !== "string") {
      subject = context.scopedId(subject);
    }
    if (subject === object) {
      return Promise.resolve(true);
    }
    return this.repo
      .find(context, admin, subject, domains.SYSTEM)
      .then((assignment) => (assignment ? true : false));
  }
}

module.exports = { AuthorizationService: AuthorizationService };
