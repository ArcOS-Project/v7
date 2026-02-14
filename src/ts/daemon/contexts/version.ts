import type { IVersionUserContext } from "$interfaces/contexts/version";
import type { IUserDaemon } from "$interfaces/daemon";
import type { IFilesystemDrive } from "$interfaces/fs";
import SourceDriveEnable from "$lib/Daemon/SourceDriveEnable.svelte";
import { ArcOSVersion, Env, Fs, Kernel } from "$ts/env";
import { SecurityMediumIcon } from "$ts/images/general";
import { SourceFilesystemDrive } from "$ts/kernel/mods/fs/drives/src";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { Daemon } from "..";
import { UserContext } from "../context";

/**
 * RESTRICTED: this class does not have an entry in ProcessWithPermissions,
 * and as such cannot be accessed by third-party applications.
 */
export class VersionUserContext extends UserContext implements IVersionUserContext {
  constructor(id: string, daemon: IUserDaemon) {
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

  async mountSourceDrive(): Promise<IFilesystemDrive | false> {
    return await Fs.mountDrive<IFilesystemDrive>("src", SourceFilesystemDrive, "S");
  }

  async enableSourceDrive(openAlso = false): Promise<boolean> {
    if (Daemon.preferences().globalSettings.enableSourceDrive) return true;

    const shellPid = Daemon.getShell()?.pid ?? Daemon.pid;
    const accepted = await new Promise<boolean>((r) => {
      MessageBox(
        {
          title: "Source code license agreement",
          image: SecurityMediumIcon,
          content: SourceDriveEnable,
          buttons: [
            {
              caption: "View license",
              action: async () => {
                await Fs.writeFile(`T:/Meta/LICENSE`, textToBlob(Kernel.ARCOS_LICENSE));
                await Daemon.spawn?.spawnApp("writer", shellPid, `T:/Meta/LICENSE`);
                return false; // Don't close the dialog
              },
            },
            {
              caption: "Cancel",
              action: () => {
                r(false);
              },
            },
            {
              caption: "Accept",
              action: () => {
                r(true);
              },
              suggested: true,
            },
          ],
        },
        shellPid
      );
    });

    if (accepted) {
      Daemon.preferences.update((v) => {
        v.globalSettings.enableSourceDrive = true;
        return v;
      });

      await this.mountSourceDrive();

      if (openAlso) {
        await Daemon.spawn?.spawnApp("fileManager", shellPid, `S:/`);
      }
    }

    return accepted;
  }
}
