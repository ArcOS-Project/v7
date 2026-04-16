import type { IUserContext } from "$interfaces/IUserDaemon";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { PublicUserInfo, UserInfo } from "$types/user";

export interface IAccountUserContext extends IUserContext {
  discontinueToken(token?: string): Promise<boolean | undefined>;
  getUserInfo(): Promise<ICommandResult<UserInfo>>;
  changeUsername(newUsername: string): Promise<boolean>;
  changePassword(newPassword: string): Promise<boolean>;
  getPublicUserInfoOf(userId: string): Promise<PublicUserInfo | undefined>;
  deleteAccount(): Promise<void>;
}
