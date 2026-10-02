import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { App } from "$types/apps/app";

// !tpa
export interface IApplicationsUserContext extends IUserContext {
  checkDisabled(appId: string, noSafeMode?: boolean): boolean;
  isVital(app: App): boolean | undefined;
  isPopulatableByAppIdSync(appId: string): boolean;
  disableApp(appId: string): Promise<ICommandResult>;
  enableApp(appId: string): Promise<ICommandResult>;
  enableThirdParty(): Promise<ICommandResult>;
  disableThirdParty(): Promise<ICommandResult>;
}
// !endtpa
