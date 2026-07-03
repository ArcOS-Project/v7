import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IBaseService } from "$interfaces/IServiceHost";
import type { App, AppStorage, AppStoreCb, InstalledApp } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
export interface IApplicationStorage extends IBaseService {
  buffer: ReadableStore<AppStorage>;
  appIconCache: Record<string, string>;
  loadOrigin(id: string, store: AppStoreCb): boolean;
  unloadOrigin(id: string): boolean;
  loadApp(app: App): false | App;
  loadAppModuleFile(path: string, noVerify?: boolean): Promise<ICommandResult<App>>;
  injected(): App[];
  refresh(): Promise<void>;
  get(): Promise<AppStorage>;
  getAppSynchronous(id: string): InstalledApp | undefined;
  getAppById(id: string, fromBuffer?: boolean): Promise<ICommandResult<App>>;
  error_appLoadError(result: ICommandResult<App>): Promise<void>;
  loadAppsFromViteModules(modules: Record<string, () => Promise<unknown>>): Promise<AppStorage>;
  loadAppFromViteModule(fn: () => Promise<unknown>, path?: string): Promise<ICommandResult<App>>;
}
