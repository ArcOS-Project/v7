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
    this.Log("Jumpstarting init process!");

    await this.handler.startRenderer(this.pid);
    const connected = ServerManager.isConnected();

    const state = await this.handler.spawn<StateHandler>(StateHandler, undefined, this.pid, "ArcOS", States);

    const kernel = WaveKernel.get();

    if (!state) throw new Error("State handler failed to spawn");

    kernel.state = state;
    await kernel.state?.loadState(connected ? "boot" : "serverdown", {}, true);
  }
}
