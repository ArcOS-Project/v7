import type { CommandResult } from "$ts/result";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import type { IServerConnector } from "../IServerManager";

export declare class IUserConnector extends IServerConnector {
  Self(): Promise<CommandResult<UserInfo>>;
  Rename(newUsername: string): Promise<CommandResult>;
  ChangePassword(newPassword: string): Promise<CommandResult>;
  Info(userId: string): Promise<CommandResult<PublicUserInfo>>;
  PreferencesPut(preferences: UserPreferences): Promise<CommandResult>;
  AvailabilityUsername(username: string): Promise<CommandResult>;
  AvailabilityEmail(email: string): Promise<CommandResult>;
  DispatchGet(): Promise<CommandResult<GlobalDispatchClient[]>>;
  DispatchKick(clientId: string): Promise<CommandResult>;
  PictureUrl(userId: string): string;
}
