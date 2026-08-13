import type { SetupState } from "$apps/components/totpsetupgui/store";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
export interface ITotpSetupGuiRuntime extends IAppProcess {
  code: ReadableStore<string>;
  url: ReadableStore<string>;
  setupState: ReadableStore<SetupState>;
  firstTimeSetup: boolean;

  validate(): boolean;
  activateTotp(): Promise<boolean>;
}
