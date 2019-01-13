class AuthorizationRepository {
  find(context, role, assignee, roleContext) {
    return context.conn.then((knex) =>
      knex("role_assignments")
        .where({ role: role, assignee: assignee, context: roleContext })
        .first()
    );
  }
}

module.exports = { AuthorizationRepository: AuthorizationRepository };
