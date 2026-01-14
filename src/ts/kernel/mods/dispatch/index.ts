import type { SystemDispatchResult } from "$types/dispatch";
import type { ConstructedWaveKernel } from "$types/kernel";
import { LogLevel } from "$types/logging";
import { KernelModule } from "../../module";
import { KnownSystemDispatchers, SystemOnlyDispatches } from "./store";

export class SystemDispatch extends KernelModule {
  public subscribers: Record<string, Record<number, (data: any) => void>> = {};

  //#region LIFECYCLE

  constructor(kernel: ConstructedWaveKernel, id: string) {
    super(kernel, id);
  }

  //#endregion

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number {
    this.isKmod();

    const id = Math.floor(Math.random() * 1e6);

    if (!this.subscribers[event]) this.subscribers[event] = {};

    if (this.subscribers[event][id]) return this.subscribe(event, callback); // get another ID

    if (!this.subscribers[event]) this.subscribers[event] = { [id]: callback };
    else this.subscribers[event][id] = callback;

    return id;
  }

  unsubscribeId(event: string, id: number) {
    this.isKmod();

    delete this.subscribers[event][id];
  }

  discardEvent(event: string) {
    this.isKmod();

    delete this.subscribers[event];
  }

  dispatch<T = any[]>(caller: string, data?: T, system = true): SystemDispatchResult {
    this.isKmod();

    const callers = this.subscribers[caller];

    if (!system && SystemOnlyDispatches.includes(caller)) {
      return "err_systemOnly";
    }

    if (!callers) return "err_unknownCaller";

    const callbacks = [...Object.values(callers)];

    for (const callback of callbacks) {
      callback(data);
    }

    return "success";
  }
}
