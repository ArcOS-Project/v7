import type { IAppProcess } from "$interfaces/IAppProcess";
import type { AppRendererContextOptions, IAppRendererContext } from "$interfaces/IAppRenderer";
import { Daemon, Kernel, Stack, State, SysDispatch } from "$ts/env";
import { Sleep } from "$ts/sleep";
import { cloneAppMeta } from "$ts/util/apps";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { AppKeyCombinations } from "$types/apps/accelerator";
import type { App, AppContextMenu, AppProcessData, ContextMenuItem, ToastMessage } from "$types/apps/app";
import type { Draggable } from "$types/libraries/draggable";
import { LogLevel } from "$types/shared/logging";
import type { RenderArgs } from "$types/system/process";
import { mount } from "svelte";
import { AppRuntimeError } from "./error";
import { KEY_IGNORE_LIST } from "./process";

export class AppRendererContext<T extends IAppProcess = IAppProcess> implements IAppRendererContext<T> {
  windowTitle = Store("");
  windowIcon = Store("");
  public name: string = "";
  public renderArgs: RenderArgs = {};
  public acceleratorStore: AppKeyCombinations = [];
  public readonly contextMenu: AppContextMenu = {};
  public altMenu = Store<ContextMenuItem[]>([]);
  public windowFullscreen = Store<boolean>(false);
  public blinking = Store<boolean>(false);
  public toastMessage = Store<ToastMessage | undefined>();
  public crashReason: string = "";
  private toastTimeout?: NodeJS.Timeout;
  private providedProcess?: T;
  overridePopulatable: boolean = false;

  ownerPid: number;
  parentContextId?: string | undefined;
  data: App;
  appId: string;
  identifier: string;
  desktop?: string | undefined;
  componentMount?: Record<string, any> | undefined;
  draggable: Draggable | undefined;

  get process(): T | undefined {
    return Stack.getProcess(this.ownerPid) || this.providedProcess;
  }

  get _disposed() {
    if (!this.process) return true;

    return this.process._disposed;
  }

  protected Log: (message: string, logLevel?: LogLevel) => void;

  constructor(process: IAppProcess, rendererContextOptions: AppRendererContextOptions<T>) {
    this.ownerPid = process.pid;
    this.parentContextId = rendererContextOptions.parentContextId;
    this.appId = rendererContextOptions.appId;
    this.identifier = UUID();
    this.desktop = rendererContextOptions.desktop;
    this.data = cloneAppMeta(rendererContextOptions.data);
    this.Log = rendererContextOptions.logBridge;
    this.name = `AppRendererContext::${this.appId}`;
    this.providedProcess = rendererContextOptions.process;
  }

  async __start(renderTarget?: HTMLDivElement) {
    await Stack.renderer!.render(this, renderTarget);
    Stack.renderer!.lastInteract = this;

    this.windowTitle.set(this.data.metadata.name);
    this.windowIcon.set(`@app::${this.appId}`);

    SysDispatch.subscribe("window-unfullscreen", ([contextId]) => {
      if (this.identifier === contextId) this.windowFullscreen.set(false);
    });

    SysDispatch.subscribe("window-fullscreen", ([contextId]) => {
      if (this.identifier === contextId) this.windowFullscreen.set(true);
    });
  }

  async __stop() {
    this.stopKeyboardShortcutListener();
  }

  async CrashDetection() {
    while (true) {
      if (this.crashReason) throw new AppRuntimeError(this.crashReason);
      if (this._disposed) break;

      await Sleep(1); // prevent hanging bleh
    }
  }

  blink(): void {
    this.blinking.set(!this.blinking());
  }

  public unfocusActiveElement() {
    const el = document.activeElement as HTMLButtonElement;
    if (!el || el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el.isContentEditable) return;

    el.blur();
  }

  getWindow() {
    if (this.process?.STATE === "starting") {
      throw new AppRuntimeError("Violation: Called getWindow during process startup: there's no window at this point.");
    }

    return document.querySelector<HTMLDivElement>(`div.window[data-wcontext="${this.identifier}"]`)!;
  }

  getBody() {
    if (this.process?.STATE === "starting") {
      throw new AppRuntimeError("Violation: Called getBody during process startup: there's no window body at this point.");
    }

    return document.querySelector<HTMLDivElement>(`div.window[data-wcontext="${this.identifier}"] > div.body`)!;
  }

  hasOverlays(): boolean {
    return !!this.getWindow()?.querySelectorAll("div.window-overlay-wrapper")?.length;
  }

  async ShowToast(toast: ToastMessage, durationMs: number = 3000) {
    await this.HideToast();

    this.toastMessage.set(toast);
    this.toastTimeout = setTimeout(() => {
      this.toastMessage.set(undefined);
    }, durationMs);
  }

  async HideToast() {
    this.toastMessage.set(undefined);
    clearTimeout(this.toastTimeout);
    await Sleep(200); // Delay to wait for the hide animation
  }

