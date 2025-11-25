import { AppProcess } from "$ts/apps/process";
import { __Console__ } from "$ts/console";
import { Env, Kernel, State, SysDispatch } from "$ts/env";
import type { App } from "$types/app";
import type { ConstructedWaveKernel } from "$types/kernel";
import type { ProcessContext, ProcessKillResult } from "$types/process";
import { parse } from "stacktrace-parser";
import { AppRenderer } from "../../apps/renderer";
import { Log } from "../../logging";
import type { Process } from "../../process/instance";
import { Store } from "../../writable";
import { KernelModule } from "../module";

export class ProcessHandler extends KernelModule {
  public BUSY = false;
  private lastPid: number = 0;
  public store = Store<Map<number, Process>>(new Map([]));
  public rendererPid = -1;
  public renderer: AppRenderer | undefined;
  public processContexts = new Map<number, ProcessContext>([]);

  //#region LIFECYCLE

  constructor(kernel: ConstructedWaveKernel, id: string) {
    super(kernel, id);
  }

  async startRenderer(initPid: number) {
    this.isKmod();

    this.renderer = await this.spawn(AppRenderer, undefined, "SYSTEM", initPid, "appRenderer");
  }

  //#endregion

  private makeBusy(reason: string) {
    this.isKmod();
    this.BUSY = true;

    SysDispatch.dispatch("stack-busy");
    this.Log(`Now busy: ${reason}`);
  }

  private makeNotBusy(reason: string) {
    this.isKmod();
    this.BUSY = false;

    SysDispatch.dispatch("stack-not-busy");
    this.Log(`Now no longer busy: ${reason}`);
  }

  async spawn<T = Process>(
    process: typeof Process,
    renderTarget: HTMLDivElement | undefined = undefined,
    userId: string | undefined,
    parentPid: number | undefined = undefined,
    ...args: any[]
  ): Promise<T | undefined> {
    this.isKmod();

    if (Kernel?.PANICKED || this.BUSY) return;

    this.makeBusy("Spawning process");

    const userDaemonPid = Env.get("userdaemon_pid");

    if (State?.currentState === "desktop" && userDaemonPid) {
      parentPid ??= +userDaemonPid;
    }

    const pid = this.getPid();
    __Console__.time(`process spawn: ${pid}`);

    try {
      const proc = new (process as any)(pid, parentPid, ...args) as Process;

      Log("ProcessHandler.spawn", `Spawning new ${proc.constructor.name} with PID ${pid}`);

      if (proc.__start) {
        this.makeNotBusy(`Calling __start of ${pid}`);
        const result = await proc.__start();
        this.makeBusy(`Done calling __start of ${pid}`);

        if (result === false) {
          this.makeNotBusy(`Stopped spawn of ${pid}: __start gave false`);

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

      const store = this.store.get();

      store.set(pid, proc);

      this.store.set(store);

      if (this.renderer && proc instanceof AppProcess) this.renderer.render(proc, renderTarget);

      this.makeNotBusy(`Stopped spawn of ${pid}: done`);
      __Console__.timeEnd(`process spawn: ${pid}`);
      return proc as T;
    } catch (e) {
      const parsed = parse(e instanceof PromiseRejectionEvent ? e.reason.stack : e instanceof Error ? e.stack : "");

      if (parsed?.[0]?.file?.includes("/tpa/v3/") || (args[0]?.data?.id && args[0]?.data?.id === args[0]?.id)) {
        this.renderer?.notifyCrash(args[0]?.data as App, e as Error);
      }

      this.makeNotBusy(`Stopped spawn of ${pid}: uncaught error during construct`);
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

    if (this.BUSY || Kernel?.PANICKED) return "err_disposed";

    Log("ProcessHandler.kill", `Attempting to kill ${pid}`);

    this.makeBusy(`Killing ${pid}`);

    const proc = this.getProcess(pid);

    if (!proc) {
      this.makeNotBusy(`Can't kill ${pid}: no such process`);
      return "err_noExist";
    }
    if (proc._criticalProcess && !force) {
      this.makeNotBusy(`Can't kill ${pid}: critical process`);
      return "err_criticalProcess";
    }

    this.makeNotBusy(`Killing subprocesses of ${pid}`);
    await this._killSubProceses(pid, force);

    if (proc instanceof AppProcess && proc.closeWindow && !force) {
      await proc.closeWindow(false);
    }

    this.makeBusy(`Continuing killing of ${pid}`);

    if (proc.__stop) await proc.__stop();

    let store = this.store.get();

    proc._disposed = true;

    store.set(pid, proc);
    this.store.set(store);

    if (this.renderer) await this.renderer.remove(pid);

    store = this.store.get();
    store.delete(pid);
    this.store.set(store);

    this.makeNotBusy(`Done killing ${pid}`);

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

    const result = new Map<number, Process>([]);

    if (!this.isPid(parentPid)) return result;

    for (const [pid, proc] of this.store.get()) {
      if (proc.parentPid != parentPid) continue;

      result.set(pid, proc);
    }

    return result;
  }

  getProcess<T = Process>(pid: number, disposedToo = false) {
    this.isKmod();

    const proc = this.store.get().get(pid);

    if (!proc) return undefined;

    return proc._disposed && !disposedToo ? undefined : (proc as T);
  }

  getPid() {
    this.isKmod();

    this.lastPid++;

    return this.lastPid;
  }

  isPid(pid: number) {
    this.isKmod();

    return this.store.get().has(pid) && !this.store.get().get(pid)?._disposed;
  }

  ConnectDispatch(pid: number) {
    this.isKmod();

    const proc = this.getProcess(pid);

    if (!proc || !proc.dispatch) return undefined;

    return proc.dispatch;
  }

  async waitForAvailable() {
    return new Promise<void>((r) => {
      const interval = setInterval(() => {
        if (!this.BUSY) r(clearInterval(interval));
      }, 1);
    });
  }
}
