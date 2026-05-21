import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IFsProgressRuntime } from "./IFsProgressRuntime";

export interface IFsProgressFailRuntime extends IAppProcess {
  prog?: IFsProgressRuntime;
  errors: string[];
  icon: string;
  title: string;
}
