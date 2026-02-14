import type { IEnvironment, IProcessHandler, ISystemDispatch, IWaveKernel } from "$interfaces/kernel";
import type { IStateHandler } from "$interfaces/state";
import { __Console__ } from "$ts/console";
import { ArcOSVersion, SetCurrentKernel, SetKernelExports } from "$ts/env";
import { JsExec } from "$ts/jsexec";
import { getBuild } from "$ts/metadata/build";
import { ChangeLogs } from "$ts/metadata/changelog";
import { getLicense } from "$ts/metadata/license";
import { getMode } from "$ts/metadata/mode";
import { LogLevel, ShortLogLevelCaptions, type LogItem } from "../../types/logging";
import { handleGlobalErrors } from "../error";
import { InitProcess } from "./init";
import { EchoIntro } from "./intro";
import { KernelModules } from "./module/store";
import { prematurePanic } from "./premature";

export class WaveKernel implements IWaveKernel {
  public modules: string[] = [];
  public PANICKED = false;
  public Logs: LogItem[] = [];
  public startMs: number;
  public init: InitProcess | undefined;
  public state: IStateHandler | undefined;
  public initPid = -1;
  public params = new URLSearchParams(location.search);
  public ARCOS_MODE = "release";
  public ARCOS_BUILD = "";
  public ARCOS_LICENSE = "not here yet";
  public PREMATURE = true;

  constructor() {
    this.startMs = Date.now();
    this.Log("KERNEL", "Constructing new Kernel. Have fun zottel.");

    handleGlobalErrors();

    SetCurrentKernel(this);

    if (import.meta.env.DEV) {
      const win = window as any;
      win.kernel = this;
      win.JsExec = JsExec;
    }
  }

  async panic(reason: string, brief?: string) {
    if (this.PANICKED) return;

    this.PANICKED = true;

    const state = this.state;

    if (!state) {
      this.Log(`WaveKernel::panic`, `\n\n${reason}`);

      prematurePanic(brief);

      return;
    }

    state.loadState("crash-screen", { text: reason, brief }, true);

    throw reason;
  }

  async _init() {
    EchoIntro();

    window.__DW_STATUS__ = "async WaveKernel._init";
    window.__DW_INIT__ = true;

    __Console__.time("** Kernel init");
    this.Log(`KERNEL`, `Called _init`);

    // KERNEL AREA STARTS HERE

    await getMode();
    await getBuild();
    await getLicense();
    await ChangeLogs.refreshChangelogs();

    this.Log(`ArcOS`, `***** [v7 -> ArcOS InDev v${ArcOSVersion}-${this.ARCOS_MODE}_${this.ARCOS_BUILD}] *****`);

    await this._kernelModules();

    // Absolutely oblivious piece of code
    this.getModule<IEnvironment>("env").set(
      "MIGVER",
      ArcOSVersion.split(".")
        .splice(1, 2)
        .map(Number)
        .reduce((p, v, i) => p + (i == 1 ? v / 10 : v))
    );

    SetKernelExports();

    const stack = this.getModule<IProcessHandler>("stack");

    this.init = await stack.spawn<InitProcess>(InitProcess, undefined, "SYSTEM");
    this.initPid = this.init?.pid ?? 0;

    this.PREMATURE = false;

    await this.init?.jumpstart();
    __Console__.timeEnd("** Kernel init");
  }

  getModule<T = any>(id: string, dontCrash = false): T {
    const mod = (this as any)[id];
    const result = this.modules.includes(id) && mod && mod.id === id ? (mod as T) : undefined;

    if (!result && !dontCrash) throw new Error(`No such kernel module '${id}'`);

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
    const data: LogItem = {
      timestamp,
      source,
      message,
      level,
      kernelTime: timestamp - this.startMs,
    };

    this.Logs.push(data);

    const dispatch = this.getModule<ISystemDispatch>("dispatch", true);
    dispatch?.dispatch<[LogItem]>("kernel-log", [data]);

    __Console__.log(
      `[${(timestamp - this.startMs).toString().padStart(10, "0")}] ${ShortLogLevelCaptions[level]} ${source}: ${message}`
    );
  }
}
