import type { CalendarMonth, TrayIconOptions, TrayPopup, WeatherInformation } from "$apps/components/shell/types";
import type { AppContextMenu, ContextMenuItem } from "$types/app";
import type { RecursiveDirectoryReadReturn } from "$types/fs";
import type { SearchItem } from "$types/search";
import type { UserPreferencesStore, Workspace } from "$types/user";
import type { ReadableStore } from "$types/writable";
import type { FuseResult } from "fuse.js";
import type { IAppProcess } from "./app";
import type { IArcFindRuntime } from "./arcfind";
import type { Constructs } from "./common";
import type { IProcess } from "./process";

export interface IShellRuntime extends IAppProcess {
  startMenuOpened: ReadableStore<boolean>;
  actionCenterOpened: ReadableStore<boolean>;
  workspaceManagerOpened: ReadableStore<boolean>;
  calendarOpened: ReadableStore<boolean>;
  stackBusy: ReadableStore<boolean>;
  searchQuery: ReadableStore<string>;
  searchResults: ReadableStore<FuseResult<SearchItem>[]>;
  searching: ReadableStore<boolean>;
  SelectionIndex: ReadableStore<number>;
  FullscreenCount: ReadableStore<Record<string, Set<number>>>;
  openedTrayPopup: ReadableStore<string>;
  searchLoading: ReadableStore<boolean>;
  trayHost?: ITrayHostRuntime;
  arcFind?: IArcFindRuntime;
  ready: ReadableStore<boolean>;
  STARTMENU_FOLDER: string;
  StartMenuContents: ReadableStore<RecursiveDirectoryReadReturn>;
  contextMenu: AppContextMenu;
  selectedAppGroup: ReadableStore<string>;
  start(): Promise<false | undefined>;
  render(): Promise<void>;
  stop(): Promise<boolean>;
  gotReadySignal(): Promise<void>;
  pinApp(appId: string): Promise<void>;
  unpinApp(appId: string): void;
  deleteWorkspace(workspace: Workspace): Promise<void>;
  MutateIndex(e: KeyboardEvent): void | -1;
  Trigger(result: SearchItem): Promise<void>;
  Submit(): void;
  refreshStartMenu(): Promise<void>;
  getCalendarMonth(date?: string): CalendarMonth;
  getWeather(): Promise<WeatherInformation>;
  exit(): Promise<void>;
  changeShell(id: string): Promise<false | undefined>;
}

export interface ITrayHostRuntime extends IProcess {
  userPreferences?: UserPreferencesStore;
  trayIcons: ReadableStore<Record<`${number}#${string}`, ITrayIconProcess>>;
  start(): Promise<false | undefined>;
  createTrayIcon(pid: number, identifier: string, options: TrayIconOptions, process?: Constructs<IProcess>): Promise<boolean>;
  disposeTrayIcon(pid: number, identifier: string): Promise<false | undefined>;
  disposeProcessTrayIcons(pid: number): void;
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
