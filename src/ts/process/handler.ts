import { AppProcess } from "$ts/apps/process";
import { GlobalDispatcher } from "$ts/dispatch";
import { Environment } from "$ts/kernel/env";
import type { ProcessKillResult } from "$types/process";
import { AppRenderer } from "../apps/renderer";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { KernelModule } from "../kernel/module";
import { Store } from "../writable";
import type { Process } from "./instance";

export class ProcessHandler extends KernelModule {
  public BUSY = false;
  private lastPid: number = 0;
  public store = Store<Map<number, Process>>(new Map([]));
  public rendererPid = -1;
  public renderer: AppRenderer | undefined;
  public env: Environment;
  public dispatch: GlobalDispatcher;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.env = this.kernel.getModule<Environment>("env");
    this.dispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
  }

  async _init() {
    // await this.startRenderer();
  }

  async startRenderer(initPid: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.renderer = await this.spawn(
      AppRenderer,
      undefined,
      initPid,
      "appRenderer"
    );
  }

  private makeBusy(reason: string) {
    this.BUSY = true;

    this.dispatch.dispatch("stack-busy");
    this.Log(`Now busy: ${reason}`);
  }

  private makeNotBusy(reason: string) {
    this.BUSY = false;

    this.dispatch.dispatch("stack-not-busy");
    this.Log(`Now no longer busy: ${reason}`);
  }

  async spawn<T = Process>(
    process: typeof Process,
    renderTarget: HTMLDivElement | undefined = undefined,
    parentPid: number | undefined = undefined,
    ...args: any[]
  ): Promise<T | undefined> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    if (WaveKernel.isPanicked() || this.BUSY) return;

    this.makeBusy("Spawning process");

    const userDaemonPid = this.env.get("userdaemon_pid");

    if (this.kernel.state?.currentState === "desktop" && userDaemonPid) {
      parentPid ??= +userDaemonPid;
    }

    const pid = this.getPid();
    const proc = new (process as any)(this, pid, parentPid, ...args) as Process;

    Log(
      "ProcessHandler.spawn",
      `Spawning new ${proc.constructor.name} with PID ${pid}`
    );

    if (proc.__start) {
      this.makeNotBusy(`Calling __start of ${pid}`);
      const result = await proc.__start();
      this.makeBusy(`Done calling __start of ${pid}`);

      if (result === false) {
        this.makeNotBusy(`Stopped spawn of ${pid}: __start gave false`);

        return;
      }
    }

    proc.name ||= proc.constructor.name;

    const store = this.store.get();

    store.set(pid, proc);

    this.store.set(store);

    if (this.renderer && proc instanceof AppProcess)
      this.renderer.render(proc, renderTarget);

    this.makeNotBusy(`Stopped spawn of ${pid}: done`);
    return proc as T;
  }

  async kill(pid: number, force = false): Promise<ProcessKillResult> {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    if (this.BUSY || WaveKernel.isPanicked()) return "err_disposed";

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
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    if (WaveKernel.isPanicked()) return;

    const procs = await this.getSubProcesses(pid);

    if (!procs.size) return;

    for (const [pid, proc] of procs) {
      if (proc._disposed) continue;

      if (proc instanceof AppProcess && proc.closeWindow && !force) {
        await proc.closeWindow();

        continue;
      }

      await this.kill(pid);
    }
  }

  public async getSubProcesses(parentPid: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    const result = new Map<number, Process>([]);

    if (!this.isPid(parentPid)) return result;

    for (const [pid, proc] of this.store.get()) {
      if (proc.parentPid != parentPid) continue;

      result.set(pid, proc);
    }

    return result;
  }

  getProcess<T = Process>(pid: number, disposedToo = false) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    const proc = this.store.get().get(pid);

    if (!proc) return undefined;

    return proc._disposed && !disposedToo ? undefined : (proc as T);
  }

  getPid() {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.lastPid++;

    return this.lastPid;
  }

  isPid(pid: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    return this.store.get().has(pid) && !this.store.get().get(pid)?._disposed;
  }

  ConnectDispatch(pid: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

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
