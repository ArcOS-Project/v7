import type { Constructs } from "$interfaces/common";
import type { IWaveKernel } from "$interfaces/kernel";
import type { IProcessHandler } from "$interfaces/modules/stack";
import type { IProcess } from "$interfaces/process";
import type { IAppRenderer } from "$interfaces/renderer";
import { AppProcess } from "$ts/apps/process";
import { AppRenderer } from "$ts/apps/renderer";
import { __Console__ } from "$ts/console";
import { Env, Kernel, State, SysDispatch } from "$ts/env";
import { calculateMemory } from "$ts/util";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import type { ProcessContext, ProcessKillResult } from "$types/process";
import { parse } from "stacktrace-parser";
import { KernelModule } from "../../module";

export class ProcessHandler extends KernelModule implements IProcessHandler {
  private _busy: string = "";
  private lastPid: number = 0;
  public store = Store<Map<number, IProcess>>(new Map([]));
  public rendererPid = -1;
  public renderer: IAppRenderer | undefined;
  public processContexts = new Map<number, ProcessContext>([]);

  get IS_BUSY() {
    return !!this.BUSY;
  }

  get BUSY() {
    return this._busy;
  }

  set BUSY(value: string) {
    this._busy = value;
    if (value) {
      SysDispatch.dispatch("stack-busy");
    } else {
      SysDispatch.dispatch("stack-not-busy");
    }
  }

  get MEMORY() {
    let sum = 0;
    const procs = this.store();

    for (const [pid, proc] of [...procs]) {
      sum += calculateMemory(proc);
    }

    return sum;
  }

  busyWithNot(thing: string) {
    return this.BUSY && this.BUSY !== thing;
  }

  //#region LIFECYCLE

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  async startRenderer(initPid: number) {
    this.isKmod();

    this.renderer = await this.spawn(AppRenderer, undefined, "SYSTEM", initPid, "appRenderer");
  }

  //#endregion

  async spawn<T extends IProcess = IProcess>(
    process: Constructs<T>,
    renderTarget: HTMLDivElement | undefined = undefined,
    userId: string | undefined,
    parentPid: number | undefined = undefined,
    ...args: any[]
  ): Promise<T | undefined> {
    this.isKmod();

    if (Kernel?.PANICKED || this.busyWithNot("spawn")) return;

    this.BUSY = "spawn";

    const userDaemonPid = Env.get("userdaemon_pid");

    if (State?.currentState === "desktop" && userDaemonPid) {
      parentPid ??= +userDaemonPid;
    }

    const pid = this.getPid();
    __Console__.time(`process spawn: ${pid}`);

    try {
      const proc = new (process as any)(pid, parentPid, ...args) as IProcess;

      this.Log(`Spawning new ${proc.constructor.name} with PID ${pid}`);

      if (proc.__start) {
        const result = await proc.__start();

        if (result === false) {
          this.Log(`Stopped spawn of ${pid}: __start gave false`);
          this.BUSY = "";

          __Console__.timeEnd(`process spawn: ${pid}`);
          return;
        }
      }

      proc.name ||= proc.constructor.name;

      this.processContexts.set(pid, {
        pid,
        userId: userId || "NOBODY",
        appId: proc instanceof AppProcess ? proc.app.id : undefined,
      });

      const store = this.store();

      store.set(pid, proc);

      this.store.set(store);

      if (this.renderer && proc instanceof AppProcess) this.renderer.render(proc, renderTarget);

      this.BUSY = "";
      __Console__.timeEnd(`process spawn: ${pid}`);
      return proc as T;
    } catch (e) {
      const parsed = parse(e instanceof PromiseRejectionEvent ? e.reason.stack : e instanceof Error ? e.stack : "");

      if (parsed?.[0]?.file?.includes("/tpa/v3/") || (args[0]?.data?.id && args[0]?.data?.id === args[0]?.id)) {
        this.renderer?.notifyCrash(args[0]?.data as App, e as Error);
      }

      this.Log(`Stopped spawn of ${pid}: uncaught error during construct`);
      this.BUSY = "";
      __Console__.warn(e);
      __Console__.timeEnd(`process spawn: ${pid}`);

      return undefined;
    }
  }

  getProcessContext(pid: number) {
    return this.processContexts.get(pid);
  }

  setProcessContext(pid: number, context: ProcessContext) {
    this.processContexts.set(pid, context);
  }

  async updateProcessContext(pid: number, cb: (context: ProcessContext) => ProcessContext) {
    const context = this.getProcessContext(pid);

    if (!context) return false;

    this.setProcessContext(pid, cb(context));
  }

  async kill(pid: number, force = false): Promise<ProcessKillResult> {
    this.isKmod();

    if (this.busyWithNot("kill") || Kernel?.PANICKED) return "err_disposed";

    this.Log(`Attempting to kill ${pid}`);

    this.BUSY = "kill";

    const proc = this.getProcess(pid);

    if (!proc) {
      this.BUSY = "";
      return "err_noExist";
    }
    if (proc._criticalProcess && !force) {
      this.Log(`Can't kill ${pid}: critical process`);
      this.BUSY = "";
      return "err_criticalProcess";
    }

    await this._killSubProceses(pid, force);

    if (proc instanceof AppProcess && proc.closeWindow && !force) {
      await proc.closeWindow(false);
    }

    SysDispatch.dispatch<[number]>("proc-kill", [pid]);

    if (proc.__stop) await proc.__stop();

    let store = this.store();

    proc.STATE = "disposed";

    store.set(pid, proc);
    this.store.set(store);

    if (this.renderer) await this.renderer.remove(pid);

    store = this.store();
    store.delete(pid);
    this.store.set(store);

    this.BUSY = "";

    return "success";
  }

  public async _killSubProceses(pid: number, force = false) {
    this.isKmod();

    if (Kernel?.PANICKED) return;

    const procs = this.getSubProcesses(pid);

    if (!procs.size) return;

    for (const [pid, proc] of procs) {
      if (proc._disposed) continue;

      if (proc instanceof AppProcess && proc.closeWindow && !force) {
        await proc.closeWindow();

        continue;
      }

      await this.kill(pid, force);
    }
  }

  public getSubProcesses(parentPid: number) {
    this.isKmod();

    const result = new Map<number, IProcess>([]);

    if (!this.isPid(parentPid)) return result;

    for (const [pid, proc] of this.store()) {
      if (proc.parentPid != parentPid) continue;

      result.set(pid, proc);
    }

    return result;
  }

  getProcess<T = IProcess>(pid: number) {
    this.isKmod();

    const proc = this.store().get(pid);

    if (!proc) return undefined;

    return proc._disposed ? undefined : (proc as T);
  }

  getPid() {
    this.isKmod();

    this.lastPid++;

    return this.lastPid;
  }

  isPid(pid: number) {
    this.isKmod();

    return this.store().has(pid) && !this.store().get(pid)?._disposed;
  }

  ConnectDispatch(pid: number) {
    this.isKmod();

    const proc = this.getProcess(pid);

    if (!proc || !proc.dispatch) return undefined;

    return proc.dispatch;
  }

  async waitForAvailable(or?: string) {
    this.Log("wait for available");
    return new Promise<void>((r) => {
      const interval = setInterval(() => {
        if (!this.BUSY || (or && this.BUSY === or)) r(clearInterval(interval));
      }, 1);
    });
  }
}
