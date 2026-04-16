import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import { Server } from "$ts/env";
import { CommandResult } from "$ts/result";
import { authcode } from "$ts/util";
import { toForm } from "$ts/util/form";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import { ServerConnector } from ".";

export class UserConnector extends ServerConnector implements IUserConnector {
  override prefix = "/user";

  async Self(): Promise<CommandResult<UserInfo>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/self"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Rename(newUsername: string): Promise<CommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.patch("/rename", toForm({ newUsername })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async ChangePassword(newPassword: string): Promise<CommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.patch("/changepswd", toForm({ newPassword })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Info(userId: string): Promise<CommandResult<PublicUserInfo>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/info/${userId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async PreferencesPut(userPreferences: UserPreferences): Promise<CommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.put("/preferences", userPreferences));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async AvailabilityUsername(username: string): Promise<CommandResult> {
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

  async AvailabilityEmail(email: string): Promise<CommandResult> {
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

  async DispatchGet(): Promise<CommandResult<GlobalDispatchClient[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/dispatch"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async DispatchKick(clientId: string): Promise<CommandResult> {
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
}
