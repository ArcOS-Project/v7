import type { ILoginActivityUserContext } from "$interfaces/contexts/ILoginActivityUserContext";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Backend } from "$ts/kernel/mods/server/axios";
import { toForm } from "$ts/util/form";
import type { LoginActivity } from "$types/activity";
import { Daemon } from "$ts/env";
import { UserContext } from "../context";

export class LoginActivityUserContext extends UserContext implements ILoginActivityUserContext {
  constructor(id: string, daemon: IUserDaemon) {
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
