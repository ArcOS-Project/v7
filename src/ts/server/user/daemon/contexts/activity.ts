import { toForm } from "$ts/form";
import { Backend } from "$ts/server/axios";
import type { LoginActivity } from "$types/activity";
import { Daemon, type UserDaemon } from "..";
import { UserContext } from "../context";

/**
 * RESTRICTED: this class does not have an entry in ProcessWithPermissions,
 * and as such cannot be accessed by third-party applications.
 * 
 * Access is restricted because login activities return the user's token,
 * which we do not want TPAs to obtain.
 */
export class LoginActivityUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async getLoginActivity(): Promise<LoginActivity[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/activity", {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return response.data as LoginActivity[];
    } catch {
      return [];
    }
  }

  async logActivity(action: string) {
    if (this._disposed) return false;

    this.Log(`Broadcasting login activity "${action}" to server`);

    try {
      const response = await Backend.post(
        "/activity",
        toForm({
          userAgent: navigator.userAgent,
          location: JSON.stringify(window.location),
          action,
        }),
        { headers: { Authorization: `Bearer ${Daemon!.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }
}
