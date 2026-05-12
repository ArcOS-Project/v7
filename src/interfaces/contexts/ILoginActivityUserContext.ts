import type { IUserContext } from "$interfaces/IUserDaemon";
import type { LoginActivity } from "$types/activity";

export interface ILoginActivityUserContext extends IUserContext {
  getLoginActivity(): Promise<LoginActivity[]>;
  logActivity(action: string): Promise<boolean>;
}
