import type { BugHuntCreatorOptions } from "$apps/user/bughuntcreator/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IBugHuntUserSpaceProcess } from "$interfaces/services/IBugHuntUserSpaceProcess";
import type { BugHuntProc } from "$types/server/bughunt";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
export interface IBugHuntCreatorRuntime extends IAppProcess {
  parent: BugHuntProc | undefined;
  title: ReadableStore<string>;
  body: ReadableStore<string>;
  loading: ReadableStore<boolean>;
  overrideOptions: BugHuntCreatorOptions | undefined;
  bughunt: IBugHuntUserSpaceProcess;

  Send(): Promise<void>;
  dataPrivacy(): Promise<void>;
}
