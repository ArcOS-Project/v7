import type { ICommandResult } from "$interfaces/ICommandResult";
import { CommandResult } from "$ts/result";
import { AdminBootstrapperJob } from ".";
import { AdminScopes } from "../store";

export class IndexAllJob extends AdminBootstrapperJob {
  public override RequiredScopes: string[] = [AdminScopes.adminIndexUser, AdminScopes.adminUsersList];
  public static name = "FsIndexAllJob";

  // TODO: Make this job run its parallel operations in chunks of 50 users at a time if we get too many users
  override async run(broadcast?: (message: string) => void): Promise<ICommandResult> {
    broadcast?.("Getting users...");
    broadcast?.("");

    const users = await this.bootstrapper.getAllUsers();
    let totalCount = 0;

    await Promise.all(
      users.map((user) => {
        return new Promise<void>(async (resolve) => {
          broadcast?.(`[${user.username}] Indexing unindexed items for ${user.username} (${user._id})...`);
          const indexingResult = await this.bootstrapper.forceIndexFor(user.username);

          broadcast?.(`[${user.username}] Migration results came back.`);
          if (!indexingResult.length) {
            broadcast?.(`[${user.username}] Didn't find any unindexed filesystem items for ${user.username}`);
          } else {
            broadcast?.(`[${user.username}] Indexed the following items:`);

            for (const row of indexingResult) {
              broadcast?.(`[${user.username}]  - ${row}`);
            }
          }

          totalCount += indexingResult.length;
          broadcast?.("");
          resolve();
        });
      })
    );

    broadcast?.("");
    broadcast?.(`Indexed ${totalCount} item(s) across ${users.length} users`);

    return CommandResult.Ok();
  }
}
