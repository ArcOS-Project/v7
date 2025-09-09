import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import type { UserInfo } from "$types/user";
import hljs, { type HLJSApi } from "highlight.js";
import json from "highlight.js/lib/languages/json";

export class BugHuntUserDataRuntime extends AppProcess {
  data: UserInfo;
  hljs: HLJSApi;
  html: string;

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData, data: UserInfo) {
    super(handler, pid, parentPid, app);

    this.data = data;
    this.hljs = hljs;

    this.hljs.registerLanguage("json", json);
    this.html = this.hljs.highlight(JSON.stringify(this.data, null, 2), { language: "json" }).value;
  }

  //#endregion
}
