import type { PswdResetPage } from "$apps/components/pswdresetwizard/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { BooleanStore, ReadableStore, StringStore } from "$types/shared/writable";
import type { INewLoginAppRuntime } from "./INewLoginAppRuntime";

export interface IPswdResetWizardRuntime extends IAppProcess {
  RecoveryUsername: StringStore;
  RecoveryCode: StringStore;
  NewPassword: StringStore;

  Finished: BooleanStore;
  Loading: BooleanStore;
  CurrentPage: ReadableStore<PswdResetPage | undefined>;
  ErrorMessage: StringStore;

  get LoginRuntime(): INewLoginAppRuntime;

  DoSendEmail(): Promise<void>;
  DoVerify(): Promise<void>;
  DoChangePassword(): Promise<void>;
  SwitchPage(pageId: string): void;
}
