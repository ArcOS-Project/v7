import type { App, AppProcessData, WindowResizer } from "$types/app";
import type { ReadableStore } from "$types/writable";
import type { IAppProcess } from "./app";
import type { IProcess } from "./process";

export interface IAppRenderer extends IProcess {
  currentState: number[];
  target: HTMLDivElement;
  maxZIndex: number;
  focusedPid: ReadableStore<number>;
  appStore: ReadableStore<Map<string, AppProcessData>>;
  lastInteract?: IAppProcess;
  _criticalProcess: boolean;
  disposedCheck(): void;
  render(process: IAppProcess, renderTarget: HTMLDivElement | undefined): Promise<void>;
  _windowClasses(proc: IAppProcess, window: HTMLDivElement, data: App): void;
  _windowEvents(proc: IAppProcess, window: HTMLDivElement, titlebar: HTMLDivElement | undefined, data: App): void;
  focusPid(pid: number): void;
  _renderTitlebar(process: IAppProcess): HTMLDivElement | undefined;
  _renderAltMenu(process: IAppProcess): HTMLDivElement;
  _resizeGrabbers(process: IAppProcess, window: HTMLDivElement): undefined;
  _resizer(window: HTMLDivElement, resizer: WindowResizer): HTMLDivElement;
  remove(pid: number): Promise<void>;
  toggleMaximize(pid: number): void;
  updateDraggableDisabledState(pid: number, window: HTMLDivElement): void;
  unMinimize(pid: number): void;
  unsnapWindow(pid: number, dispatch?: boolean): void;
  snapWindow(pid: number, variant: string): void;
  toggleMinimize(pid: number): void;
  toggleFullscreen(pid: number): void;
  getAppInstances(id: string, originPid?: number): IAppProcess[];
  notifyCrash(data: App, reason: any, process?: IAppProcess): Promise<void>;
}
