import type { IBaseService } from "$interfaces/IServiceHost";
import type { JsExecEngineData } from "$ts/servicehost/services/JsExec/engine";
import type { App } from "$types/apps/app";

// !tpa
export interface IJsExecService extends IBaseService {
  start(): Promise<any>;
  getContents(engine: JsExecEngineData): Promise<any>;
  setupEngine(filePath: string, app?: App, metaPath?: string, ...args: any[]): JsExecEngineData;
  Invoke(filePath: string, app?: App, metaPath?: string, ...args: any[]): Promise<any>;
}
