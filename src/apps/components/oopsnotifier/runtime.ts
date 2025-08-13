import { AppProcess } from "$ts/apps/process";
import { ApplicationStorage } from "$ts/apps/storage";
import type { ProcessHandler } from "$ts/process/handler";
import type { App, AppProcessData } from "$types/app";
import { parse } from "stacktrace-parser";
import { OopsStackTracerApp } from "../oopsstacktracer/metadata";
import { OopsStackTracerRuntime } from "../oopsstacktracer/runtime";
import type { ParsedStackFrame, ParsedStackUrl } from "./types";

export class OopsNotifierRuntime extends AppProcess {
  data: App;
  exception: Error | PromiseRejectionEvent;
  process?: AppProcess;
  installed = false;
  stackFrames: ParsedStackFrame[] = [];
  URL_REGEX =
    /http(s|)\:\/\/[a-zA-Z.\:0-9]+(\/tpa\/v3\/)(?<userId>[a-zA-Z0-9]+)\/(?<timestamp>[0-9]+)\/(?<appId>[A-Za-z0-9_-]+(_|)[A-Za-z0-9_-]+)@(?<filename>[a-zA-Z0-9_-]+\.js)/gm;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    data: App,
    exception: Error | PromiseRejectionEvent,
    process?: AppProcess
  ) {
    super(handler, pid, parentPid, app);

    this.data = data;
    this.exception = exception;
    this.process = process;
  }

  async start() {
    this.installed = !!(await this.userDaemon?.serviceHost
      ?.getService<ApplicationStorage>("AppStorage")
      ?.getAppById(this.data.id));

    this.parseStack();

    this.soundBus.playSound("arcos.dialog.error");
  }

  async details() {
    const proc = await this.handler.spawn<OopsStackTracerRuntime>(
      OopsStackTracerRuntime,
      undefined,
      +this.env.get("shell_pid"),
      {
        data: { ...OopsStackTracerApp, overlay: true },
        id: OopsStackTracerApp.id,
        desktop: undefined,
      },
      this.data,
      this.exception,
      this.process,
      this.stackFrames
    );

    if (!proc) throw new Error("Failed to spawn OopsStackTracer");
  }

  async reopen() {
    if (!this.installed) return;

    await this.spawnApp(this.data.id, this.process?.parentPid || +this.env.get("shell_pid"));
    this.closeWindow();
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
}