  async closeWindow() {
    this.Log(`Closing window ${this.identifier} of ${this.process?.pid}`);

    const canClose = this._disposed || (this.onClose ? await this.onClose() : true);

    if (!canClose) {
      this.Log(`Can't close`);
      return false;
    }

    if (this.getWindow()?.classList.contains("fullscreen"))
      SysDispatch.dispatch("window-unfullscreen", [this.identifier, this.desktop]);

    const elements = [
      ...document.querySelectorAll(`div.window[data-wcontext="${this.identifier}"]`),
      ...(document.querySelectorAll(`div.window-overlay-wrapper[data-wcontext="${this.identifier}"]`) || []),
      ...(document.querySelectorAll(`button.opened-app[data-wcontext="${this.identifier}"]`) || []),
    ];

    if (!elements.length) {
      this.Log(`No elements, calling killSelf`);

      // TODO: Not sure what to do here, onDestroy?
      return;
    }

    SysDispatch.dispatch("window-closing", [this.identifier]);

    for (const element of elements) {
      element.classList.add("closing");
    }

    await Sleep(400);
    Stack.renderer?.remove(this.identifier);

    return true;
  }

  render(args: RenderArgs) {
    /**/
  }

  async __render__(body: HTMLDivElement): Promise<void> {
    this.startKeyboardShortcutListener();

    this.Log("Rendering window contents");

    const component = this.data.assets.component;

    if (component)
      this.componentMount = mount(component, {
        target: body,
        props: {
          process: this.process!,
          pid: this.process?.pid,
          context: this,
          kernel: Kernel,
          app: this.data,
          windowTitle: this.windowTitle,
          windowIcon: this.windowIcon,
        },
      });

    await this.render(this.renderArgs);
  }

  async onClose(): Promise<boolean> {
    return true;
  }

  public static CreateContext<R extends IAppProcess = IAppProcess>(
    process: R,
    options: AppRendererContextOptions<R>
  ): IAppRendererContext<R> {
    return new AppRendererContext<R>(process, options);
  }

  public static InferPrimaryContext<R extends IAppProcess = IAppProcess>(
    process: R,
    logBridge: (message: string, logLevel?: LogLevel) => void,
    parentContextId?: string
  ): IAppRendererContext<R> {
    class InferredAppRendererContext<R extends IAppProcess = IAppProcess> extends AppRendererContext<R> {
      constructor(process: IAppProcess, rendererContextOptions: AppRendererContextOptions<R>) {
        super(process, rendererContextOptions);

        if (process.render) {
          this.render = process.render.bind(process);
        }

        if (process.__render__) {
          this.__render__ = process.__render__.bind(process);
        }
      }
    }

    return new InferredAppRendererContext<R>(process, {
      appId: process.app.id,
      data: process.app,
      logBridge,
      process,
      desktop: process.desktop,
      parentContextId: parentContextId ?? Stack.renderer!.determineParentContext(process.parentPid)?.identifier,
    });
  }

  public static Legacy_CreateFromAppProcessData<R extends IAppProcess = IAppProcess>(
    process: R,
    processData: AppProcessData,
    logBridge: (message: string, logLevel?: LogLevel) => void,
    parentContextId?: string
  ): IAppRendererContext<R> {
    return this.CreateContext(process, {
      parentContextId,
      appId: processData.id,
      data: processData.data,
      logBridge,
      desktop: processData.desktop,
      process,
    });
  }

  private async processKeyboardEvent(e: KeyboardEvent) {
    if (!e.key || this.hasOverlays() || this._disposed) return;

    const textareas = [...(this.getWindow()?.querySelectorAll("textarea, [contenteditable]") ?? [])];
    const focusingTextArea = !!textareas.find((element) => document.activeElement === element);

    if (!focusingTextArea && KEY_IGNORE_LIST.includes(e.key.toLowerCase()) && State?.currentState === "desktop") {
      e.preventDefault();

      return false;
    }

    this.unfocusActiveElement();

    if (State?.currentState != "desktop" || this._disposed) return;

    const combo = this.acceleratorStore.find((combo) => {
      const ctrlKey = combo.ctrl ? e.ctrlKey : true;
      const shiftKey = combo.shift ? e.shiftKey : true;
      const altKey = combo.alt ? e.altKey : true;
      const modifiersConditionMet = altKey && ctrlKey && shiftKey;
      const focusConditionMet = Stack.renderer?.focusedContext() === this.identifier || combo.global;

      const comboKey = combo.key?.trim().toLowerCase();
      const pressedKey = String.fromCharCode(e.keyCode).toLowerCase().trim();

      return modifiersConditionMet && comboKey === pressedKey && focusConditionMet;
    });

    if (combo && !Daemon.elevation?._elevating) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();

      await combo.action(this, e);
    }
  }

  public startKeyboardShortcutListener() {
    this.Log("Starting keyboard shortcut listener!");

    document.addEventListener("keydown", (e) => this.processKeyboardEvent(e));
  }

  public stopKeyboardShortcutListener() {
    this.Log("Stopping keyboard shortcut listener!", LogLevel.warning);

    document.removeEventListener("keydown", (e) => this.processKeyboardEvent(e));
  }
}
