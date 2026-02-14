import type { IUserContext } from "$interfaces/daemon";

export interface IChecksUserContext extends IUserContext {
  NIGHTLY: boolean;
  checkReducedMotion(): void;
  checkForUpdates(): Promise<void>;
  checkForMissedMessages(): Promise<void>;
  checkNightly(): void;
}
