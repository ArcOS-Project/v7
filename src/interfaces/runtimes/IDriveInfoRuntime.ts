import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { UserQuota } from "$types/fs";
import type { CategorizedDiskUsage } from "$types/user";

export interface IDriveInfoRuntime extends IAppProcess {
  drive?: IFilesystemDrive;
  isUserFs: boolean;
  usage?: CategorizedDiskUsage;
  quota?: UserQuota;
}
