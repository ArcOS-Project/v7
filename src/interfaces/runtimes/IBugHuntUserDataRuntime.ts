import type { IAppProcess } from "$interfaces/IAppProcess";
import type { UserInfo } from "$types/user";

// !tpa
export interface IBugHuntUserDataRuntime extends IAppProcess {
  data: UserInfo;
}
