import type { IStateHandler } from "$interfaces/IStateHandler";
import { __Console__ } from "$ts/console";
import { ArcOSVersion, Env, Fs, Kernel, Server, SetCurrentStateHandler, Stack } from "$ts/env";
import { TemporaryFilesystemDrive } from "$ts/kernel/mods/fs/drives/temp";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { States } from "$ts/state/store";
import { textToBlob } from "$ts/util/convert";
import { UAParser } from "ua-parser-js";
import { StateHandler } from "../state";
import { Process } from "./mods/stack/process/instance";

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
    this.name = "InitProcess";
    __Console__.time("** Init jumpstart");
    this.Log("Jumpstarting init process!");
    this.parseBrowserInfo();

    await Stack.startRenderer(this.pid);

    const state = await Stack.spawn<IStateHandler>(StateHandler, undefined, "SYSTEM", this.pid, "ArcOS", States);
    if (!state) throw new Error("State handler failed to spawn");

    SetCurrentStateHandler(state);
    Kernel.state = state;

    await this.initializeTempFs();
    await state.loadState(Server.connected ? "boot" : "serverdown", {}, true);

    __Console__.timeEnd("** Init jumpstart");

    if (ArcMode() === "nightly") this.nightly();
  }

  //#endregion

  async initializeTempFs() {
    this.Log("Initializing TEMP");

    try {
      await Fs.mountDrive("temp", TemporaryFilesystemDrive, "T");
      await Fs.createDirectory("T:/Apps");
      await Fs.createDirectory("T:/Meta");
      await Fs.writeFile("T:/Meta/ARCOS_BUILD", textToBlob(ArcBuild()));
      await Fs.writeFile("T:/Meta/ARCOS_MODE", textToBlob(ArcMode()));
      await Fs.writeFile("T:/Meta/ARCOS_VERSION", textToBlob(ArcOSVersion));
      for (const proxy of Fs.loadedProxies) {
        await Fs.createDirectory(`T:/::{${proxy.uuid}}`);
      }
    } catch {}
  }

  /**
   * @deprecated Nightly is no longer supported
   * @todo Remove from codebase
   */
  nightly() {
    document.title = `NIGHTLY - ArcOS v${ArcOSVersion}-${ArcMode()}_${ArcBuild()}`;
    Env.set(`NIGHTLY_WHODIS_${ArcBuild()}`, 1);
  }

  parseBrowserInfo() {
    const ua = UAParser(navigator.userAgent);

    document.body.classList.add(
      `browser-${ua.browser?.name ?? "unknown"}`.toLowerCase().replaceAll(/[ _\+()]/g, "-"),
      `host-${ua.os?.name ?? "unknown"}`.toLowerCase().replaceAll(/[ _\+()]/g, "-")
    );
  }
}
