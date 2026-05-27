import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IProcess } from "$interfaces/IProcess";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { App, AppProcessSpawnOptions, InstalledApp, TpaSpawnEntrypointResult } from "$types/app";

// !tpa
export interface ISpawnUserContext extends IUserContext {
  spawnAppMeta<T extends IProcess>(
    app: App,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined>;
  spawnApp<T extends IProcess>(
    id: string,
    parentPid?: number,
    options?: AppProcessSpawnOptions,
    ...args: any[]
  ): Promise<T | undefined>;
  tpaEntrypoint(app: InstalledApp, ...args: any[]): Promise<ICommandResult<TpaSpawnEntrypointResult>>;
  tpaError_noEnableThirdParty(): void;
}
// !endtpa
