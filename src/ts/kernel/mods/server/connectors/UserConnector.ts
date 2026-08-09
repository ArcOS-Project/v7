import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import { Server } from "$ts/env";
import { CommandResult } from "$ts/result";
import { authcode } from "$ts/util";
import { toForm } from "$ts/util/form";
import type { GlobalDispatchClient } from "$types/system/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import type { PswdResetConsumptionResult, PswdResetCreateResult, PswdResetVerificationResult } from "$types/user/pswdreset";
import { ServerConnector } from ".";

export class UserConnector extends ServerConnector implements IUserConnector {
  override prefix = "/user";

  async Self(): Promise<ICommandResult<UserInfo>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/self"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Rename(newUsername: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.patch("/rename", toForm({ newUsername })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async ChangePassword(newPassword: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post("/changepswd", toForm({ newPassword })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Info(userId: string): Promise<ICommandResult<PublicUserInfo>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/info/${userId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async PreferencesPut(userPreferences: UserPreferences): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.put("/preferences", userPreferences));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async AvailabilityUsername(username: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(
        await this.server.get("/availability/username", {
          params: { name: username },
        })
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async AvailabilityEmail(email: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(
        await this.server.get("/availability/email", {
          params: { email },
        })
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async DispatchGet(): Promise<ICommandResult<GlobalDispatchClient[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/dispatch"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async DispatchKick(clientId: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/dispatch/kick/${clientId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async RegisterUser(username: string, email: string, password: string) {
    try {
      return CommandResult.FromResponse(await this.server.post(`/`, toForm({ username, password, email })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  PictureUrl(userId: string) {
    const code = authcode();
    return `${Server.url}/user/pfp/${userId}${code}${code ? "&" : "?"}${Date.now()}`;
  }

  LoginBgUrl(userId: string) {
    const code = authcode();
    return `${Server.url}/user/loginbg/${userId}${code}${code ? "&" : "?"}${Date.now()}`;
  }

  async CreatePswdResetRequest(username: string): Promise<ICommandResult<PswdResetCreateResult>> {
    try {
      return CommandResult.FromResponse(await this.server.post("/pswdreset", toForm({ username })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async VerifyPswdResetRequest(userId: string, code: string): Promise<ICommandResult<PswdResetVerificationResult>> {
    try {
      return CommandResult.FromResponse(await this.server.post("/pswdreset/verify", toForm({ userId, code })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async ConsumePswdResetRequest(
    userId: string,
    resetToken: string,
    newPassword: string
  ): Promise<ICommandResult<PswdResetConsumptionResult>> {
    try {
      return CommandResult.FromResponse(
        await this.server.post("/pswdreset/consume", toForm({ userId, resetToken, newPassword }))
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
