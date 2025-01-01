import type { WaveKernel } from "..";
import { Log } from "../logging";

export class KernelModule {
  private kernel: WaveKernel;
  public id: string;

  constructor(kernel: WaveKernel, id: string) {
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
