import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { LoginActivity } from "$types/user/activity";

// !tpa
export interface ILoginActivityUserContext extends IUserContext {
  getLoginActivity(): Promise<ICommandResult<LoginActivity[]>>;
  logActivity(action: string): Promise<ICommandResult>;
}
// !endtpa
