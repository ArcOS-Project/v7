import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class BootScreenRuntime extends AppProcess {
  public progress = Store<boolean>(false);
  public status = Store<string>("");

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async begin() {
    this.Log("Initializing boot");

    this.status.set("Press a key or click to start");

    document.addEventListener("click", () => this.startBooting(), {
      once: true,
    });

    document.addEventListener("keydown", (e) => this.startBooting(e), {
      once: true,
    });
  }

  async startBooting(e?: KeyboardEvent) {
    if (this._disposed) return;

    this.Log("Beginning boot process");

    if (this.progress()) return;

    this.progress.set(true);

    if (e?.key === "F8") {
      this.status.set("Entering Safe Mode");
      await Sleep(2000);
      this.kernel.state?.loadState("arcterm", { safeMode: true });
    } else if (e?.key.toLowerCase() === "a") {
      this.status.set("Starting ArcTerm");
      this.kernel.state?.loadState("arcterm");
    } else {
      this.status.set("&nbsp;");
      this.kernel.state?.loadState("login");
    }
  }
}
