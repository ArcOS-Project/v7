import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IBaseService } from "$interfaces/IServiceHost";
import type { Service } from "$types/service";
import type { ReadableStore, Unsubscriber } from "$types/writable";

export interface IServiceInfoRuntime extends IAppProcess {
  serviceId: string;
  service: ReadableStore<Service | undefined>;
  serviceProcess: ReadableStore<IBaseService | undefined>;
  serviceSubscriber?: Unsubscriber;
  start(): Promise<false | undefined>;
  stop(): Promise<void>;
  toggleRunningState(): Promise<void>;
}
