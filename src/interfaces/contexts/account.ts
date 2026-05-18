import type { IUserContext } from "$interfaces/daemon";
import type { ICommandResult } from "$interfaces/result";
import type { PublicUserInfo, UserInfo } from "$types/user";

export interface IAccountUserContext extends IUserContext {
  discontinueToken(token?: string): Promise<boolean | undefined>;
  getUserInfo(): Promise<ICommandResult<UserInfo>>;
  changeUsername(newUsername: string): Promise<boolean>;
  changePassword(newPassword: string): Promise<boolean>;
  getPublicUserInfoOf(userId: string): Promise<PublicUserInfo | undefined>;
  deleteAccount(): Promise<void>;
}
