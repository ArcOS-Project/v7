import { ArcOSVersion, Env, Fs } from "$ts/env";
import type { IconService } from "$ts/icon";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { Daemon, type UserDaemon } from "..";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class VersionUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async isRegisteredVersionOutdated() {
    const contents = await Fs.readFile(join(UserPaths.System, "RegisteredVersion"));
    const isOutdated = !contents || arrayBufferToText(contents) !== ArcOSVersion;

    return isOutdated;
  }

  async updateRegisteredVersion() {
    await Fs.writeFile(join(UserPaths.System, "RegisteredVersion"), textToBlob(ArcOSVersion));
  }

  async checkForNewVersion() {
    const isOutdated = await this.isRegisteredVersionOutdated();

    if (!isOutdated) return;

    const iconService = this.serviceHost?.getService<IconService>("IconService");

    iconService?.migrateIconConfiguration();

    Daemon!.spawn?.spawnOverlay("UpdateNotifierApp", +Env.get("shell_pid"));
  }
}
