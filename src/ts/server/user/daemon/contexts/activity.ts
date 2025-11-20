import { toForm } from "$ts/form";
import { Backend } from "$ts/server/axios";
import type { LoginActivity } from "$types/activity";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class LoginActivityUserContext extends UserContext {
  constructor(id: string, daemon: UserDaemon) {
    super(id, daemon);
  }

  async getLoginActivity(): Promise<LoginActivity[]> {
    if (this._disposed) return [];

    try {
      const response = await Backend.get("/activity", {
        headers: { Authorization: `Bearer ${this.token}` },
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
        { headers: { Authorization: `Bearer ${this.token}` } }
      );

      return response.status === 200;
    } catch {
      return false;
    }
  }
}
