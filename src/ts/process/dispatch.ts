import type { DispatchCallback } from "../../types/dispatch";
import { Log } from "../kernel/logging";
import { Process } from "./instance";

export class ProcessDispatch {
  private store: Record<string, DispatchCallback[]> = {};
  private parent: Process;

  constructor(process: Process) {
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
