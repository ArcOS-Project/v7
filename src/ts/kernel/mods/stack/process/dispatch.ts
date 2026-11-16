import type { IProcess, IProcessDispatch } from "$interfaces/IProcess";
import { Log } from "$ts/logging";
import type { DispatchCallback } from "$types/system/dispatch";

export class ProcessDispatch implements IProcessDispatch {
  private store: Record<string, DispatchCallback[]> = {};
  private parent: IProcess;
  private _disposed = false;

  constructor(process: IProcess) {
    Log(`ProcessDispatch::'${process.name}'`, `Constructing new dispatch for ${process.name}`);
    this.parent = process;
  }

  subscribe(event: string, callback: DispatchCallback) {
    if (this._disposed) return;
    this.#Log(`Subscribing to event "${event}"`);

    if (!this.store[event]) this.store[event] = [];
    this.store[event].push(callback);
  }

  async dispatch(event: string, ...args: any[]) {
    if (this._disposed) return true;
    this.#Log(`Dispatching event "${event}"`);

    const callbacks = this.store[event];
    if (!callbacks) return false;

    for (const callback of callbacks) {
      await callback(...args);
    }

    return true;
  }

  dispose() {
    this.#Log("Disposing");
    this.store = {};
    this._disposed = true;
  }

  #Log(message: string) {
    Log(`ProcessDispatch::'${this.parent.name}'`, message);
  }
}
