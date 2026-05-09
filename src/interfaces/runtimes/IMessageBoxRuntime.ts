import type { IAppProcess } from "$interfaces/IAppProcess";
import type { MessageBoxData } from "$types/messagebox";
import type { BooleanStore } from "$types/writable";

export interface IMessageBoxRuntime extends IAppProcess {
  data?: MessageBoxData;
  acted: BooleanStore;
}
