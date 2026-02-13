import type { IWaveKernel } from "$interfaces/kernel";
import type { IStateHandler } from "$interfaces/state";
import { LogLevel } from "../../../types/logging";
import { Log } from "../../logging";

export class KernelModule {
  protected readonly IS_KMOD = true;
  public id: string;
  protected state?: IStateHandler;

  constructor(kernel: IWaveKernel, id: string) {
    this.id = id;

    this.Log(`Constructing`);

    if (kernel.getModule(id, true)) throw new Error(`KernelModule::${id} is already loaded`);
  }

  async _init() {
    /** */
  }

  async __init() {
    this.Log(`Calling _init`);

    await this._init();
  }

  protected Log(message: string, level = LogLevel.info) {
    const source = `KernelModule::${this.id}`;

    Log(source, message, level);
  }

  isKmod() {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
  }
}
