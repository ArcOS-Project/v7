import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ISettingsRuntime } from "./ISettingsRuntime";

// !tpa
export interface ISettingsOverlayRuntime extends IAppProcess {
  parentProcess: ISettingsRuntime;
}
