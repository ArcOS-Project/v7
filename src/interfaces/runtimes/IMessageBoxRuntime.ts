import type { IAppProcess } from "$interfaces/IAppProcess";
import type { MessageBoxData } from "$types/shared/messagebox";
import type { BooleanStore } from "$types/shared/writable";

// !tpa
export interface IMessageBoxRuntime extends IAppProcess {
  data?: MessageBoxData;
  acted: BooleanStore;
}
