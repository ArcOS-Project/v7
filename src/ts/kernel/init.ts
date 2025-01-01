import { WaveKernel } from ".";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";

export class InitProcess extends Process {
  constructor(handler: ProcessHandler, pid: number, parentPid = undefined) {
    super(handler, pid, parentPid);
  }

  async stop() {
    throw new Error("Attempted to kill init!");
  }

  jumpstart() {
    const kernel = WaveKernel.get();

    const state = kernel.getModule("state");
  }
}
