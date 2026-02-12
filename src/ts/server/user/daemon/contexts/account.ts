import type { IAccountUserContext, IUserDaemon } from "$interfaces/daemon";
import DeleteUser from "$lib/Daemon/DeleteUser.svelte";
import { MessageBox } from "$ts/dialog";
import { Env, Server, SysDispatch } from "$ts/env";
import { toForm } from "$ts/form";
import { Backend } from "$ts/server/axios";
import { authcode } from "$ts/util";
import { ElevationLevel } from "$types/elevation";
import { LogLevel } from "$types/logging";
import type { PublicUserInfo, UserInfo } from "$types/user";
import Cookies from "js-cookie";
import { Daemon } from "..";
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

  async getUserInfo(): Promise<UserInfo | undefined> {
    if (this._disposed) return;

    if (this.initialized) {
      this.Log(`Tried to get user info while initialization is already complete`, LogLevel.warning);

      return;
    }

    this.Log("Getting user information");

    try {
      const response = this.userInfo._id
        ? {
            status: 200,
            data: this.userInfo,
          }
        : await Backend.get(`/user/self`, {
            headers: { Authorization: `Bearer ${Daemon!.token}` },
          });

      const data = response.status === 200 ? (response.data as UserInfo) : undefined;

      if (!data) return undefined;

      Daemon!.preferencesCtx?.preferences.set(data.preferences);

      Daemon!?.preferencesCtx?.sanitizeUserPreferences();

      this.initialized = true;
      this.userInfo = data;
      Env.set("currentuser", this.username);
      if (data.admin) Env.set("administrator", data.admin);

      return response.status === 200 ? (response.data as UserInfo) : undefined;
    } catch {
      await Daemon!.killSelf();

      return undefined;
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

    try {
      const response = await Backend.patch("/user/rename", toForm({ newUsername }), {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      if (response.status !== 200) return false;

      this.username = newUsername;
      SysDispatch.dispatch("change-username", [newUsername]);

      Cookies.set("arcUsername", newUsername, {
        expires: 14,
        domain: import.meta.env.DEV ? "localhost" : "izk-arcos.nl",
      });

      return true;
    } catch {
      return false;
    }
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

    try {
      const response = await Backend.post("/user/changepswd", toForm({ newPassword }), {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      if (response.status !== 200) return false;

      return true;
    } catch {
      return false;
    }
  }

  async getPublicUserInfoOf(userId: string): Promise<PublicUserInfo | undefined> {
    try {
      const response = await Backend.get(`/user/info/${userId}`, { headers: { Authorization: `Bearer ${Daemon!.token}` } });
      const information = response.data as PublicUserInfo;

      information.profilePicture = `${Server.url}/user/pfp/${userId}${authcode()}`;

      return information;
    } catch {
      return undefined;
    }
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
              Daemon!?.power?.logoff();
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
