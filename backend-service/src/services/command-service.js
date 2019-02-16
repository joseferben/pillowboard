const multimethod = require("multimethod");

const { DashboardService } = require("./dashboard-service");
const { Dashboard, ClientError } = require("../types");
const { CommandStatus } = require("../repositories/command-repository");

const handleCommand = (context) =>
  multimethod()
    .dispatch((command) => {
      return command.type;
    })
    .when("CreateDashboard", (command) => {
      return context.getService(DashboardService).then((dashboards) => {
        const dashboard = new Dashboard({
          owner: command.actor,
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

  handle(context, command) {
    return this.repo.create(context, command).then(() => {
      return handleCommand(context)(command);
    });
  }
}

module.exports = { CommandService: CommandService };
