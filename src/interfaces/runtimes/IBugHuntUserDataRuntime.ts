import type { IAppProcess } from "$interfaces/IAppProcess";
import type { UserInfo } from "$types/user";
import type { HLJSApi } from "highlight.js";

export interface IBugHuntUserDataRuntime extends IAppProcess {
  data: UserInfo;
  hljs: HLJSApi;
  html: string;
}
