import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { App } from "$types/app";
import type { ReadableStore } from "$types/writable";

export interface IIconsUserContext extends IUserContext {
  getAppIcon(app: App): string;
  getAppIconByProcess(process: IAppProcess): string;
  getIcon(id: string): Promise<string>;
  getIconCached(id: string): string;
  getIconStore(id: string): ReadableStore<string>;
}
