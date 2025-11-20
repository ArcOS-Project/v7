import { AppProcess } from "$ts/apps/process";
import { ApplicationStorage } from "$ts/apps/storage";
import type { App, AppProcessData } from "$types/app";
import { parse } from "stacktrace-parser";
import type { ParsedStackFrame, ParsedStackUrl } from "./types";
import { Env, KernelSound } from "$ts/env";

export class OopsNotifierRuntime extends AppProcess {
  data: App;
  exception: Error | PromiseRejectionEvent;
  process?: AppProcess;
  installed = false;
  parseFailed = false;
  stackFrames: ParsedStackFrame[] = [];
  URL_REGEX =
    /http(s|)\:\/\/[a-zA-Z.\:0-9]+(\/tpa\/v3\/)(?<userId>[a-zA-Z0-9]+)\/(?<timestamp>[0-9]+)\/(?<appId>[A-Za-z0-9_-]+(_|)[A-Za-z0-9_-]+)@(?<filename>[a-zA-Z0-9_-]+\.js)/gm;

  //#region LIFECYCLE

  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    data: App,
    exception: Error | PromiseRejectionEvent,
    process?: AppProcess
  ) {
    super(pid, parentPid, app);

    this.data = data;
    this.exception = exception;
    this.process = process;

    this.setSource(__SOURCE__);
  }

  async start() {
    KernelSound().playSound("arcos.dialog.error");

    try {
      this.parseStack();

      const storage = this.userDaemon?.serviceHost?.getService<ApplicationStorage>("AppStorage");

      if (storage && this.stackFrames[0].parsed?.appId) {
        const app = storage.getAppSynchronous(this.stackFrames[0].parsed.appId);
        if (app) this.data ||= app;
      }

      this.installed = !!(await storage?.getAppSynchronous(this.data.id));
    } catch {
      this.stackFrames = [];
      this.parseFailed = true;
    }
  }

  parseStack() {
    const stack = this.exception instanceof PromiseRejectionEvent ? this.exception.reason : this.exception.stack;
    if (!stack) return;

    const parsed = parse(stack);
    const regex = new RegExp(this.URL_REGEX);

    for (const frame of parsed) {
      this.stackFrames.push({
        ...frame,
        parsed: regex.exec(frame?.file || "")?.groups as ParsedStackUrl,
      });
    }
  }

  //#endregion
  //#region ACTIONS

  async details() {
    const proc = await this.userDaemon?.spawn?.spawnOverlay(
      "OopsStackTracer",
      +Env().get("shell_pid"),
      this.data,
      this.exception,
      this.process,
      this.stackFrames
    );

    if (!proc) throw new Error("OopsStackTracer: invocation failed");
  }

  async reopen() {
    if (!this.installed) return;

    await this.spawnApp(this.data.id, this.process?.parentPid || +Env().get("shell_pid"));
    this.closeWindow();
  }

  //#endregion
}
