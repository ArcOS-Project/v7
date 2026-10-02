import type { IAccountUserContext } from "$interfaces/contexts/IAccountUserContext";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import DeleteUser from "$lib/Daemon/DeleteUser.svelte";
import { Daemon, Env, SysDispatch } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import { CommandResult } from "$ts/result";
import { MessageBox } from "$ts/util/dialog";
import { ElevationLevel } from "$types/system/elevation";
import type { PublicUserInfo, UserInfo } from "$types/user";
import Cookies from "js-cookie";
import { UserContext } from "../context";

export class AccountUserContext extends UserContext implements IAccountUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async discontinueToken(token = Daemon!.token): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");

    this.Log(`Discontinuing token`);

    try {
      return CommandResult.FromResponse(await Backend.post(`/logout`, {}, { headers: { Authorization: `Bearer ${token}` } }));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async getUserInfo(): Promise<ICommandResult<UserInfo>> {
    if (this._disposed) return CommandResult.Error("Disposed");

    if (this.initialized) {
      return CommandResult.Error(`Tried to get user info while initialization is already complete`);
    }

    this.Log("Getting user information");

    try {
      const response = this.userInfo._id
        ? CommandResult.Ok(this.userInfo)
        : await Daemon.GetConnector<IUserConnector>("UserConnector").Self();
      if (!response.success) return response;

      const data = response.result as UserInfo;

      Daemon!.preferencesCtx?.preferences.set(data.preferences);
      Daemon!.preferencesCtx?.sanitizeUserPreferences();

      this.initialized = true;
      this.userInfo = data;
      Env.set("currentuser", this.username);
      if (data.admin) Env.set("administrator", data.admin);

      return response;
    } catch (e) {
      await Daemon!.killSelf();
      return CommandResult.AxiosError(e, "Unknown error while obtaining user information. Please try again.");
    }
  }

  async changeUsername(newUsername: string): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");

    this.Log(`Changing username to "${newUsername}"`);

    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to change your username:",
      image: "AccountIcon",
      title: "Change username",
      description: `To ${newUsername}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return CommandResult.Error("Elevation is required but wasn't provided.");

    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").Rename(newUsername);
    if (!result.success) return result;

    this.username = newUsername;
    SysDispatch.dispatch("change-username", [newUsername]);
    Cookies.set("arcUsername", newUsername, {
      expires: 14,
      domain: import.meta.env.DEV ? "localhost" : "arcweb.nl",
    });

    return CommandResult.Ok();
  }

  async changePassword(newPassword: string): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");

    this.Log(`Changing password to [REDACTED]`);

    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to change your password:",
      image: "PasswordIcon",
      title: "Change password",
      description: `of ${this.username}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return CommandResult.Error("Elevation is required but wasn't provided");

    return await Daemon.GetConnector<IUserConnector>("UserConnector").ChangePassword(newPassword);
  }

  async getPublicUserInfoOf(userId: string): Promise<ICommandResult<PublicUserInfo>> {
    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").Info(userId);
    if (!result.success) return result;

    const information = result.result as PublicUserInfo;
    information.profilePicture = Daemon.GetConnector<IUserConnector>("UserConnector").PictureUrl(userId);

    return result;
  }

  async deleteAccount() {
    MessageBox(
      {
        title: "Delete ArcOS Account",
        content: DeleteUser,
        image: "TrashIcon",
        buttons: [
          {
            caption: "Back to safety",
            action: () => {},
          },
          {
            caption: "Delete account",
            action: async () => {
              await Backend.delete(`/user`, { headers: { Authorization: `Bearer ${Daemon!.token}` } });
              Daemon!.power?.logoff();
            },
            suggested: true,
          },
        ],
        sound: "arcos.dialog.warning",
      },
      +Env.get("shell_pid"),
      true
    );
  }
}
