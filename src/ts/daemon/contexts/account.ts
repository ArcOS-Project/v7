import type { IAccountUserContext } from "$interfaces/contexts/IAccountUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IUserConnector } from "$interfaces/modules/server/IUserConnector";
import DeleteUser from "$lib/Daemon/DeleteUser.svelte";
import { Env, SysDispatch } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import { CommandResult } from "$ts/result";
import { MessageBox } from "$ts/util/dialog";
import { ElevationLevel } from "$types/elevation";
import type { PublicUserInfo, UserInfo } from "$types/user";
import Cookies from "js-cookie";
import { Daemon } from "$ts/env";
import { UserContext } from "../context";

export class AccountUserContext extends UserContext implements IAccountUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async discontinueToken(token = Daemon!.token) {
    if (this._disposed) return;

    this.Log(`Discontinuing token`);

    try {
      const response = await Backend.post(`/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });

      return response.status === 200;
    } catch {
      return false;
    }
  }

  async getUserInfo(): Promise<CommandResult<UserInfo>> {
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

  async changeUsername(newUsername: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Changing username to "${newUsername}"`);

    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to change your username:",
      image: "AccountIcon",
      title: "Change username",
      description: `To ${newUsername}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").Rename(newUsername);
    if (!result.success) return false;

    this.username = newUsername;
    SysDispatch.dispatch("change-username", [newUsername]);
    Cookies.set("arcUsername", newUsername, {
      expires: 14,
      domain: import.meta.env.DEV ? "localhost" : "izk-arcos.nl",
    });

    return true;
  }

  async changePassword(newPassword: string): Promise<boolean> {
    if (this._disposed) return false;

    this.Log(`Changing password to [REDACTED]`);

    const elevated = await Daemon!.elevation?.manuallyElevate({
      what: "ArcOS needs your permission to change your password:",
      image: "PasswordIcon",
      title: "Change password",
      description: `of ${this.username}`,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").ChangePassword(newPassword);
    if (!result.success) return false;

    return true;
  }

  async getPublicUserInfoOf(userId: string): Promise<PublicUserInfo | undefined> {
    const result = await Daemon.GetConnector<IUserConnector>("UserConnector").Info(userId);
    if (!result.success) return undefined;

    const information = result.result as PublicUserInfo;
    information.profilePicture = Daemon.GetConnector<IUserConnector>("UserConnector").PictureUrl(userId);

    return information;
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
