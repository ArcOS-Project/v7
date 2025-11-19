import { ArcOSVersion } from "$ts/env";
import type { IconService } from "$ts/icon";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type { UserDaemon } from "..";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

export class VersionUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async isRegisteredVersionOutdated() {
    const contents = await this.fs.readFile(join(UserPaths.System, "RegisteredVersion"));
    const isOutdated = !contents || arrayToText(contents) !== ArcOSVersion;

    return isOutdated;
  }

  async updateRegisteredVersion() {
    await this.fs.writeFile(join(UserPaths.System, "RegisteredVersion"), textToBlob(ArcOSVersion));
  }

  async checkForNewVersion() {
    const isOutdated = await this.isRegisteredVersionOutdated();

    if (!isOutdated) return;

    const iconService = this.serviceHost?.getService<IconService>("IconService");

    iconService?.migrateIconConfiguration();

    
    this.userDaemon.spawnContext?.spawnOverlay("UpdateNotifierApp", +this.env.get("shell_pid"));
  }
}
