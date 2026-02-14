import type { IElevationUserContext, IUserDaemon } from "$interfaces/daemon";
import { Env, SysDispatch } from "$ts/env";
import { UUID } from "$ts/util/uuid";
import type { ElevationData } from "$types/elevation";
import { Daemon } from "..";
import { UserContext } from "../context";

export class ElevationUserContext extends UserContext implements IElevationUserContext {
  public _elevating = false;
  private elevations: Record<string, ElevationData> = {};

  constructor(id: string, daemon: IUserDaemon) {
    super(id, daemon);
  }

  async elevate(id: string) {
    if (this._disposed) return false;

    this.Log(`Elevating for "${id}"`);

    const data = this.elevations[id];

    if (!data) return false;

    return await this.manuallyElevate(data);
  }

  async manuallyElevate(data: ElevationData) {
    if (this._disposed) return false;

    this.Log(`Manually elevating "${data.what}"`);

    const id = UUID();
    const key = UUID();
    const shellPid = Env.get("shell_pid");

    if (Daemon!.preferences().security.disabled) return true;
    if (Daemon!.preferences().disabledApps.includes("SecureContext")) return true;

    this._elevating = true;
    Daemon!.renderer?.setAppRendererClasses(Daemon!.preferences());

    if (shellPid) {
      const proc = await Daemon!.spawn?._spawnOverlay("SecureContext", undefined, +shellPid, id, key, data);

      if (!proc) return false;
    } else {
      const proc = await Daemon!.spawn?._spawnApp("SecureContext", undefined, this.pid, id, key, data);

      if (!proc) return false;
    }

    return new Promise((r) => {
      SysDispatch.subscribe("elevation-approve", (data) => {
        if (data[0] === id && data[1] === key) {
          r(true);
          this._elevating = false;
          Daemon!.renderer?.setAppRendererClasses(Daemon!.preferences());
        }
      });

      SysDispatch.subscribe("elevation-deny", (data) => {
        if (data[0] === id && data[1] === key) {
          r(false);
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
