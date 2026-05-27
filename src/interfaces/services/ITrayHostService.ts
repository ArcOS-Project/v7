import type { TrayIconOptions, TrayPopup } from "$apps/components/shell/types";
import type { Constructs } from "$interfaces/common";
import type { IProcess } from "$interfaces/IProcess";
import type { IBaseService } from "$interfaces/IServiceHost";
import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
import type { ContextMenuItem } from "$types/app";
import type { ReadableStore } from "$types/writable";

// !tpa
export interface ITrayHostService extends IBaseService {
  trayIcons: ReadableStore<Record<`${number}#${string}`, ITrayIconProcess>>;
  createTrayIcon(pid: number, identifier: string, options: TrayIconOptions, process?: Constructs<IProcess>): Promise<boolean>;
  disposeTrayIcon(pid: number, identifier: string): Promise<false | undefined>;
  disposeProcessTrayIcons(pid: number): void;
  disposeAllTrayIcons(): Promise<void>;
  changeIcon(pid: number, identifier: string, newIcon: string): void;
}

export interface ITrayIconProcess extends IProcess {
  targetPid: number;
  identifier: string;
  popup?: TrayPopup;
  context?: ContextMenuItem[];
  action?: (targetedProcess: IProcess) => void;
  componentMount: Record<string, any>;
  icon: string;
  shell: IShellRuntime;
  __render(): Promise<void>;
  stop(): Promise<void>;
  renderPopup(popup: HTMLDivElement, target: IProcess): Promise<void>;
  getPopupBody(): Element | null;
}
// !endtpa