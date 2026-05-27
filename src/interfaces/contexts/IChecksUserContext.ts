import type { IUserContext } from "$interfaces/IUserDaemon";

// !tpa
export interface IChecksUserContext extends IUserContext {
  NIGHTLY: boolean;
  checkReducedMotion(): void;
  checkForUpdates(): Promise<void>;
  checkNightly(): void;
}
// !endtpa
