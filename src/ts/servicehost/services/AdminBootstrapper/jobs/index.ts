import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IAdminBootstrapper, IAdminBootstrapperJob } from "$interfaces/services/IAdminBootstrapper";
import { Daemon } from "$ts/env";
import { CommandResult } from "$ts/result";

export class AdminBootstrapperJob implements IAdminBootstrapperJob {
  public RequiredScopes: string[] = [];
  public static name: string = "UnknownJob";
  public jobName: string;

  get bootstrapper() {
    return Daemon.serviceHost!.getService<IAdminBootstrapper>("AdminBootstrapper")!;
  }

  constructor(name: string) {
    this.jobName = name;
  }

  async _run(broadcast?: (message: string) => void): Promise<ICommandResult> {
    try {
      broadcast?.(`Looking to start AdminBootstrapperJob ${this.jobName}`);

      if (!this.bootstrapper?.canAccess(...this.RequiredScopes)) {
        broadcast?.("Failed: missing required scopes");
        return CommandResult.Error(`AdminBootstrapperJob ${this.jobName} failed: missing required scopes.`);
      }

      return await this.run(broadcast);
    } catch (e) {
      broadcast?.(`Internal error: ${e}`);
      return CommandResult.Error(`${e}`);
    }
  }

  async run(broadcast?: (message: string) => void): Promise<ICommandResult> {
    // stub
    return CommandResult.Ok();
  }
}
