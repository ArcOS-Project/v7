import { GlobalDispatcher } from "$ts/dispatch";
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
  private globalDispatch: GlobalDispatcher;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.globalDispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
  }

  async begin() {
    this.connected.set(ServerManager.isConnected());

    if (!this.connected()) {
      this.status.set("We're offline! Please come back later.");

      return;
    }

    this.status.set("Waiting for Rotur...");
    this.progress.set(true);

    await new Promise((r) =>
      this.globalDispatch.subscribe("rotur-connected", () => r(true))
    );

    this.progress.set(false);
    this.status.set("Connected!");
    await Sleep(1000);
    this.status.set("&nbsp;");
    await Sleep(500);
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

    this.status.set("&nbsp;");
    this.progress.set(true);

    await Sleep(2000);

    this.kernel.state?.loadState("login");
  }
}
