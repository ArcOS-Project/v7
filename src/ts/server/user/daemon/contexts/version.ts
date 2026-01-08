import { ArcOSVersion, Env, Fs } from "$ts/env";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { Daemon, type UserDaemon } from "..";
import { UserPaths } from "../../store";
import { UserContext } from "../context";

/**
 * RESTRICTED: this class does not have an entry in ProcessWithPermissions,
 * and as such cannot be accessed by third-party applications.
 */
export class VersionUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async isRegisteredVersionOutdated() {
    try {
      const contents = await Fs.readFile(join(UserPaths.System, "RegisteredVersion"));
      const isOutdated = !contents || arrayBufferToText(contents) !== ArcOSVersion;

      return isOutdated;
    } catch {
      return false;
    }
  }

  async updateRegisteredVersion() {
    try {
      await Fs.writeFile(join(UserPaths.System, "RegisteredVersion"), textToBlob(ArcOSVersion));
    } catch {
      return;
    }
  }

  async checkForNewVersion() {
    const isOutdated = await this.isRegisteredVersionOutdated();

    if (!isOutdated) return;

    Daemon!.spawn?.spawnOverlay("UpdateNotifierApp", +Env.get("shell_pid"));
  }
}
