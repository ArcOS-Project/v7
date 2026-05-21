import type { ExitAction } from "$apps/components/exit/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { StringStore } from "$types/writable";

export interface IExitRuntime extends IAppProcess {
  selected: StringStore;

  go(action: ExitAction | undefined, alternate?: boolean): Promise<void>;
}
