import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { IUserContext } from "$interfaces/IUserDaemon";

export interface IVersionUserContext extends IUserContext {
  isRegisteredVersionOutdated(): Promise<boolean>;
  updateRegisteredVersion(): Promise<void>;
  checkForNewVersion(): Promise<void>;
  mountSourceDrive(): Promise<IFilesystemDrive | false>;
  enableSourceDrive(openAlso?: boolean): Promise<boolean>;
}
