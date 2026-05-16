import type { IUserContext } from "$interfaces/IUserDaemon";

export interface IChecksUserContext extends IUserContext {
  NIGHTLY: boolean;
  checkReducedMotion(): void;
  checkForUpdates(): Promise<void>;
  checkNightly(): void;
}
