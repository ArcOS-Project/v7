import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import type { FilesystemSupplier } from "./supplier";

export class Filesystem extends KernelModule {
  private suppliers: Record<string, FilesystemSupplier> = {};

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {}

  async loadSupplier(
    id: string,
    supplier: typeof FilesystemSupplier,
    ...args: any[]
  ) {
    if (this.suppliers[id]) return false;

    const instance = new supplier(this.kernel, ...args);

    this.suppliers[id] = instance;

    await instance._init();

    return true;
  }

  async unloadSupplier(id: string) {
    if (!this.suppliers[id]) return false;

    await this.suppliers[id]._windDown();

    delete this.suppliers[id];

    return true;
  }
}
