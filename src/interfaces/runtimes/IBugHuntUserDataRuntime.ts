import type { IAppProcess } from "$interfaces/IAppProcess";
import type { UserInfo } from "$types/user";
import type { HLJSApi } from "highlight.js";

// !tpa-prop
export interface IBugHuntUserDataRuntime extends IAppProcess {
  data: UserInfo;
  hljs: HLJSApi;
  html: string;
}
