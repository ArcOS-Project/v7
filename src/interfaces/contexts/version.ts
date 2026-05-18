import type { IUserContext } from "$interfaces/daemon";
import type { IFilesystemDrive } from "$interfaces/fs";

export interface IVersionUserContext extends IUserContext {
  isRegisteredVersionOutdated(): Promise<boolean>;
  updateRegisteredVersion(): Promise<void>;
  checkForNewVersion(): Promise<void>;
  mountSourceDrive(): Promise<IFilesystemDrive | false>;
  enableSourceDrive(openAlso?: boolean): Promise<boolean>;
}
