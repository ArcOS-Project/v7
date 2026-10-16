import type { App } from "$types/apps/app";
import type { ThirdPartyPropMap } from "$types/tpa/thirdparty";

export interface JsExecEngineData {
  props?: ThirdPartyPropMap;
  app?: App;
  args: any[];
  metaPath?: string;
  filePath?: string;
  workingDirectory: string;
  operationId: string;
}
