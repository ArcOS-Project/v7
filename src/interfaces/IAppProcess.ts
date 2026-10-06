import type { AppProcessSpawnOptions } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";
import type { UserPreferences } from "$types/user";
import type { Constructs } from "./common";
import type { IProcess } from "./IProcess";
import type { IApplicationStorage } from "./services/IApplicationStorage";

// !tpa
export interface IAppProcess extends IProcess {
  userPreferences: ReadableStore<UserPreferences>;
  username: string;
  safeMode: boolean;
  getSingleton(): this[];
  closeIfSecondInstance(): Promise<this | undefined>;
  startKeyboardShortcutListener(): void;
  stopKeyboardShortcutListener(): void;
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
}

export interface IAppProcessConstructor extends Constructs<IAppProcess> {
  spawnOptions?: AppProcessSpawnOptions;
}
// !endtpa
