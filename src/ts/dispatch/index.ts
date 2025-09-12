import type { SystemDispatchResult } from "$types/dispatch";
import type { ConstructedWaveKernel } from "$types/kernel";
import { LogLevel } from "$types/logging";
import { KernelModule } from "../kernel/module";
import { KnownSystemDispatchers, SystemOnlyDispatches } from "./store";

export class SystemDispatch extends KernelModule {
  public subscribers: Record<string, Record<number, (data: any) => void>> = {};

  //#region LIFECYCLE

  constructor(kernel: ConstructedWaveKernel, id: string) {
    super(kernel, id);

    this.Log("Creating new SystemDispatch");
  }

  //#endregion

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number {
    this.isKmod();

    const id = Math.floor(Math.random() * 1e6);

    if (!this.subscribers[event]) this.subscribers[event] = {};

    if (this.subscribers[event][id]) return this.subscribe(event, callback); // get another ID

    this.Log(`Subscribing on ID ${id} to event ${event}`);

    if (!this.subscribers[event]) this.subscribers[event] = { [id]: callback };
    else this.subscribers[event][id] = callback;

    if (!KnownSystemDispatchers.includes(event))
      this.Log(`Subscribing to unknown event ${event} on Global Dispatch. Don't do that.`, LogLevel.warning);

    return id;
  }

  unsubscribeId(event: string, id: number) {
    this.isKmod();

    this.Log(`Unsubscribing ID ${id} of event ${event}`);

    delete this.subscribers[event][id];
  }

  discardEvent(event: string) {
    this.isKmod();

    this.Log(`Discarding event ${event}`);

    delete this.subscribers[event];
  }

  dispatch<T = any[]>(caller: string, data?: T, system = true): SystemDispatchResult {
    this.isKmod();

    this.Log(`Dispatching ${caller}`);

    const callers = this.subscribers[caller];

    if (!system && SystemOnlyDispatches.includes(caller)) {
      this.Log("Not allowing user to dispatch system-only event", LogLevel.error);

      return "err_systemOnly";
    }

    if (!callers) return "err_unknownCaller";

    const callbacks = [...Object.values(callers)];

    for (const callback of callbacks) {
      callback(data);
    }

    if (!KnownSystemDispatchers.includes(caller))
      this.Log(`Dispatching unknown event ${caller} over Global Dispatch. Don't do that.`, LogLevel.warning);

    return "success";
  }
}
