import { AppProcess } from "$ts/apps/process";
import { FilesystemDrive } from "$ts/drives/drive";
import { ServerDrive } from "$ts/drives/server";
import { USERFS_UUID } from "$ts/env";
import { Daemon } from "$ts/server/user/daemon";
import type { AppProcessData } from "$types/app";
import type { UserQuota } from "$types/fs";
import type { CategorizedDiskUsage } from "$types/user";

export class DriveInfoRuntime extends AppProcess {
  drive?: FilesystemDrive;
  isUserFs = false;
  usage?: CategorizedDiskUsage;
  quota?: UserQuota;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, drive: FilesystemDrive) {
    super(pid, parentPid, app);

    if (drive && drive instanceof FilesystemDrive) this.drive = drive;

    this.setSource(__SOURCE__);
  }

  async start() {
    if (!this.drive) return false;

    this.isUserFs = this.drive instanceof ServerDrive && this.drive.uuid === USERFS_UUID;
    
    const { stop } = await Daemon.helpers?.GlobalLoadIndicator(
      this.isUserFs ? "Probing and categorizing your filesystem..." : "Probing drive information..."
    )!;
    this.quota = await this.drive.quota();

    if (this.isUserFs) {
      this.usage = await Daemon?.files?.determineCategorizedDiskUsage();
    }

    stop();
  }

  //#endregion
}
