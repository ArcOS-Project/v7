import { RoturExtension } from "$ts/rotur";
import { ServerManager } from "$ts/server";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class BootScreenRuntime extends AppProcess {
  public progress = Store<boolean>(false);
  public status = Store<string>("");
  public connected = Store<boolean>(false);
  private rotur: RoturExtension;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.rotur = this.kernel.getModule<RoturExtension>("rotur");
  }

  async begin() {
    this.connected.set(ServerManager.isConnected());

    if (!this.connected()) {
      this.kernel.state?.loadState("serverdown");

      return;
    }

    this.status.set("Press a key or click to start");

    document.addEventListener("click", () => this.startBooting(), {
      once: true,
    });

    document.addEventListener("keydown", () => this.startBooting(), {
      once: true,
    });
  }

  async startBooting() {
    if (this.progress()) return;

    await this.rotur.connectToServer("arc", "arcOS", "7");

    this.status.set("Waiting for Rotur...");
    this.progress.set(true);

    const connected = await new Promise((resolve) => {
      this.globalDispatch.subscribe("rotur-connected", () => resolve(true));
      this.globalDispatch.subscribe("rotur-error", () => resolve(false));
    });

    // if (!connected) {
    //   // this.kernel.state?.loadState("serverdown", { rotur: true });

    //   return;
    // }

    this.status.set(connected ? "Connected!" : "Rotur is offline, skipping...");

    await Sleep(2000);

    this.kernel.state?.loadState("login");
  }
}
