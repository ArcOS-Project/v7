import { GlobalDispatcher } from "$ts/dispatch";
import type { Filesystem } from "$ts/fs";
import type { UserDaemon } from "$ts/server/user/daemon";
import { DefaultUserPreferences } from "$ts/server/user/default";
import { ContextMenuLogic } from "$ts/ui/context";
import type { AppKeyCombinations } from "$types/accelerator";
import type { ContextMenuItem } from "$types/context";
import { LogLevel } from "$types/logging";
import type { UserPreferences } from "$types/user";
import { mount } from "svelte";
import type { App, AppProcessData } from "../../types/app";
import { WaveKernel } from "../kernel";
import type { ProcessHandler } from "../process/handler";
import { Process } from "../process/instance";
import { Sleep } from "../sleep";
import { Store, type ReadableStore } from "../writable";
import { AppRuntimeError } from "./error";
import { ComponentIcon } from "$ts/images/general";
export const bannedKeys = ["tab", "pagedown", "pageup"];

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
  protected overlayStore: Record<string, App> = {};
  public acceleratorStore: AppKeyCombinations = [];
  context: ContextMenuLogic;

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

    this.windowTitle.set(app.data.metadata.name || "Application");
    this.windowIcon.set(app.data.metadata.icon || ComponentIcon);
    this.name = app.data.id;

    this.fs = this.kernel.getModule<Filesystem>("fs");
    this.globalDispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
    this.context = this.kernel.getModule<ContextMenuLogic>("context");

    const desktopProps = this.kernel.state?.stateProps["desktop"];

    if (desktopProps && desktopProps.userDaemon) {
      this.userPreferences = (
        desktopProps.userDaemon as UserDaemon
      ).preferences;
      this.username = (desktopProps.userDaemon as UserDaemon).username;
      this.userDaemon = desktopProps.userDaemon as UserDaemon;
    }

    this.startAcceleratorListener();
  }

  // Conditional function that can prohibit closing if it returns false
  async onClose() {
    return true;
  }

  async closeWindow(kill = true) {
    const canClose = this._disposed || (await this.onClose());

    if (!canClose) return;

    const elements = [
      ...document.querySelectorAll(`div.window[data-pid="${this.pid}"]`),
      ...(document.querySelectorAll(
        `div.overlay-wrapper[data-pid="${this.pid}"]`
      ) || []),
    ];

    if (!elements.length) return this.killSelf();

    for (const element of elements) {
      element.classList.add("closing");
    }

    await Sleep(400);

    if (kill) await this.killSelf();
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

  getSingleton() {
    const { renderer } = this.handler;

    return renderer?.getAppInstances(this.app.data.id, this.pid) || [];
  }

  async closeIfSecondInstance() {
    const instances = this.getSingleton();

    if (instances.length) {
      await this.killSelf();

      this.handler.renderer?.focusPid(instances[0].pid);
    }
  }

  public startAcceleratorListener() {
    this.Log("Starting listener!");

    document.addEventListener("keydown", (e) => this.processor(e));
  }

  public stopAcceleratorListener() {
    this.Log("Stopping listener!", LogLevel.warning);

    document.removeEventListener("keydown", (e) => this.processor(e));
  }

  private processor(e: KeyboardEvent) {
    if (!e.key) return;

    if (
      bannedKeys.includes(e.key.toLowerCase()) &&
      this.kernel.state?.currentState === "desktop"
    ) {
      e.preventDefault();

      return false;
    }

    this.unfocusActiveElement();

    const state = this.kernel.state?.currentState;

    if (state != "desktop") return;

    for (const combo of this.acceleratorStore) {
      const alt = combo.alt ? e.altKey : true;
      const ctrl = combo.ctrl ? e.ctrlKey : true;
      const shift = combo.shift ? e.shiftKey : true;
      /** */
      const modifiers = alt && ctrl && shift;
      /** */
      const pK = e.key.toLowerCase().trim();
      const key = combo.key?.trim().toLowerCase();
      const codedKey = String.fromCharCode(e.keyCode).toLowerCase();
      /** */
      const isFocused =
        this.handler.renderer?.focusedPid() == this.pid || combo.global;

      if (!modifiers || (key != pK && key && key != codedKey) || !isFocused)
        continue;

      combo.action(this);

      break;
    }
  }

  public unfocusActiveElement() {
    const el = document.activeElement as HTMLButtonElement;

    if (
      !el ||
      el instanceof HTMLInputElement ||
      el instanceof HTMLTextAreaElement
    )
      return;

    el.blur();
  }

  async spawnOverlay(id: string) {
    const metadata = this.overlayStore[id];

    if (!metadata) {
      this.Log(`Tried spawning non-existent overlay '${id}'`, LogLevel.error);

      return false;
    }

    return !!(await this.handler.spawn<AppProcess>(
      metadata.assets.runtime,
      this.pid,
      {
        data: { ...metadata, overlay: true },
        id,
      }
    ));
  }

  contextMenu(
    element: HTMLElement,
    optionsCallback: () => Promise<ContextMenuItem[]>
  ) {
    const taskbarAllocation = this.userPreferences().shell.taskbar.docked
      ? 40
      : 50;

    element.addEventListener("contextmenu", async (e: MouseEvent) => {
      this.context.showMenu(
        e.clientX,
        e.clientY,
        await optionsCallback(),
        taskbarAllocation
      );
    });
  }

  clickMenu(
    element: HTMLElement,
    optionsCallback: () => Promise<ContextMenuItem[]>
  ) {
    const taskbarAllocation = this.userPreferences().shell.taskbar.docked
      ? 40
      : 50;

    element.addEventListener("click", async (e: MouseEvent) => {
      const {
        x,
        y: clientY,
        height,
      } = (e.target as HTMLElement).getBoundingClientRect();

      const y = clientY + height + 2;

      this.context.showMenu(x, y, await optionsCallback(), taskbarAllocation);
    });
  }

  async spawnApp(id: string, parentPid?: number | undefined, ...args: any[]) {
    return await this.userDaemon?.spawnApp(
      id,
      parentPid ?? this.parentPid,
      ...args
    );
  }

  async spawnOverlayApp(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ) {
    return await this.userDaemon?.spawnOverlay(
      id,
      parentPid ?? this.parentPid,
      ...args
    );
  }
}
