import type { DispatchCallback } from "../../types/dispatch";
import type { WaveKernel } from "../kernel";
import { Log } from "../kernel/logging";
import { Process } from "./instance";

export class ProcessDispatch {
  private store: Record<string, DispatchCallback[]> = {};
  private parent: Process;
  private kernel: WaveKernel;

  constructor(process: Process) {
    Log(`ProcessDispatch::'${process.name}'`, `Constructing new dispatch for ${process.name}`);
    this.parent = process;
    this.kernel = process.kernel;
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
  }
}
