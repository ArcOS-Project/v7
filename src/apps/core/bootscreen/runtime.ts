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

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);
  }

  async begin() {
    this.Log("Initializing boot");

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
    this.Log("Beginning boot process");

    if (this.progress()) return;

    this.status.set("&nbsp;");

    this.progress.set(true);

    await Sleep(2000);

    this.kernel.state?.loadState("login");
  }
}
