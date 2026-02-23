import type { IUserContext } from "$interfaces/daemon";
import type { ElevationData } from "$types/elevation";

export interface IElevationUserContext extends IUserContext {
  _elevating: boolean;
  elevate(id: string): Promise<unknown>;
  manuallyElevate(data: ElevationData): Promise<unknown>;
  loadElevation(id: string, data: ElevationData): void;
}
