import type { App, AppProcessSpawnOptions } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";
import type { UserPreferences } from "$types/user";
import type { Constructs } from "./common";
import type { IAppRendererContext } from "./IAppRenderer";
import type { IProcess } from "./IProcess";
import type { IApplicationStorage } from "./services/IApplicationStorage";

// !tpa
export interface IAppProcess extends IProcess {
  userPreferences: ReadableStore<UserPreferences>;
  username: string;
  safeMode: boolean;
  app: App;
  desktop?: string;
  renderTarget?: HTMLDivElement;
  getSingleton(): this[];
  closeIfSecondInstance(): Promise<this | undefined>;
  __stop(): Promise<any>;
  spawnOverlay(id: string, ...args: any[]): Promise<boolean>;
  spawnApp<T extends IAppProcess = IAppProcess>(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  spawnOverlayApp<T extends IAppProcess = IAppProcess>(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  elevate(id: string): Promise<unknown>;
  appStore(): IApplicationStorage;
  getIcon(id: string): Promise<string>;
  getIconCached(id: string): string;
  getIconStore(id: string): ReadableStore<string>;
  primaryAppContext: () => IAppRendererContext<this>;
  render?(): Promise<any>;
  __render__?(): Promise<any>;
}

export interface IAppProcessConstructor extends Constructs<IAppProcess> {
  spawnOptions?: AppProcessSpawnOptions;
}
// !endtpa
