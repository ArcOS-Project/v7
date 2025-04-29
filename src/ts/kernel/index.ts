import { getBuild } from "$ts/metadata/build";
import { getLicense } from "$ts/metadata/license";
import { getMode } from "$ts/metadata/mode";
import { Store, type ReadableStore } from "$ts/writable";
import { LogLevel, ShortLogLevelCaptions, type LogItem } from "../../types/logging";
import { handleGlobalErrors } from "../error";
import { ProcessHandler } from "../process/handler";
import { StateHandler } from "../state";
import { InitProcess } from "./init";
import { KernelModules } from "./module/store";
import { prematurePanic } from "./premature";

let CurrentKernel: WaveKernel | undefined = undefined;

export class WaveKernel {
  private modules: string[] = [];
  private PANICKED = false;
  public Logs: ReadableStore<LogItem[]> = Store([]);
  public startMs: number;
  public init: InitProcess | undefined;
  public state: StateHandler | undefined;
  public initPid = -1;
  public params = new URLSearchParams();
  public ARCOS_MODE = "release";
  public ARCOS_BUILD = "unknown";
  public ARCOS_LICENSE = "not here yet";

  public static get(): WaveKernel {
    if (!CurrentKernel) {
      prematurePanic();
      throw new Error("Tried to get kernel while it doesn't exist yet");
    }

    return CurrentKernel;
  }

  public static isPanicked(): boolean {
    return this.get().PANICKED;
  }

  constructor() {
    if (CurrentKernel) throw new Error("Attempted to reinitialize the kernel");

    this.startMs = Date.now();
    this.Log("KERNEL", "Constructing new Kernel. Have fun zottel.");

    handleGlobalErrors();

    CurrentKernel = this;

    if (import.meta.env.DEV) (window as any)["kernel"] = CurrentKernel;
  }

  static async panic(reason: string) {
    const kernel = this.get();

    if (!kernel || kernel.PANICKED) return;

    kernel.PANICKED = true;

    const state = kernel.state;

    if (!state) {
      kernel.Log(`WaveKernel::panic`, `\n\n${reason}`);

      prematurePanic();

      return;
    }

    state.loadState("crash-screen", { text: reason }, true);

    throw reason;
  }

  async _init() {
    console.time("** Kernel init");
    this.Log(`KERNEL`, `Called _init`);

    // KERNEL AREA STARTS HERE

    await getMode();
    await getBuild();
    await getLicense();

    this.Log(`ArcOS`, `***** [v7 -> ArcOS InDev v7.0.0-${this.ARCOS_MODE}_${this.ARCOS_BUILD}] *****`);

    await this._kernelModules();

    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      throw new Error("Firefox");
    }

    const stack = this.getModule<ProcessHandler>("stack");

    this.init = await stack.spawn<InitProcess>(InitProcess);
    this.initPid = this.init?.pid ?? 0;

    await this.init?.jumpstart();
    console.timeEnd("** Kernel init");
  }

  getModule<T = any>(id: string, dontCrash = false): T {
    const mod = (this as any)[id];
    const result = this.modules.includes(id) && mod && mod.id === id ? (mod as T) : undefined;

    if (!result && !dontCrash) throw new Error(`No such kernel module ${id}`);

    return result as T;
  }

  private async _kernelModules() {
    this.Log(`KERNEL`, `Loading kernel modules`);

    for (const [id, mod] of Object.entries(KernelModules)) {
      console.time(`kernel module ${id}`);
      (this as any)[id] = new mod(this, id);

      await (this as any)[id].__init();

      this.modules.push(id);
      console.timeEnd(`kernel module ${id}`);
    }
  }

  public Log(source: string, message: string, level = LogLevel.info) {
    const timestamp = Date.now();

    this.Logs.update((v) => {
      v.push({
        timestamp,
        source,
        message,
        level,
        kernelTime: timestamp - this.startMs,
      });

      return v;
    });

    console.log(
      `[${(timestamp - this.startMs).toString().padStart(10, "0")}] ${ShortLogLevelCaptions[level]} ${source}: ${message}`
    );
  }
}
