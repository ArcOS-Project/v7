import type { Constructs } from "$interfaces/common";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IProcess } from "$interfaces/IProcess";
import type { ProcessKillResult } from "$types/process";

export interface IProcessInfoRuntime extends IAppProcess {
  parent?: IProcess;
  proc?: IProcess;
  procConstructor?: Constructs<IProcess>;

  kill(proc: IProcess): Promise<void>;
  killError(name: string, result: ProcessKillResult): void;
}
