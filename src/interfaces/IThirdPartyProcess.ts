import type { AppProcessData } from "$types/apps/app";
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

  closeIfSecondInstance(): Promise<this | undefined>;
  getSingleton(): this[];
}
// !endtpa
