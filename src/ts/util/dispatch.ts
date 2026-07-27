import type { IDispatch } from "$interfaces/IProcess";
import { Log } from "$ts/logging";
import { UUID } from "$ts/util/uuid";
import type { DispatchCallback } from "$types/system/dispatch";

export class GenericDispatch implements IDispatch {
  private store: Record<string, DispatchCallback[]> = {};
  private uuid = UUID();

  constructor() {
    Log(`ProcessDispatch::${this.uuid}`, `Constructing new generic dispatch`);
  }

  subscribe(event: string, callback: DispatchCallback) {
    Log(`GenericDispatch::${this.uuid}`, `Subscribing to event "${event}"`);

    if (!this.store[event]) this.store[event] = [];

    this.store[event].push(callback);
  }

  async dispatch(event: string, ...args: any[]) {
    Log(`ProcessDispatch::${this.uuid}`, `Dispatching event "${event}"`);

    const callbacks = this.store[event];

    if (!callbacks) return false;

    for (const callback of callbacks) {
      await callback(...args);
    }

    return true;
  }
}
