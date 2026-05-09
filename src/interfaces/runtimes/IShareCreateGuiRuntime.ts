import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IShareManager } from "$interfaces/services/IShareManager";
import type { ReadableStore } from "$types/writable";

export interface IShareCreateGuiRuntime extends IAppProcess {
  shareName: ReadableStore<string>;
  sharePassword: ReadableStore<string>;
  shares: IShareManager;

  go(): Promise<void>;
  myShares(): Promise<void>;
}
