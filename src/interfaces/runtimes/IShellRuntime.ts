import type { CalendarMonth, WeatherInformation } from "$apps/components/shell/types";
import type { IArcFindService } from "$interfaces/services/IArcFindService";
import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
import type { AppContextMenu } from "$types/app";
import type { RecursiveDirectoryReadReturn } from "$types/fs";
import type { ReadableStore } from "$types/writable";
import type { IAppProcess } from "../IAppProcess";

export interface IShellRuntime extends IAppProcess {
  startMenuOpened: ReadableStore<boolean>;
  actionCenterOpened: ReadableStore<boolean>;
  workspaceManagerOpened: ReadableStore<boolean>;
  calendarOpened: ReadableStore<boolean>;
  stackBusy: ReadableStore<boolean>;
  FullscreenCount: ReadableStore<Record<string, Set<number>>>;
  openedTrayPopup: ReadableStore<string>;
  get trayHost(): ITrayHostService | undefined;
  get arcFind(): IArcFindService | undefined;
  STARTMENU_FOLDER: string;
  StartMenuContents: ReadableStore<RecursiveDirectoryReadReturn>;
  contextMenu: AppContextMenu;
  selectedAppGroup: ReadableStore<string>;
  pinApp(appId: string): Promise<void>;
  unpinApp(appId: string): void;
  refreshStartMenu(): Promise<void>;
  getCalendarMonth(date?: string): CalendarMonth;
  getWeather(): Promise<WeatherInformation>;
  exit(): Promise<void>;
  updateFullscreenCount(): void;
}
