import { mount } from "svelte";
import type { AppProcessData } from "../../types/app";
import { LogLevel } from "../../types/logging";
import { Log } from "../kernel/logging";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { Store } from "../writable";
import { AppRuntimeError } from "./error";
import { WaveKernel } from "../kernel";

export class AppProcess extends Process {
  crashReason = "";
  windowTitle = Store("");
  app: AppProcessData;
  componentMount: Record<string, any> = {};

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid);

    this.app = {
      data: JSON.parse(JSON.stringify({ ...app.data })),
      meta: JSON.parse(JSON.stringify({ ...app.data })),
      id: app.data.id,
    };

    this.windowTitle.set(app.data.metadata.name);
    this.name = app.data.id;
  }

  // Conditional function that can prohibit closing if it returns false
  async onClose() {
    return true;
  }

  async closeWindow() {
    const canClose = this._disposed || (await this.onClose());

    if (!canClose) return;

    const elements = [
      ...document.querySelectorAll(`div.window[data-pid="${this.pid}"]`),
      ...(document.querySelectorAll(
        `button.opened-app[data-pid="${this.pid}"]`
      ) || []),
    ];

    if (!elements.length) return this.killSelf();

    for (const element of elements) {
      element.classList.add("closing");
    }

    await Sleep(300);

    this.killSelf();
  }

  async CrashDetection() {
    while (true) {
      if (this.crashReason) {
        throw new AppRuntimeError(this.crashReason);
      }

      if (this._disposed) {
        throw new Error("Disposed.");
      }

      await Sleep(1);
    }
  }

  safe(callback: (...a: any[]) => any) {
    return (...args: any[]) => {
      try {
        if (this._disposed) return;

        callback(...args);
      } catch (e) {
        Log(
          `AppProcess::'${this.pid}'.safe`,
          (e as any).message,
          LogLevel.error
        );

        this.crashReason = (e as any).stack;
      }
    };
  }

  async render() {
    /** */
  }

  async __render__(body: HTMLDivElement) {
    const component = this.app.data.assets.component;

    this.componentMount = mount(component, {
      target: body,
      props: {
        process: this,
        pid: this.pid,
        kernel: WaveKernel.get(),
        handler: this.handler,
        app: this.app.data,
        windowTitle: this.windowTitle,
      },
    });

    await this.render();
  }
}
