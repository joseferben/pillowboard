const uuidv1 = require("uuid/v1");
const CommandStatus = {
  PROCESSED: "processed"
};
class CommandRepository {
  create(context, command) {
    return context.conn.then((trx) =>
      trx
        .insert({
          uuid: uuidv1(),
          actor: command.actor,
          type: command.type,
          payload: command.payload,
          status: CommandStatus.PROCESSED
        })
        .into("commands")
    );
  }
}

module.exports = {
  CommandRepository,
  CommandStatus
};
