import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserContext } from "$interfaces/IUserDaemon";
import type { PublicUserInfo, UserInfo } from "$types/user";

// !tpa
export interface IAccountUserContext extends IUserContext {
  getUserInfo(): Promise<ICommandResult<UserInfo>>;
  getPublicUserInfoOf(userId: string): Promise<ICommandResult<PublicUserInfo>>;
  changeUsername(newUsername: string): Promise<ICommandResult>;
  changePassword(newPassword: string): Promise<ICommandResult>;
  discontinueToken(token?: string): Promise<ICommandResult>;
  deleteAccount(): Promise<void>;
}
// !endtpa
