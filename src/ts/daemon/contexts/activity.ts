import type { ILoginActivityUserContext } from "$interfaces/contexts/ILoginActivityUserContext";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Daemon } from "$ts/env";
import { Backend } from "$ts/kernel/mods/server/axios";
import { CommandResult } from "$ts/result";
import { toForm } from "$ts/util/form";
import type { LoginActivity } from "$types/user/activity";
import { UserContext } from "../context";

export class LoginActivityUserContext extends UserContext implements ILoginActivityUserContext {
  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async getLoginActivity(): Promise<ICommandResult<LoginActivity[]>> {
    if (this._disposed) return CommandResult.Error("Disposed.");

    try {
      const response = await Backend.get("/activity", {
        headers: { Authorization: `Bearer ${Daemon!.token}` },
      });

      return CommandResult.Ok(response.data as LoginActivity[]);
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async logActivity(action: string) {
    if (this._disposed) return CommandResult.Error("Disposed.");

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

      return CommandResult.FromResponse(response);
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
