import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { IUserContext } from "$interfaces/IUserDaemon";

// !tpa-prop
export interface IVersionUserContext extends IUserContext {
  isRegisteredVersionOutdated(): Promise<boolean>;
  updateRegisteredVersion(): Promise<void>;
  checkForNewVersion(): Promise<void>;
  mountSourceDrive(): Promise<IFilesystemDrive | false>;
  enableSourceDrive(openAlso?: boolean): Promise<boolean>;
}
// !endtpa
