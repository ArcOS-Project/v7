import type { IUserContext } from "$interfaces/daemon";
import type { LoginActivity } from "$types/activity";

export interface ILoginActivityUserContext extends IUserContext {
  getLoginActivity(): Promise<LoginActivity[]>;
  logActivity(action: string): Promise<boolean>;
}
