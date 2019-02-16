const multimethod = require("multimethod");

const { DashboardService } = require("./dashboard-service");
const { Dashboard } = require("../types");
const { CommandStatus } = require("../repositories/command-repository");

const handleCommand = (context) =>
  multimethod()
    .dispatch((user, command) => {
      return command.type;
    })
    .when("CreateDashboard", (user, command) => {
      return context.getService(DashboardService).then((dashboards) => {
        const dashboard = new Dashboard({
          owner: user.id,
          name: command.payload.name
        });
        return dashboards.create(context, dashboard).then(() => {
          command.status = CommandStatus.PROCESSED;
          return command;
        });
      });
    });

class CommandService {
  constructor(repo) {
    this.repo = repo;
  }

  handle(context, user, command) {
    if (!command.type) {
      return Promise.reject(new Error("Command has no type"));
    }

    return this.repo.create(context, user, command).then(() => {
      return handleCommand(context)(user, command);
    });
  }
}

module.exports = { CommandService: CommandService };
