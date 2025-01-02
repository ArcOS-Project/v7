import { WaveKernel } from "..";
import { Log } from "../logging";

export class KernelModule {
  private kernel: WaveKernel;
  public id: string;

  constructor(kernel: WaveKernel, id: string) {
    Log(`KernelModule::${id}`, `Constructing`);

    if (kernel.getModule(id, true))
      throw new Error(`KernelModule::${id} is already loaded`);

    this.kernel = kernel;
    this.id = id;
  }

  async _init() {
    /** */
  }

  async __init() {
    Log(`KernelModule::${this.id}`, `Calling _init`);

    await this._init();
  }
}
