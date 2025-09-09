import type { StateHandler } from "$ts/state";
import { WaveKernel } from "..";
import { LogLevel } from "../../../types/logging";
import { Log } from "../logging";

export class KernelModule {
  protected readonly IS_KMOD = true;
  public id: string;
  protected state?: StateHandler;

  constructor(kernel: WaveKernel, id: string) {
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

export function getKMod<T = KernelModule>(id: string, dontCrash = false): T {
  const kernel = WaveKernel.get();

  return kernel.getModule<T>(id, dontCrash) as T;
}
