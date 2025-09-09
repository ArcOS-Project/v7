import { AppProcess } from "$ts/apps/process";
import type { ApplicationStorage } from "$ts/apps/storage";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData, AppStorage } from "$types/app";

export class AcceleratorOverviewRuntime extends AppProcess {
  // Very gross array containing keys known to the accelerator handlers
  KnownAcceleratorKeys = [
    "alt",
    "shift",
    "ctrl",
    "esc",
    "up",
    "down",
    "left",
    "right",
    "space",
    "del",
    ..."0123456789".split(""),
    ..."abcdefghijklmnopqrstuvwxyz".split(""),
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12",
    ..."/[]".split(""),
    "enter",
  ];

  store = Store<[string, [string[], string][]][]>(); // Record<appId, Record<Accelerator, Description>> (ugly, I know)
  apps = Store<AppStorage>();

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.acceleratorStore.push({
      key: "escape",
      action: () => {
        this.closeWindow();
      },
    });
  }

  async render() {
    if (await this.closeIfSecondInstance()) return;

    const apps = await this.userDaemon?.serviceHost?.getService<ApplicationStorage>("AppStorage")?.get();

    if (!apps) throw new Error("ERR_NO_DAEMON"); // Should never happen

    const result: [string, [string[], string][]][] = []; // 3D array? 4D? idk

    for (const app of apps) {
      if (!app.acceleratorDescriptions) continue;

      const strings = Object.keys(app.acceleratorDescriptions);
      const shortcuts: [string[], string][] = []; // I don't even know what I'm looking at

      for (const string of strings) {
        shortcuts.push([this.splitAcceleratorString(string), app.acceleratorDescriptions[string]]);
      }

      result.push([app.metadata.name, shortcuts]);
    }

    this.apps.set(apps);
    this.store.set(result);
  }

  //#endregion

  splitAcceleratorString(accelerator: string): string[] {
    const result = [];
    const split = accelerator.split("+");

    for (let i = 0; i < split.length; i++) {
      const segment = split[i];

      if (!this.KnownAcceleratorKeys.includes(segment.toLowerCase())) continue;

      result.push(segment);
      if (i + 1 != split.length) result.push("+"); // Ugly way to concatenate
    }

    return result;
  }
}
