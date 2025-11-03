import { __Console__ } from "$ts/console";
import { MemoryFilesystemDrive } from "$ts/drives/temp";
import { ArcOSVersion, getKMod, Kernel, KernelStack } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { States } from "$ts/state/store";
import { textToBlob } from "$ts/util/convert";
import type { ServerManagerType } from "$types/kernel";
import { Process } from "../process/instance";
import { StateHandler } from "../state";

export class InitProcess extends Process {
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

    await KernelStack().startRenderer(this.pid);

    const server = getKMod<ServerManagerType>("server");
    const connected = server.connected;
    const state = await KernelStack().spawn<StateHandler>(StateHandler, undefined, "SYSTEM", this.pid, "ArcOS", States);
    const kernel = Kernel();

    if (!state) throw new Error("State handler failed to spawn");

    kernel!.state = state;

    const MobileBlockApp = (await import("$apps/components/mobileblock/MobileBlock")).default;
    await this.handler.spawn(MobileBlockApp.assets.runtime, undefined, "SYSTEM", this.pid, {
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
      await this.fs.mountDrive("temp", MemoryFilesystemDrive, "T");
      await this.fs.createDirectory("T:/Apps");
      await this.fs.createDirectory("T:/Meta");
      await this.fs.writeFile("T:/Meta/ARCOS_BUILD", textToBlob(ArcBuild()));
      await this.fs.writeFile("T:/Meta/ARCOS_MODE", textToBlob(ArcMode()));
      await this.fs.writeFile("T:/Meta/ARCOS_VERSION", textToBlob(ArcOSVersion));
    } catch {}
  }

  nightly() {
    document.title = `NIGHTLY - ArcOS v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
    this.env.set(`NIGHTLY_WHODIS_${ArcBuild()}`, 1);
  }
}
