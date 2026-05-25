import type { IAppProcess } from "$interfaces/IAppProcess";

export interface ITotpAuthGuiRuntime extends IAppProcess {
  validate(code: string): boolean;
  verifyTotp(code: string): Promise<boolean>;
  cantAccess(): void;
  doDispatch(): Promise<void>;
  cancel(): Promise<void>;
}
