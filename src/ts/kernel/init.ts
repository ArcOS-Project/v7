import { __Console__ } from "$ts/console";
import { ArcOSVersion, getKMod, Kernel } from "$ts/env";
import { textToBlob } from "$ts/fs/convert";
import { MemoryFilesystemDrive } from "$ts/fs/drives/temp";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { KernelStack } from "$ts/process/handler";
import { States } from "$ts/state/store";
import type { ServerManagerType } from "$types/kernel";
import { Process } from "../process/instance";
import { StateHandler } from "../state";

export class InitProcess extends Process {
  //#region LIFECYCLE
  constructor(pid: number, parentPid = undefined) {
    super(pid, parentPid);
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

    await this.initializeTempFs();
    await kernel!.state?.loadState(connected ? "boot" : "serverdown", {}, true);
    __Console__.timeEnd("** Init jumpstart");
    this.name = "InitProcess";

    if (ArcMode() === "nightly") this.nightly();
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
