import type { IElevationUserContext } from "$interfaces/contexts/IElevationUserContext";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import { Daemon, Env, SysDispatch } from "$ts/env";
import { CommandResult } from "$ts/result";
import { UUID } from "$ts/util/uuid";
import type { ElevationData } from "$types/system/elevation";
import { UserContext } from "../context";

export class ElevationUserContext extends UserContext implements IElevationUserContext {
  public _elevating = false;
  private elevations: Record<string, ElevationData> = {};

  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async elevate(id: string): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");

    this.Log(`Elevating for "${id}"`);

    const data = this.elevations[id];
    if (!data) return CommandResult.Error("Elevation doesn't exist");

    return await this.manuallyElevate(data);
  }

  async manuallyElevate(data: ElevationData): Promise<ICommandResult> {
    if (this._disposed) return CommandResult.Error("Disposed.");

    this.Log(`Manually elevating "${data.what}"`);

    const id = UUID();
    const key = UUID();
    const shellPid = Env.get("shell_pid");

    if (Daemon!.preferences().security.disabled) return CommandResult.Ok();
    if (Daemon!.preferences().disabledApps.includes("SecureContext")) return CommandResult.Ok();

    this._elevating = true;
    Daemon!.renderer?.setAppRendererClasses(Daemon!.preferences());

    const proc = await Daemon!.spawn?.spawnApp(
      "SecureContext",
      shellPid ? +shellPid : this.pid,
      {
        noWorkspace: true,
        asOverlay: !!shellPid,
      },
      id,
      key,
      data
    );

    if (!proc) return CommandResult.Error("The SecureContextRuntime failed to spawn");

    return new Promise((r) => {
      SysDispatch.subscribe("elevation-approve", (data) => {
        if (data[0] === id && data[1] === key) {
          r(CommandResult.Ok());
          this._elevating = false;
          Daemon!.renderer?.setAppRendererClasses(Daemon!.preferences());
        }
      });

      SysDispatch.subscribe("elevation-deny", (data) => {
        if (data[0] === id && data[1] === key) {
          r(CommandResult.Error("The elevation request was denied"));
          this._elevating = false;
          Daemon!.renderer?.setAppRendererClasses(Daemon!.preferences());
        }
      });
    });
  }

  loadElevation(id: string, data: ElevationData) {
    if (this._disposed) return;

    this.Log(`Loading elevation "${id}"`);

    this.elevations[id] = data;
  }
}
