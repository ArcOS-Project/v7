import { Environment } from "$ts/kernel/env";
import { LogLevel } from "../../types/logging";
import { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { ProcessDispatch } from "./dispatch";
import type { ProcessHandler } from "./handler";

export class Process {
  public env: Environment;
  public handler: ProcessHandler;
  public dispatch: ProcessDispatch;
  public kernel: WaveKernel;
  public pid: number;
  public parentPid: number;
  public name = "";
  public _disposed = false;
  public _criticalProcess = false;

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
    this.env = this.kernel.getModule<Environment>("env");
  }

  protected async stop(): Promise<any> {
    /** */
  }

  protected async start(): Promise<any> {
    /** */
  }

  public async __start(): Promise<any> {
    this.Log(`STARTING PROCESS`);

    return await await this.start();
  }

  public async __stop(): Promise<any> {
    this.Log(`STOPPING PROCESS`);

    return await await this.stop();
  }

  async killSelf() {
    this.Log(`Killing self (PID ${this.pid})`);
    await this.handler.kill(this.pid);
  }

  protected Log(message: string, level = LogLevel.info) {
    const source = `${this.name}[${this.pid}]`;

    Log(source, message, level);
  }
}
