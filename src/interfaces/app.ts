import type { AppKeyCombinations } from "$types/accelerator";
import type { AppContextMenu, AppProcessData, ContextMenuItem, ToastMessage } from "$types/app";
import type { MaybePromise } from "$types/common";
import type { RenderArgs } from "$types/process";
import type { UserPreferences } from "$types/user";
import type { ReadableStore } from "$types/writable";
import type { Draggable } from "@neodrag/vanilla";
import type { IProcess } from "./process";
import type { IApplicationStorage } from "./services/AppStorage";
import type { IShellRuntime } from "./shell";

export interface IAppProcess extends IProcess {
  crashReason: string;
  windowTitle: ReadableStore<string>;
  windowIcon: ReadableStore<string>;
  app: AppProcessData;
  componentMount: Record<string, any>;
  userPreferences: ReadableStore<UserPreferences>;
  username: string;
  shell: IShellRuntime | undefined;
  overridePopulatable: boolean;
  toastMessage: ReadableStore<ToastMessage | undefined>;
  safeMode: boolean;
  renderArgs: RenderArgs;
  acceleratorStore: AppKeyCombinations;
  readonly contextMenu: AppContextMenu;
  altMenu: ReadableStore<ContextMenuItem[]>;
  windowFullscreen: ReadableStore<boolean>;
  draggable: Draggable | undefined;
  onClose(): Promise<boolean>;
  ShowToast(toast: ToastMessage, durationMs?: number): Promise<void>;
  HideToast(): Promise<void>;
  closeWindow(kill?: boolean): Promise<boolean | void>;
  render(args: RenderArgs): MaybePromise<any>;
  __render__(body: HTMLDivElement): Promise<void>;
  CrashDetection(): Promise<void>;
  getSingleton(): this[];
  closeIfSecondInstance(): Promise<this | undefined>;
  getWindow(): HTMLDivElement;
  getBody(): HTMLDivElement;
  hasOverlays(): boolean;
  startAcceleratorListener(): void;
  stopAcceleratorListener(): void;
  __stop(): Promise<any>;
  unfocusActiveElement(): void;
  spawnOverlay(id: string, ...args: any[]): Promise<boolean>;
  spawnApp<T extends IAppProcess = IAppProcess>(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  spawnOverlayApp<T extends IAppProcess = IAppProcess>(
    id: string,
    parentPid?: number | undefined,
    ...args: any[]
  ): Promise<T | undefined>;
  elevate(id: string): Promise<unknown>;
  notImplemented(what?: string): void;
  appStore(): IApplicationStorage;
  getIcon(id: string): Promise<string>;
  getIconCached(id: string): string;
  getIconStore(id: string): ReadableStore<string>;
}
