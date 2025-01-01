import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Store } from "../writable";
import { AppRendererError } from "./error";
import type { AppProcess } from "./process";

export class AppRenderer extends Process {
  currentState: number[] = [];
  target;
  maxZIndex = 1e6;
  focusedPid = Store(-1);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    target: string
  ) {
    super(handler, pid, parentPid);

    const targetDiv = document.getElementById(target);

    if (!targetDiv)
      throw new AppRendererError(
        "Tried to create an app renderer on a non existent element"
      );

    this.target = targetDiv;
    handler.rendererPid = this.pid;
  }

  disposedCheck() {
    if (this._disposed) {
      throw new AppRendererError(`AppRenderer with PID ${this.pid} was killed`);
    }
  }

  sync() {
    this.disposedCheck();
    this.syncNewbies();
    this.syncDisposed();
  }

  syncNewbies() {}

  syncDisposed() {}

  async render(process: AppProcess) {}

  _windowClasses(window: HTMLDivElement, data: any) {}

  centerWindow(pid: number) {}

  _windowEvents(
    pid: number,
    window: HTMLDivElement,
    titlebar: HTMLDivElement,
    data: any
  ) {}

  focusPid(pid: number) {}

  async _windowHtml(body: HTMLDivElement, data: any) {}

  _renderTitlebar(process: AppProcess) {}

  async remove(pid: number) {}

  toggleMaximize(pid: number) {}

  unMinimize(pid: number) {}

  toggleMinimize(pid: number) {}

  getAppInstances(id: string, originPid?: number) {}
}
