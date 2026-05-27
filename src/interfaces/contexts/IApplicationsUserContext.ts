import type { IUserContext } from "$interfaces/IUserDaemon";
import type { App } from "$types/app";

// !tpa
export interface IApplicationsUserContext extends IUserContext {
  checkDisabled(appId: string, noSafeMode?: boolean): boolean;
  isVital(app: App): boolean | undefined;
  isPopulatableByAppIdSync(appId: string): boolean;
  disableApp(appId: string): Promise<false | undefined>;
  enableApp(appId: string): Promise<false | undefined>;
  enableThirdParty(): Promise<void>;
  disableThirdParty(): Promise<void>;
}
// !endtpa
