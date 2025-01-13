import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { AppProcess } from "./process";

export class ScriptedAppProcess extends AppProcess {
  public bodyStore = Store<HTMLDivElement>();
  public body: HTMLDivElement | undefined;
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    ...args: any[]
  ) {
    super(handler, pid, parentPid, app, ...args);
  }

  override async __render__() {
    await this.render();
    const body =
      (document.querySelector(
        `div.window[data-pid="${this.pid}"] > div.body`
      ) as HTMLDivElement) || undefined;

    this.bodyStore.set(body);
    this.body = body;
  }
}
