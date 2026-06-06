import type { AppProcessData } from "$types/apps/app";
import type { ReadableStore, StringStore } from "$types/shared/writable";
import type { UserPreferencesStore } from "$types/user";
import type { IProcess } from "./IProcess";
import type { IProcessHandler } from "./modules/IProcessHandler";

// !tpa
export interface IThirdPartyProcess extends IProcess {
  workingDirectory: string;
  operationId: string;
  mutationLock: boolean;
  handler: IProcessHandler;
  app: AppProcessData;
  args: any[];
  userPreferences: UserPreferencesStore;
  windowIcon: StringStore;
  crashReason: string;
  windowTitle: ReadableStore<string>;
  componentMount: Record<string, any>;
  username: string;

  closeIfSecondInstance(): Promise<this | undefined>;
  getSingleton(): this[];
  loadCSS(path: string): Promise<void>;
}
// !endtpa
