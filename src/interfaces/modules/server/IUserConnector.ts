import type { ICommandResult } from "$interfaces/ICommandResult";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import type { IServerConnector } from "../IServerManager";

export declare class IUserConnector extends IServerConnector {
  Self(): Promise<ICommandResult<UserInfo>>;
  Rename(newUsername: string): Promise<ICommandResult>;
  ChangePassword(newPassword: string): Promise<ICommandResult>;
  Info(userId: string): Promise<ICommandResult<PublicUserInfo>>;
  PreferencesPut(preferences: UserPreferences): Promise<ICommandResult>;
  AvailabilityUsername(username: string): Promise<ICommandResult>;
  AvailabilityEmail(email: string): Promise<ICommandResult>;
  DispatchGet(): Promise<ICommandResult<GlobalDispatchClient[]>>;
  DispatchKick(clientId: string): Promise<ICommandResult>;
  PictureUrl(userId: string): string;
}
