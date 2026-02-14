import type { IUserContext } from "$interfaces/daemon";
import type { App } from "$types/app";

export interface ISpawnUserContext extends IUserContext {
  spawnApp<T>(id: string, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  spawnOverlay<T>(id: string, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  _spawnApp<T>(id: string, renderTarget?: HTMLDivElement | undefined, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  _spawnOverlay<T>(
    id: string,
    renderTarget?: HTMLDivElement | undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined>;
  spawnThirdParty<T>(app: App, metaPath: string, ...args: any[]): Promise<T | undefined>;
  tpaError_revisionIncompatible(app: App): void;
  tpaError_noEnableThirdParty(): void;
}
