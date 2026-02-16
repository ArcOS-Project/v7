import type { IUserContext } from "$interfaces/daemon";
import type { IProcess } from "$interfaces/process";
import type { App } from "$types/app";

export interface ISpawnUserContext extends IUserContext {
  spawnApp<T extends IProcess>(id: string, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  spawnOverlay<T extends IProcess>(id: string, parentPid?: number, ...args: any[]): Promise<T | undefined>;
  _spawnApp<T extends IProcess>(
    id: string,
    renderTarget?: HTMLDivElement | undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined>;
  _spawnOverlay<T extends IProcess>(
    id: string,
    renderTarget?: HTMLDivElement | undefined,
    parentPid?: number,
    ...args: any[]
  ): Promise<T | undefined>;
  legacy_spawnThirdParty<T extends IProcess>(app: App, metaPath: string, ...args: any[]): Promise<T | undefined>;
  tpaError_revisionIncompatible(app: App): void;
  tpaError_noEnableThirdParty(): void;
}
