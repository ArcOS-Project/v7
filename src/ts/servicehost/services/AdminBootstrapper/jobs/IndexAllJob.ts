import type { ICommandResult } from "$interfaces/ICommandResult";
import { CommandResult } from "$ts/result";
import { Sleep } from "$ts/sleep";
import { AdminBootstrapperJob } from ".";
import { AdminScopes } from "../store";

export class IndexAllJob extends AdminBootstrapperJob {
  public override RequiredScopes: string[] = [AdminScopes.adminIndexUser, AdminScopes.adminUsersList];
  public static name = "FsIndexAllJob";

  override async run(broadcast?: (message: string) => void): Promise<ICommandResult> {
    broadcast?.("Getting users...");
    const users = await this.bootstrapper.getAllUsers();

    for (const user of users) {
      broadcast?.(`Indexing unindexed items for ${user.username} (${user._id})...`);
      const indexingResult = await this.bootstrapper.forceIndexFor(user.username);

      if (!indexingResult.length) {
        broadcast?.(`Didn't find any unindexed filesystem items for ${user.username}`);
      } else {
        broadcast?.(`Indexed the following items:`);

        for (const row of indexingResult) {
          broadcast?.(` - ${row}`);
        }
      }

      await Sleep(100);
    }

    return CommandResult.Ok();
  }
}
