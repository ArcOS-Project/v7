import type { IAppProcess } from "$interfaces/app";
import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Env, SoundBus } from "$ts/env";
import { ApplicationStorage } from "$ts/servicehost/services/AppStorage";
import { ErrorUtils } from "$ts/util/error";
import type { App, AppProcessData } from "$types/app";
import type { ParsedStackFrame } from "$types/error";

export class OopsNotifierRuntime extends AppProcess {
  data: App;
  exception: Error | PromiseRejectionEvent;
  process?: IAppProcess;
  installed = false;
  parseFailed = false;
  stackFrames: ParsedStackFrame[] = [];

  //#region LIFECYCLE

  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    data: App,
    exception: Error | PromiseRejectionEvent,
    process?: IAppProcess
  ) {
    super(pid, parentPid, app);

    this.data = data;
    this.exception = exception;
    this.process = process;

    this.setSource(__SOURCE__);
  }

  async start() {
    SoundBus.playSound("arcos.dialog.error");

    try {
      this.stackFrames = ErrorUtils.parseStack(this.exception);

      const storage = Daemon?.serviceHost?.getService<ApplicationStorage>("AppStorage");

      if (storage && this.stackFrames[0].parsed?.appId) {
        const app = storage.getAppSynchronous(this.stackFrames[0].parsed.appId);
        if (app) this.data ||= app;
      }

      this.installed = !!storage?.getAppSynchronous(this.data.id);
    } catch {
      this.stackFrames = [];
      this.parseFailed = true;
    }
  }

  //#endregion
  //#region ACTIONS

  async details() {
    this.Log(`Invoking the power of OopsStackTracer to bestow upon the user the details of the error that lies within`);

    const proc = await Daemon?.spawn?.spawnApp(
      "OopsStackTracer",
      +Env.get("shell_pid"),
      { asOverlay: true },
      this.data,
      this.exception,
      this.process,
      this.stackFrames
    );

    if (!proc) throw new Error("OopsStackTracer: invocation failed");
  }

  async reopen() {
    this.Log(`Reopening crashed application!`);

    if (!this.installed) return;

    await this.spawnApp(this.data.id, this.process?.parentPid || +Env.get("shell_pid"));
    this.closeWindow();
  }

  //#endregion
}
