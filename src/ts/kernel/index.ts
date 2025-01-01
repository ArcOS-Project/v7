import {
  LogLevel,
  ShortLogLevelCaptions,
  type LogItem,
} from "../../types/logging";
import { ProcessHandler } from "../process/handler";
import { InitProcess } from "./init";
import { KernelModule } from "./module";
import { KernelModules } from "./module/store";

let CurrentKernel: WaveKernel | undefined = undefined;

export class WaveKernel {
  private modules: string[] = [];
  private PANICKED = false;
  public Logs: LogItem[] = [];
  public startMs: number;
  public init: InitProcess | undefined;
  public params = new URLSearchParams();

  public static get(): WaveKernel {
    if (!CurrentKernel)
      throw new Error("Tried to get kernel while it doesn't exist yet");

    return CurrentKernel;
  }

  public static isPanicked(): boolean {
    return this.get().PANICKED;
  }

  constructor() {
    if (CurrentKernel) throw new Error("Attempted to reinitialize the kernel");

    CurrentKernel = this;
    this.startMs = Date.now();
  }

  async _init() {
    this.Log(`KERNEL`, `Initialized Core Modules`);

    await this._kernelModules();

    const stack = this.getModule<ProcessHandler>("stack");

    this.init = await stack.spawn<InitProcess>(InitProcess);
  }

  getModule<T = KernelModule>(id: string): T {
    const mod = (this as any)[id];
    const result =
      this.modules.includes(id) &&
      mod &&
      mod instanceof KernelModule &&
      mod.id === id
        ? (mod as T)
        : undefined;

    if (!result) throw new Error(`No such kernel module ${id}`);

    return result;
  }

  private async _kernelModules() {
    for (const [id, mod] of Object.entries(KernelModules)) {
      (this as any)[id] = new mod(this, id);

      await (this as any)[id].__init();

      this.modules.push(id);
    }
  }

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
