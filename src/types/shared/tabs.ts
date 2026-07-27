import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IBaseTab } from "$interfaces/ITabHandler";

export interface TabHandlerConstructorOptions<
  Proc extends IAppProcess = IAppProcess,
  TabType extends IBaseTab<Proc> = IBaseTab<Proc>,
> {
  newTab?(): Promise<ICommandResult<TabType>>;
}

export enum TabState {
  Normal = 0,
  Pinned = 1,
  Temporary = 2,
}
