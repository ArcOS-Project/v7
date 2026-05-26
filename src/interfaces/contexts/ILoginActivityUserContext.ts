import type { IUserContext } from "$interfaces/IUserDaemon";
import type { LoginActivity } from "$types/activity";

// !tpa-prop
export interface ILoginActivityUserContext extends IUserContext {
  getLoginActivity(): Promise<LoginActivity[]>;
  logActivity(action: string): Promise<boolean>;
}
// !endtpa
