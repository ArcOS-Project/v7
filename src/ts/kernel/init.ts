import { ArcOSVersion } from "$ts/env";
import { textToBlob } from "$ts/fs/convert";
import { MemoryFilesystemDrive } from "$ts/fs/drives/temp";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { ServerManager } from "$ts/server";
import { States } from "$ts/state/store";
import { WaveKernel } from ".";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { StateHandler } from "../state";

export class InitProcess extends Process {
  constructor(handler: ProcessHandler, pid: number, parentPid = undefined) {
    super(handler, pid, parentPid);
  }

  async stop() {
    throw new Error("Attempted to kill init!");
  }

  async jumpstart() {
    console.time("** Init jumpstart");
    this.Log("Jumpstarting init process!");

    await this.handler.startRenderer(this.pid);
    const connected = ServerManager.isConnected();

    const state = await this.handler.spawn<StateHandler>(StateHandler, undefined, this.pid, "ArcOS", States);

    const kernel = WaveKernel.get();

    if (!state) throw new Error("State handler failed to spawn");

    kernel.state = state;

    await this.initializeTempFs();

    await kernel.state?.loadState(connected ? "boot" : "serverdown", {}, true);
    console.timeEnd("** Init jumpstart");
  }

  async initializeTempFs() {
    this.Log("Initializing TEMP");

    await this.fs.mountDrive("temp", MemoryFilesystemDrive, "T");
    await this.fs.createDirectory("T:/Apps");
    await this.fs.createDirectory("T:/Meta");
    await this.fs.writeFile("T:/Meta/ARCOS_BUILD", textToBlob(ArcBuild()));
    await this.fs.writeFile("T:/Meta/ARCOS_MODE", textToBlob(ArcMode()));
    await this.fs.writeFile("T:/Meta/ARCOS_VERSION", textToBlob(ArcOSVersion));
  }
}
