import type { IProcess, IProcessDispatch } from "$interfaces/process";
import type { DispatchCallback } from "$types/dispatch";
import { Log } from "$ts/logging";

export class ProcessDispatch implements IProcessDispatch {
  private store: Record<string, DispatchCallback[]> = {};
  private parent: IProcess;

  constructor(process: IProcess) {
    Log(`ProcessDispatch::'${process.name}'`, `Constructing new dispatch for ${process.name}`);
    this.parent = process;
  }

  subscribe(event: string, callback: DispatchCallback) {
    Log(`ProcessDispatch::'${this.parent.name}'`, `Subscribing to event "${event}"`);

    if (!this.store[event]) this.store[event] = [];

    this.store[event].push(callback);
  }

  async dispatch(event: string, ...args: any[]) {
    Log(`ProcessDispatch::'${this.parent.name}'`, `Dispatching event "${event}"`);

    const callbacks = this.store[event];

    if (!callbacks) return false;

    for (const callback of callbacks) {
      await callback(...args);
    }

    return true;
  }
}
