import { UUID } from "$ts/uuid";
import type { ElevationData } from "$types/elevation";
import type { UserDaemon } from "..";
import { UserContext } from "../context";

export class ElevationUserContext extends UserContext {
  public _elevating = false;
  private elevations: Record<string, ElevationData> = {};

  constructor(id: string, daemon: UserDaemon) {
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
    const shellPid = this.env.get("shell_pid");

    if (this.daemon.preferences().security.disabled) return true;
    if (this.daemon.preferences().disabledApps.includes("SecureContext")) return true;

    this._elevating = true;
    this.daemon.renderer?.setAppRendererClasses(this.daemon.preferences());

    if (shellPid) {
      const proc = await this.daemon.spawn?._spawnOverlay("SecureContext", undefined, +shellPid, id, key, data);

      if (!proc) return false;
    } else {
      const proc = await this.daemon.spawn?._spawnApp("SecureContext", undefined, this.pid, id, key, data);

      if (!proc) return false;
    }

    return new Promise((r) => {
      this.systemDispatch.subscribe("elevation-approve", (data) => {
        if (data[0] === id && data[1] === key) {
          r(true);
          this._elevating = false;
          this.daemon.renderer?.setAppRendererClasses(this.daemon.preferences());
        }
      });

      this.systemDispatch.subscribe("elevation-deny", (data) => {
        if (data[0] === id && data[1] === key) {
          r(false);
          this._elevating = false;
          this.daemon.renderer?.setAppRendererClasses(this.daemon.preferences());
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
