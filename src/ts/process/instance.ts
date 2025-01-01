import { WaveKernel } from "../kernel";
import { ProcessDispatch } from "./dispatch";
import type { ProcessHandler } from "./handler";

export class Process {
  private handler: ProcessHandler;
  public dispatch: ProcessDispatch;
  public kernel: WaveKernel;
  public pid: number;
  public parentPid: number;
  public name = "";
  public _disposed = false;
  public _criticalProcess = false;

  constructor(handler: ProcessHandler, pid: number, parentPid?: number) {
    this.handler = handler;
    this._disposed = false;
    this.pid = pid;
    this.parentPid = parentPid || 0;
    this.kernel = WaveKernel.get();
    this.dispatch = new ProcessDispatch(this);

    this.name ||= this.constructor.name;
  }

  async stop(): Promise<any> {
    /** */
  }

  async start(): Promise<any> {
    /** */
  }

  async killSelf() {
    await this.handler.kill(this.pid);
  }
}
