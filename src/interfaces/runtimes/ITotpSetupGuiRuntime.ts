import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/writable";

export interface ITotpSetupGuiRuntime extends IAppProcess {
  code: ReadableStore<string>;
  url: ReadableStore<string>;

  validate(): boolean;
  activateTotp(): Promise<boolean>;
}
