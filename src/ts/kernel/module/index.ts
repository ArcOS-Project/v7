import { WaveKernel } from "..";
import { LogLevel } from "../../../types/logging";
import { Log } from "../logging";

export class KernelModule {
  protected kernel: WaveKernel;
  public id: string;

  constructor(kernel: WaveKernel, id: string) {
    console.group(`KernelModule::${id}`);

    this.id = id;

    this.Log(`Constructing`);

    if (kernel.getModule(id, true))
      throw new Error(`KernelModule::${id} is already loaded`);

    this.kernel = kernel;
  }

  async _init() {
    /** */
  }

  async __init() {
    this.Log(`Calling _init`);

    await this._init();

    console.groupEnd();
  }

  protected Log(message: string, level = LogLevel.info) {
    const source = `KernelModule::${this.id}`;

    Log(source, message, level);
  }
}
