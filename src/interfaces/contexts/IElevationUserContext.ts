import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserContext } from "$interfaces/IUserDaemon";
import { CommandResult } from "$ts/result";
import type { ElevationData } from "$types/system/elevation";

// !tpa
export interface IElevationUserContext extends IUserContext {
  _elevating: boolean;
  /**
   * @deprecated This method is no longer in use, use IElevationUserContext.manuallyElevate instead
   */
  elevate(id: string): Promise<ICommandResult>;
  manuallyElevate(data: ElevationData): Promise<ICommandResult>;
  /**
   * @deprecated This method should no longer be used.
   */
  loadElevation(id: string, data: ElevationData): void;
}
// !endtpa
