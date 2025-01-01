import type { WaveKernel } from "../kernel";
import { KernelModule } from "../kernel/module";

export class ProcessHandler extends KernelModule {
  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {}
}
