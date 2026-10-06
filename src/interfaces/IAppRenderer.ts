import type { AppKeyCombinations } from "$types/apps/accelerator";
import type { App, AppContextMenu, AppProcessData, ContextMenuItem, ToastMessage, WindowResizer } from "$types/apps/app";
import type { Draggable } from "$types/libraries/draggable";
import type { MaybePromise } from "$types/shared/common";
import type { LogLevel } from "$types/shared/logging";
import type { ReadableStore } from "$types/shared/writable";
import type { RenderArgs } from "$types/system/process";
import type { Constructs } from "./common";
import type { IAppProcess } from "./IAppProcess";
import type { IProcess } from "./IProcess";

// !tpa
export interface IAppRenderer extends IProcess {
  currentState: string[];
  target: HTMLDivElement;
  maxZIndex: number;
  focusedContext: ReadableStore<string>;
  state: ReadableStore<Map<string, IAppRendererContext>>;
  lastInteract?: IAppRendererContext;
  _criticalProcess: boolean;
  disposedCheck(): void;
  render(context: IAppRendererContext, renderTarget: HTMLDivElement | undefined): Promise<void>;
  _windowClasses(context: IAppRendererContext, window: HTMLDivElement, data: App): void;
  _windowEvents(context: IAppRendererContext, window: HTMLDivElement, titlebar: HTMLDivElement | undefined, data: App): void;
  focusContext(contextId: string): void;
  _renderTitlebar(context: IAppRendererContext): HTMLDivElement | undefined;
  _renderAltMenu(context: IAppRendererContext): HTMLDivElement;
  _resizeGrabbers(context: IAppRendererContext, window: HTMLDivElement): undefined;
  _resizer(window: HTMLDivElement, resizer: WindowResizer): HTMLDivElement;
  remove(contextId: string): void;
  removeAllOfProcess(pid: number): void;
  toggleMaximize(contextId: string): void;
  updateDraggableDisabledState(context: IAppRendererContext, window: HTMLDivElement): void;
  unMinimize(contextId: string): void;
  unsnapWindow(contextId: string, dispatch?: boolean): void;
  snapWindow(contextId: string, variant: string): void;
  toggleMinimize(contextId: string): void;
  toggleFullscreen(contextId: string): void;
  getAppInstances(id: string, originPid?: number): IAppProcess[];
  notifyCrash(data: App, reason: any, process?: IAppProcess): Promise<void>;
  getContextsOfPid(pid: number): IAppRendererContext[];
  determineParentContext(pid: number): IAppRendererContext | undefined;
}

export interface IAppRendererContext<T extends IAppProcess = IAppProcess> {
  crashReason?: string;
  ownerPid: number;
  parentContextId?: string;
  data: App;
  appId: string;
  identifier: string;
  desktop?: string;
  get process(): T | undefined;
  get _disposed(): boolean;
  windowTitle: ReadableStore<string>;
  windowIcon: ReadableStore<string>;
  toastMessage: ReadableStore<ToastMessage | undefined>;
  componentMount?: Record<string, any>;
  draggable: Draggable | undefined;
  renderArgs: RenderArgs;
  acceleratorStore: AppKeyCombinations;
  readonly contextMenu: AppContextMenu;
  altMenu: ReadableStore<ContextMenuItem[]>;
  windowFullscreen: ReadableStore<boolean>;
  blinking: ReadableStore<boolean>;
  overridePopulatable: boolean;
  name: string;
  CrashDetection(): Promise<void>;
  blink(): void;
  unfocusActiveElement(): void;
  getWindow(): HTMLDivElement;
  getBody(): HTMLDivElement;
  hasOverlays(): boolean;
  ShowToast(toast: ToastMessage, durationMs?: number): Promise<void>;
  HideToast(): Promise<void>;
  closeWindow(): Promise<boolean | void>;
  render(args: RenderArgs): MaybePromise<any>;
  __render__(body: HTMLDivElement): Promise<void>;
  __start(renderTarget?: HTMLDivElement | undefined): Promise<void>
  __stop(): Promise<void>;
  onClose(): Promise<boolean>;
}

export interface AppRendererContextOptions<T extends IAppProcess = IAppProcess> {
  parentContextId?: string;
  appId: string;
  data: App;
  process: T;
  logBridge(message: string, logLevel?: LogLevel): void;
  desktop?: string;
}

export interface IAppRendererContextConstructor<T extends IAppProcess = IAppProcess> extends Constructs<IAppRendererContext<T>> {
  CreateContext<R extends IAppProcess = T>(process: R, options: AppRendererContextOptions): IAppRendererContext<R>;
  Legacy_CreateFromAppProcessData<R extends IAppProcess = T>(process: R, data: AppProcessData): IAppRendererContext<R>;
}

// !endtpa
