import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ISettingsRuntime } from "./ISettingsRuntime";

export interface ISettingsOverlayRuntime extends IAppProcess {
  parentProcess: ISettingsRuntime;
}
