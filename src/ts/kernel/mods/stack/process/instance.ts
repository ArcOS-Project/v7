import type { IProcess, IProcessDispatch } from "$interfaces/process";
import { Fs, getKMod } from "$ts/env";
import { calculateMemory } from "$ts/util";
import type { ProcessState } from "$types/process";
import { LogLevel } from "$types/logging";
import { Log } from "$ts/logging";
import { ProcessDispatch } from "./dispatch";

export class Process implements IProcess {
  public dispatch: IProcessDispatch;
  public pid: number;
  public parentPid: number;
  public name = "";
  public get _disposed() {
    return this.STATE === "disposed" || this.STATE === "error";
  }

  public _criticalProcess = false;
  public sourceUrl: string = "undetermined";
  private fileLocks: string[] = [];
  public STATE: ProcessState = "unknown";

  constructor(pid: number, parentPid?: number, ...args: any[]) {
    this.STATE = "constructing";
    this.pid = pid;
    this.parentPid = parentPid || 0;
    this.name ||= this.constructor.name;
    this.dispatch = new ProcessDispatch(this);
  }

  get MEMORY(): number {
    return calculateMemory(this);
  }

  protected async stop(): Promise<any> {
    /** */
  }

  protected async start(): Promise<any> {
    /** */
  }

  public async __start(): Promise<any> {
    this.STATE = "starting";
    this.Log(`STARTING PROCESS`);

    if (this.sourceUrl === "undetermined") {
      this.Log(`Source URL of process class not set!`, LogLevel.warning);
    }

    const result = await this.start();
    this.STATE = "running";
    return result;
  }

  public async __stop(): Promise<any> {
    this.STATE = "stopping";
    this.Log(`STOPPING PROCESS`);

    const result = await this.stop();
    this.STATE = "disposed";
    return result;
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
      await Fs.lockFile(path, this.pid);

      this.fileLocks.push(path);
    } catch {
      return false;
    }
  }

  async unlockFile(path: string) {
    this.Log(`Requesting file unlock for '${path}'`);

    try {
      await Fs.releaseLock(path, this.pid);

      this.fileLocks.splice(this.fileLocks.indexOf(path));
    } catch {
      return false;
    }
  }

  setSource(source: string) {
    this.sourceUrl = `src/${source.split("/src/")[1]}`;
  }
}
