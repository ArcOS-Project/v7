import type { Constructs } from "$interfaces/common";
import type { IProcess } from "$interfaces/IProcess";
import type { App, AppMetadata } from "./app";

export interface TpaSpawnEntrypointResult<T = any> {
  runtime?: Constructs<IProcess>;
  returnValue?: T;
}

export interface InstalledApp extends App {
  metadata: AppMetadata;
  tpaPath: string;
}

export type ScriptedApp = Omit<App, "assets">;
