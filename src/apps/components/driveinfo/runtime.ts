import { AppProcess } from "$ts/apps/process";
import { USERFS_UUID } from "$ts/env";
import { FilesystemDrive } from "$ts/fs/drive";
import { ServerDrive } from "$ts/fs/drives/server";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { UserQuota } from "$types/fs";
import type { CategorizedDiskUsage } from "$types/user";

export class DriveInfoRuntime extends AppProcess {
  drive?: FilesystemDrive;
  isUserFs = false;
  usage?: CategorizedDiskUsage;
  quota?: UserQuota;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, drive: FilesystemDrive) {
    super(handler, pid, parentPid, app);

    if (drive && drive instanceof FilesystemDrive) this.drive = drive;
  }

  async start() {
    if (!this.drive) return false;

    this.isUserFs = this.drive instanceof ServerDrive && this.drive.uuid === USERFS_UUID;
    this.quota = await this.drive.quota();

    if (this.isUserFs) this.usage = await this.userDaemon?.determineCategorizedDiskUsage();
  }
}
