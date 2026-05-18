import type { ICommandResult } from "$interfaces/result";
import type { IBaseService } from "$interfaces/service";
import type { App, AppStorage, AppStoreCb, InstalledApp } from "$types/app";
import type { ReadableStore } from "$types/writable";

export interface IApplicationStorage extends IBaseService {
  buffer: ReadableStore<AppStorage>;
  appIconCache: Record<string, string>;
  loadOrigin(id: string, store: AppStoreCb): boolean;
  unloadOrigin(id: string): boolean;
  loadApp(app: App): false | App;
  loadAppModuleFile(path: string): Promise<boolean>;
  injected(): App[];
  refresh(): Promise<void>;
  get(): Promise<AppStorage>;
  getAppSynchronous(id: string): InstalledApp | undefined;
  getAppById(id: string, fromBuffer?: boolean): Promise<ICommandResult<App>>;
}
