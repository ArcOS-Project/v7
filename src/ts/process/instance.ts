import { SystemDispatch } from "$ts/dispatch";
import { Filesystem } from "$ts/fs";
import { Environment } from "$ts/kernel/env";
import { getKMod } from "$ts/kernel/module";
import { SoundBus } from "$ts/soundbus";
import { LogLevel } from "../../types/logging";
import { Log } from "../kernel/logging";
import { ProcessDispatch } from "./dispatch";

export class Process {
  public env: Environment;
  public soundBus: SoundBus;
  public dispatch: ProcessDispatch;
  public systemDispatch: SystemDispatch;
  public pid: number;
  public parentPid: number;
  public name = "";
  public _disposed = false;
  public _criticalProcess = false;
  public fs: Filesystem;
  private fileLocks: string[] = [];

  constructor(pid: number, parentPid?: number, ...args: any[]) {
    this._disposed = false;
    this.pid = pid;
    this.parentPid = parentPid || 0;
    this.name ||= this.constructor.name;
    this.dispatch = new ProcessDispatch(this);
    this.systemDispatch = getKMod<SystemDispatch>("dispatch");
    this.env = getKMod<Environment>("env");
    this.soundBus = getKMod<SoundBus>("soundbus");
    this.fs = getKMod<Filesystem>("fs");
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
    await getKMod<any>("stack").waitForAvailable(); // any because circular imports otherwise.
    await getKMod<any>("stack").kill(this.pid, true);
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
