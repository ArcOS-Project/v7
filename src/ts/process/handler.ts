import { AppProcess } from "$ts/apps/process";
import { Environment } from "$ts/kernel/env";
import { AppManager } from "../apps/manager";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { KernelModule } from "../kernel/module";
import { Store } from "../writable";
import type { Process } from "./instance";

export class ProcessHandler extends KernelModule {
  private lastPid: number = 0;
  public store = Store<Map<number, Process>>(new Map([]));
  public rendererPid = -1;
  public renderer: AppManager | undefined;
  public env: Environment;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.env = this.kernel.getModule<Environment>("env");
  }

  async _init() {
    // await this.startRenderer();
  }

  async startRenderer(initPid: number) {
    this.renderer = await this.spawn(AppManager, initPid, "appRenderer");
  }

  async spawn<T = Process>(
    process: typeof Process,
    parentPid: number | undefined = undefined,
    ...args: any[]
  ): Promise<T | undefined> {
    if (WaveKernel.isPanicked()) return;

    const userDaemonPid = this.env.get("userdaemon_pid");

    if (this.kernel.state?.currentState === "desktop" && userDaemonPid) {
      parentPid ??= +userDaemonPid;
    }

    const pid = this.getPid();
    const proc = new (process as any)(this, pid, parentPid, ...args) as Process;

    console.group(`PROCESS ${proc.constructor.name} ${pid}`);

    Log(
      "ProcessHandler.spawn",
      `Spawning new ${proc.constructor.name} with PID ${pid}`
    );

    if (proc.__start) {
      const result = await proc.__start();

      if (result === false) {
        console.groupEnd();

        return;
      }
    }

    proc.name = proc.constructor.name;

    const store = this.store.get();

    store.set(pid, proc);

    this.store.set(store);

    if (this.renderer && proc instanceof AppProcess) this.renderer.render(proc);

    console.groupEnd();

    return proc as T;
  }

  async kill(pid: number, force = false) {
    Log("ProcessHandler.kill", `Attempting to kill ${pid}`);

    const proc = this.getProcess(pid);

    if (!proc) return "err_noExist";
    if (proc._criticalProcess && !force) return "err_criticalProcess";

    if (proc instanceof AppProcess && proc.closeWindow && !force) {
      await proc.closeWindow(false);
    }

    if (proc.__stop) await proc.__stop();

    await this._killSubProceses(pid, force);

    const store = this.store.get();

    proc._disposed = true;

    store.set(pid, proc);
    this.store.set(store);

    if (this.renderer) this.renderer.remove(pid);

    return "success";
  }

  public async _killSubProceses(pid: number, force = false) {
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
    const result = new Map<number, Process>([]);

    if (!this.isPid(parentPid)) return result;

    for (const [pid, proc] of this.store.get()) {
      if (proc.parentPid != parentPid) continue;

      result.set(pid, proc);
    }

    return result;
  }

  getProcess<T = Process>(pid: number, disposedToo = false) {
    const proc = this.store.get().get(pid);

    if (!proc) return undefined;

    return proc._disposed && !disposedToo ? undefined : (proc as T);
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

  logTree() {
    // Build a tree structure
    const processTree: Record<number, number[]> = {};
    const roots: number[] = [];
    let result = "";

    this.store().forEach((process) => {
      const parentPID = process.parentPid;
      if (parentPID !== undefined) {
        if (!processTree[parentPID]) {
          processTree[parentPID] = [];
        }
        processTree[parentPID].push(process.pid);
      } else {
        roots.push(process.pid); // Root processes have no ParentPID
      }
    });

    // Helper function for depth-first traversal
    const traverse = (pid: number, depth: number) => {
      result += `${" ".repeat(depth * 2)}- Process ${pid}\n`;
      const children = processTree[pid] || [];
      for (const child of children) {
        traverse(child, depth + 1);
      }
    };

    // Log each tree starting from a root process
    for (const root of roots) {
      traverse(root, 0);
    }

    this.Log(result);
  }
}
