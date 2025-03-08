import type { GlobalDispatchResult } from "$types/dispatch";
import { LogLevel } from "$types/logging";
import type { WaveKernel } from "../kernel";
import { KernelModule } from "../kernel/module";
import { KnownGlobalDispatchers, SystemOnlyDispatches } from "./store";

export class GlobalDispatcher extends KernelModule {
  public subscribers: Record<string, Record<number, (data: any) => void>> = {};

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.Log("Creating new GlobalDispatcher");
  }

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    const id = Math.floor(Math.random() * 1e6);

    if (!this.subscribers[event]) this.subscribers[event] = {};

    if (this.subscribers[event][id]) return this.subscribe(event, callback); // get another ID

    this.Log(`Subscribing on ID ${id} to event ${event}`);

    if (!this.subscribers[event]) this.subscribers[event] = { [id]: callback };
    else this.subscribers[event][id] = callback;

    if (!KnownGlobalDispatchers.includes(event))
      this.Log(`Subscribing to unknown event ${event} on Global Dispatch. Don't do that.`, LogLevel.warning);

    return id;
  }

  unsubscribeId(event: string, id: number) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Unsubscribing ID ${id} of event ${event}`);

    delete this.subscribers[event][id];
  }

  discardEvent(event: string) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log(`Discarding event ${event}`);

    delete this.subscribers[event];
  }

  dispatch<T = any[]>(caller: string, data?: T, system = true): GlobalDispatchResult {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

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

    if (!KnownGlobalDispatchers.includes(caller))
      this.Log(`Dispatching unknown event ${caller} over Global Dispatch. Don't do that.`, LogLevel.warning);

    return "success";
  }
}
