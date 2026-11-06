import type { IAppProcess } from "$interfaces/IAppProcess";
import type { AppProcessSpawnOptions } from "$types/apps/app";

export interface IGenericObjectViewerRuntime extends IAppProcess {
  data: object;
  withProto?: boolean;
}

export interface GenericObjectViewerOptions {
  windowTitle?: string;
  windowIcon?: string;
  dataName?: string;
  spawnOptions?: AppProcessSpawnOptions;
}
