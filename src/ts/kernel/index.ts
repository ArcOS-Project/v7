import {
  LogLevel,
  ShortLogLevelCaptions,
  type LogItem,
} from "../../types/logging";
import { KernelModule } from "./module";

let CurrentKernel: WaveKernel | undefined = undefined;

export class WaveKernel {
  Logs: LogItem[] = [];
  modules: string[] = [];
  startMs: number;

  public static get() {
    return CurrentKernel;
  }

  constructor() {
    if (CurrentKernel) throw new Error("Attempted to reinitialize the kernel");

    CurrentKernel = this;
    this.startMs = Date.now();
  }

  async _init() {}

  getModule(id: string): KernelModule | undefined {
    const module = (this as any)[id];

    return this.modules.includes(id) &&
      module &&
      module instanceof KernelModule &&
      module.id === id
      ? module
      : undefined;
  }

  private async _kernelModules() {}

  public Log(source: string, message: string, level = LogLevel.info) {
    const timestamp = Date.now();

    this.Logs.push({ timestamp, source, message, level });

    console.log(
      `[${timestamp - this.startMs}] ${
        ShortLogLevelCaptions[level]
      } ${source}: ${message}`
    );
  }
}
