import type { ICommandResult } from "$interfaces/ICommandResult";
import { Daemon, Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import type { FSItem } from "$types/server/admin";
import { AdminBootstrapperJob } from ".";
import { AdminScopes } from "../store";

export class GetFsIndexDuplicates extends AdminBootstrapperJob {
  public override RequiredScopes: string[] = [AdminScopes.adminUsersList, AdminScopes.adminIndexGet];
  public static name = "GetFsIndexDuplicates";

  private OUTPUT_FOLDER = `T:/AdminJob_GetFsIndexDuplicates_${UUID()}`;

  override async run(broadcast?: (message: string) => void): Promise<ICommandResult> {
    broadcast?.("Getting users...");
    const users = await this.bootstrapper.getAllUsers();

    broadcast?.("Getting indexes...");
    const indexes = await this.bootstrapper.getAllIndexingNodes();

    await Fs.createDirectory(this.OUTPUT_FOLDER);
    broadcast?.("");

    const totalDuplicates: FSItem[] = [];

    for (const user of users) {
      broadcast?.(`Scanning ${user.username} (${user._id})`);

      const seen: FSItem[] = [];
      const duplicates: FSItem[] = [];
      const all = indexes.filter((index) => index.userId === user._id);

      for (const item of all) {
        if (seen.find((i) => i.type === item.type && i.path === item.path)) {
          duplicates.push(item);
          continue;
        }

        seen.push(item);
      }

      if (duplicates.length) {
        broadcast?.(`Found ${duplicates.length} duplicate(s) for ${user.username}`);
        await Fs.writeFile(
          join(this.OUTPUT_FOLDER, `${user._id}_${user.username}_duplicates.json`),
          textToBlob(JSON.stringify(duplicates, null, 4))
        );
        totalDuplicates.push(...duplicates);
      }
    }

    const amountDirectories = totalDuplicates.filter((dir) => dir.type === "directory").length;
    const amountFiles = totalDuplicates.filter((dir) => dir.type === "file").length;

    broadcast?.(``);
    broadcast?.(`Duplicates are saved to temp: ${this.OUTPUT_FOLDER}.`);
    broadcast?.(`  Users = ${users.length}`);
    broadcast?.(`  Files = ${amountFiles}`);
    broadcast?.(`  Directories = ${amountDirectories}`);
    broadcast?.(`  Total = ${totalDuplicates.length}`);

    const filePrefix = join(this.OUTPUT_FOLDER, "__ids");
    const itemIds = totalDuplicates.map((i) => i._id);

    await Fs.writeFile(`${filePrefix}.json`, textToBlob(JSON.stringify(itemIds, null, 4)));
    await Fs.writeFile(
      `${filePrefix}_query.json`,
      textToBlob(`{ _id: { $in: [${itemIds.map((i) => `ObjectId("${i}")`).join(",")}] }}`)
    );

    await Daemon.spawn?.spawnApp("fileManager", Daemon.getShell()?.pid, {}, this.OUTPUT_FOLDER);

    return CommandResult.Ok();
  }
}
