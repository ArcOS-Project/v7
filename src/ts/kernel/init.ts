import type { IServerManager } from "$interfaces/kernel";
import type { IStateHandler } from "$interfaces/state";
import { __Console__ } from "$ts/console";
import { ArcOSVersion, Env, Fs, getKMod, Kernel, SetCurrentStateHandler, Stack } from "$ts/env";
import { MemoryFilesystemDrive } from "$ts/kernel/mods/fs/drives/temp";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { States } from "$ts/state/store";
import { textToBlob } from "$ts/util/convert";
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

    const server = getKMod<IServerManager>("server");
    const connected = server.connected;
    const state = await Stack.spawn<IStateHandler>(StateHandler, undefined, "SYSTEM", this.pid, "ArcOS", States);
    const kernel = Kernel;

    if (!state) throw new Error("State handler failed to spawn");

    kernel!.state = state;

    SetCurrentStateHandler(state);

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
