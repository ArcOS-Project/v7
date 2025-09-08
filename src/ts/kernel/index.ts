import { __Console__ } from "$ts/console";
import { ArcOSVersion } from "$ts/env";
import { getBuild } from "$ts/metadata/build";
import { ChangeLogs } from "$ts/metadata/changelog";
import { getLicense } from "$ts/metadata/license";
import { getMode } from "$ts/metadata/mode";
import { SqlInterfaceProcess } from "$ts/sql";
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
  public modules: string[] = [];
  private PANICKED = false;
  public Logs: ReadableStore<LogItem[]> = Store([]);
  public startMs: number;
  public init: InitProcess | undefined;
  public state: StateHandler | undefined;
  public initPid = -1;
  public params = new URLSearchParams(location.search);
  public ARCOS_MODE = "release";
  public ARCOS_BUILD = "";
  public ARCOS_LICENSE = "not here yet";
  public PREMATURE = true;

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
    WaveKernel.AssertNDef(CurrentKernel, "WaveKernel");

    this.startMs = Date.now();
    this.Log("KERNEL", "Constructing new Kernel. Have fun zottel.");

    handleGlobalErrors();

    CurrentKernel = this;

    if (import.meta.env.DEV) {
      (window as any)["kernel"] = CurrentKernel;
      (window as any).SqlInterfaceProcess = SqlInterfaceProcess;
    }
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
    (window as any).__DW_INIT__ = true;

    __Console__.time("** Kernel init");
    this.Log(`KERNEL`, `Called _init`);

    // KERNEL AREA STARTS HERE

    await getMode();
    await getBuild();
    await getLicense();
    await ChangeLogs.refreshChangelogs();

    this.Log(`ArcOS`, `***** [v7 -> ArcOS InDev v${ArcOSVersion}-${this.ARCOS_MODE}_${this.ARCOS_BUILD}] *****`);

    await this._kernelModules();

    const stack = this.getModule<ProcessHandler>("stack");

    this.init = await stack.spawn<InitProcess>(InitProcess);
    this.initPid = this.init?.pid ?? 0;

    this.PREMATURE = false;

    await this.init?.jumpstart();
    __Console__.timeEnd("** Kernel init");
  }

  getModule<T = any>(id: string, dontCrash = false): T {
    const mod = (this as any)[id];
    const result = this.modules.includes(id) && mod && mod.id === id ? (mod as T) : undefined;

    WaveKernel.Assert(!result && dontCrash, `Kernel module ${id}`);

    return result as T;
  }

  private async _kernelModules() {
    this.Log(`KERNEL`, `Loading kernel modules`);

    for (const [id, mod] of Object.entries(KernelModules)) {
      __Console__.time(`kernel module ${id}`);
      (this as any)[id] = new mod(this, id);

      await (this as any)[id].__init();

      this.modules.push(id);
      __Console__.timeEnd(`kernel module ${id}`);
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

    __Console__.log(
      `[${(timestamp - this.startMs).toString().padStart(10, "0")}] ${ShortLogLevelCaptions[level]} ${source}: ${message}`
    );
  }

  public static AssertLessOrEq<T extends number | bigint>(left: T, right: T, name = "<LEQ>"): asserts left {
    this.Assert(left <= right, `LEQ ${name}`, left, right);
  }

  public static AssertMoreOrEq<T extends number | bigint>(left: T, right: T, name = "<GEQ>"): asserts left {
    this.Assert(left >= right, `GEQ ${name}`, left, right);
  }

  public static AssertLess<T extends number | bigint>(left: T, right: T, name = "<LESS>"): asserts left {
    this.Assert(left < right, `LESS ${name}`, left, right);
  }

  public static AssertMore<T extends number | bigint>(left: T, right: T, name = "<MORE>"): asserts left {
    this.Assert(left > right, `MORE ${name}`, left, right);
  }

  public static AssertEq<T>(left: T, right: T, name = "<EQ>"): asserts left is T {
    this.Assert(left === right, `EQ ${name}`, left, right);
  }

  public static AssertNeq<T>(left: T, right: T, name = "<NEQ>"): asserts left is T {
    this.Assert(left !== right, `NEQ ${name}`, left, right);
  }

  public static AssertDef<T>(val: T, name = "<DEF>"): asserts val is NonNullable<T> {
    this.Assert(val !== undefined && val !== null, `DEF ${name}`);
  }

  public static AssertNDef<T>(val: T, name = "<NDEF>"): asserts val is NonNullable<T> {
    this.Assert(val === undefined || val === null, `NDEF ${name}`);
  }

  public static Assert(expr: boolean, name = "<>", expected: unknown = "?", got: unknown = "?"): asserts expr {
    if (!expr) throw new Error(`Assertion failed: ${name}: ${expected}, ${got}`);
  }
}
