import type { IBugHuntUserDataRuntime } from "$interfaces/runtimes/IBugHuntUserDataRuntime";
import { AppProcess } from "$ts/apps/process";
import type { AppProcessData } from "$types/app";
import type { UserInfo } from "$types/user";
import hljs, { type HLJSApi } from "highlight.js";
import json from "highlight.js/lib/languages/json";

// TODO: generalize the two dodgy UserData viewers into one good quality application
export class BugHuntUserDataRuntime extends AppProcess implements IBugHuntUserDataRuntime {
  data: UserInfo;
  hljs: HLJSApi;
  html: string;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, data: UserInfo) {
    super(pid, parentPid, app);

    this.data = data;
    this.hljs = hljs;

    this.hljs.registerLanguage("json", json);
    this.html = this.hljs.highlight(JSON.stringify(this.data, null, 2), { language: "json" }).value; // Stringify and syntax highlight user info

    this.setSource(__SOURCE__);
  }

  //#endregion
}
