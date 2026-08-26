import type { ICommandResult } from "$interfaces/ICommandResult";
import type { GlobalDispatchClient } from "$types/system/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import type { PswdResetConsumptionResult, PswdResetCreateResult, PswdResetVerificationResult } from "$types/user/pswdreset";
import type { IServerConnector } from "../IServerManager";

// !tpa
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
  LoginBgUrl(userId: string): string;

  CreatePswdResetRequest(username: string): Promise<ICommandResult<PswdResetCreateResult>>;
  VerifyPswdResetRequest(userId: string, code: string): Promise<ICommandResult<PswdResetVerificationResult>>;
  ConsumePswdResetRequest(
    userId: string,
    resetToken: string,
    newPassword: string
  ): Promise<ICommandResult<PswdResetConsumptionResult>>;
}
