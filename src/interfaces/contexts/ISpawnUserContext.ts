import type { IProcess } from "$interfaces/IProcess";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { App, AppProcessSpawnOptions } from "$types/app";

export interface ISpawnUserContext extends IUserContext {
  spawnApp<T extends IProcess>(
    id: string,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined>;
  spawnAppMeta<T extends IProcess>(
    app: App,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined>;
  tpaError_noEnableThirdParty(): void;
}
