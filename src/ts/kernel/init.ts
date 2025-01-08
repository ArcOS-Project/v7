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
    this.Log("Jumpstart");

    const state = await this.handler.spawn<StateHandler>(
      StateHandler,
      this.pid,
      "ArcOS",
      States
    );
    const kernel = WaveKernel.get();

    if (!state) throw new Error("State handler failed to spawn");

    kernel.state = state;
    kernel.state?.loadState("boot");
  }
}
