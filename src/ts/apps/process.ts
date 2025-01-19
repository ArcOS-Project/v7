import type { UserDaemon } from "$ts/server/user/daemon";
import { DefaultUserPreferences } from "$ts/server/user/default";
import type { UserPreferences } from "$types/user";
import { mount } from "svelte";
import type { AppProcessData } from "../../types/app";
import { WaveKernel } from "../kernel";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { Store, type ReadableStore } from "../writable";
import { AppRuntimeError } from "./error";
import type { Filesystem } from "$ts/fs";
import { GlobalDispatcher } from "$ts/dispatch";

export class AppProcess extends Process {
  crashReason = "";
  windowTitle = Store("");
  windowIcon = Store("");
  app: AppProcessData;
  componentMount: Record<string, any> = {};
  userPreferences: ReadableStore<UserPreferences> = Store<UserPreferences>(
    DefaultUserPreferences
  );
  username: string = "";
  fs: Filesystem;
  globalDispatch: GlobalDispatcher;
  userDaemon: UserDaemon | undefined;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    ...args: any[]
  ) {
    super(handler, pid, parentPid);

    this.app = {
      data: { ...app.data },
      id: app.data.id,
    };

    this.windowTitle.set(app.data.metadata.name);
    this.windowIcon.set(app.data.metadata.icon);
    this.name = app.data.id;

    this.fs = this.kernel.getModule<Filesystem>("fs");
    this.globalDispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");

    const desktopProps = this.kernel.state?.stateProps["desktop"];

    if (desktopProps && desktopProps.userDaemon) {
      this.userPreferences = (
        desktopProps.userDaemon as UserDaemon
      ).preferences;
      this.username = (desktopProps.userDaemon as UserDaemon).username;
      this.userDaemon = desktopProps.userDaemon as UserDaemon;
    }
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
      ...(document.querySelectorAll(
        `div.overlay-wrapper[data-pid="${this.pid}"]`
      ) || []),
    ];

    if (!elements.length) return this.killSelf();

    for (const element of elements) {
      element.classList.add("closing");
    }

    await Sleep(400);

    await this.killSelf();
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

  async render() {
    /** */
  }

  async __render__(body: HTMLDivElement) {
    this.Log("Rendering window contents");
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
        windowIcon: this.windowIcon,
      },
    });

    await this.render();
  }
}
