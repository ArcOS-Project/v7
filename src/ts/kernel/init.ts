import { __Console__ } from "$ts/console";
import { MemoryFilesystemDrive } from "$ts/drives/temp";
import { ArcOSVersion, Env, Fs, getKMod, Kernel, SetCurrentStateHandler, SetKernelExports, Stack } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { States } from "$ts/state/store";
import { textToBlob } from "$ts/util/convert";
import type { ServerManagerType } from "$types/kernel";
import { Process } from "../process/instance";
import { StateHandler } from "../state";

export class InitProcess extends Process {
  public _criticalProcess: boolean = true;
  //#region LIFECYCLE
  constructor(pid: number, parentPid = undefined) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
  }

  async stop() {
    throw new Error("Attempted to kill init!");
  }

  async jumpstart() {
    __Console__.time("** Init jumpstart");
    this.Log("Jumpstarting init process!");

    await Stack.startRenderer(this.pid);

    const server = getKMod<ServerManagerType>("server");
    const connected = server.connected;
    const state = await Stack.spawn<StateHandler>(StateHandler, undefined, "SYSTEM", this.pid, "ArcOS", States);
    const kernel = Kernel;

    if (!state) throw new Error("State handler failed to spawn");

    kernel!.state = state;

    SetCurrentStateHandler(state);

    const MobileBlockApp = (await import("$apps/components/mobileblock/MobileBlock")).default;
    await Stack.spawn(MobileBlockApp.assets.runtime, undefined, "SYSTEM", this.pid, {
      data: MobileBlockApp,
      desktop: undefined,
      id: MobileBlockApp.id,
    });

    await this.initializeTempFs();
    await kernel!.state?.loadState(connected ? "boot" : "serverdown", {}, true);
    __Console__.timeEnd("** Init jumpstart");
    this.name = "InitProcess";

    if (ArcMode() === "nightly") this.nightly();

    this.setSource(__SOURCE__);
  }

  //#endregion

  async initializeTempFs() {
    this.Log("Initializing TEMP");

    try {
      await Fs.mountDrive("temp", MemoryFilesystemDrive, "T");
      await Fs.createDirectory("T:/Apps");
      await Fs.createDirectory("T:/Meta");
      await Fs.writeFile("T:/Meta/ARCOS_BUILD", textToBlob(ArcBuild()));
      await Fs.writeFile("T:/Meta/ARCOS_MODE", textToBlob(ArcMode()));
      await Fs.writeFile("T:/Meta/ARCOS_VERSION", textToBlob(ArcOSVersion));
    } catch {}
  }

  nightly() {
    document.title = `NIGHTLY - ArcOS v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
    Env.set(`NIGHTLY_WHODIS_${ArcBuild()}`, 1);
  }
}
