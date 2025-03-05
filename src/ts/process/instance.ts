import { GlobalDispatcher } from "$ts/dispatch";
import { Filesystem } from "$ts/fs";
import { Environment } from "$ts/kernel/env";
import { SoundBus } from "$ts/soundbus";
import { LogLevel } from "../../types/logging";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { ProcessDispatch } from "./dispatch";
import type { ProcessHandler } from "./handler";

export class Process {
  public env: Environment;
  public soundBus: SoundBus;
  public handler: ProcessHandler;
  public dispatch: ProcessDispatch;
  public globalDispatch: GlobalDispatcher;
  public kernel: WaveKernel;
  public pid: number;
  public parentPid: number;
  public name = "";
  public _disposed = false;
  public _criticalProcess = false;
  public fs: Filesystem;
  private fileLocks: string[] = [];

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid?: number,
    ...args: any[]
  ) {
    this.handler = handler;
    this._disposed = false;
    this.pid = pid;
    this.parentPid = parentPid || 0;
    this.kernel = WaveKernel.get();
    this.name ||= this.constructor.name;
    this.dispatch = new ProcessDispatch(this);
    this.globalDispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
    this.env = this.kernel.getModule<Environment>("env");
    this.soundBus = this.kernel.getModule<SoundBus>("soundbus");
    this.fs = this.kernel.getModule<Filesystem>("fs");
  }

  protected async stop(): Promise<any> {
    /** */
  }

  protected async start(): Promise<any> {
    /** */
  }

  public async __start(): Promise<any> {
    this.Log(`STARTING PROCESS`);

    return await this.start();
  }

  public async __stop(): Promise<any> {
    this.Log(`STOPPING PROCESS`);

    return await this.stop();
  }

  async killSelf() {
    if (this._disposed) return;
    this.Log(`Killing self (PID ${this.pid})`);
    await this.handler.waitForAvailable();
    await this.handler.kill(this.pid, true);
  }

  protected Log(message: string, level = LogLevel.info) {
    const source = `${this.name}[${this.pid}]`;

    Log(source, message, level);
  }

  async requestFileLock(path: string) {
    this.Log(`Requesting file lock for '${path}'`);

    try {
      await this.fs.lockFile(path, this.pid);

      this.fileLocks.push(path);
    } catch {
      return false;
    }
  }

  async unlockFile(path: string) {
    this.Log(`Requesting file unlock for '${path}'`);

    try {
      await this.fs.releaseLock(path, this.pid);

      this.fileLocks.splice(this.fileLocks.indexOf(path));
    } catch {
      return false;
    }
  }
}
