import type { AppRenderer } from "../apps/renderer";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { KernelModule } from "../kernel/module";
import { Store } from "../writable";
import type { Process } from "./instance";

export class ProcessHandler extends KernelModule {
  private lastPid: number = 0;
  public store = Store<Map<number, Process>>(new Map([]));
  public rendererPid = -1;
  public renderer: AppRenderer | undefined;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {}

  async spawn<T = Process>(
    process: typeof Process,
    parentPid: number | undefined = undefined,
    ...args: any[]
  ): Promise<T | undefined> {
    if (WaveKernel.isPanicked()) return;

    const pid = this.getPid();
    const proc = new (process as any)(this, pid, parentPid, ...args) as Process;

    Log(
      "ProcessHandler.spawn",
      `Spawning new ${proc.constructor.name} with PID ${pid}`
    );

    if (proc.start) {
      const result = await proc.start();

      if (result === false) return;
    }

    proc.name = proc.constructor.name;

    const store = this.store.get();

    store.set(pid, proc);

    this.store.set(store);

    return proc as T;
  }

  async kill(pid: number, force = false) {
    Log("ProcessHandler.kill", `Attempting to kill ${pid}`);

    const proc = this.getProcess(pid);

    if (!proc) return "err_noExist";
    if (proc._criticalProcess && !force) return "err_criticalProcess";

    if (proc.stop) await proc.stop();

    await this._killSubProceses(pid);

    const store = this.store.get();

    proc._disposed = true;
    store.set(pid, proc);

    return "success";
  }

  private async _killSubProceses(pid: number) {
    const procs = await this.getSubProcesses(pid);

    if (!procs.size) return;

    for (const [pid, proc] of procs) {
      if (proc._disposed) continue;

      // TODO: closeWindow

      // if (proc.closeWindow) {
      //   proc.closeWindow();

      //   continue;
      // }

      await this.kill(pid);
    }
  }

  public async getSubProcesses(parentPid: number) {
    const result = new Map<number, Process>([]);

    if (!this.isPid(parentPid)) return result;

    for (const [pid, proc] of this.store.get()) {
      if (proc.parentPid != parentPid) continue;

      result.set(pid, proc);
    }

    return result;
  }

  getProcess(pid: number) {
    const proc = this.store.get().get(pid);

    if (!proc) return undefined;

    return proc._disposed ? undefined : proc;
  }

  getPid() {
    this.lastPid++;

    return this.lastPid;
  }

  isPid(pid: number) {
    return this.store.get().has(pid) && !this.store.get().get(pid)?._disposed;
  }

  ConnectDispatch(pid: number) {
    const proc = this.getProcess(pid);

    if (!proc || !proc.dispatch) return undefined;

    return proc.dispatch;
  }
}
