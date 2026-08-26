import type { IArcFindService } from "$interfaces/services/IArcFindService";
import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
import type { AppContextMenu } from "$types/apps/app";
import type { ReadableStore } from "$types/shared/writable";
import type { RecursiveDirectoryReadReturn } from "$types/system/fs";
import type { Workspace } from "$types/user";
import type { IAppProcess } from "../IAppProcess";

// !tpa
export interface IShellRuntime extends IAppProcess {
  startMenuOpened: ReadableStore<boolean>;
  actionCenterOpened: ReadableStore<boolean>;
  workspaceManagerOpened: ReadableStore<boolean>;
  calendarOpened: ReadableStore<boolean>;
  stackBusy: ReadableStore<boolean>;
  FullscreenCount: ReadableStore<Record<string, Set<number>>>;
  openedTrayPopup: ReadableStore<string>;
  trayHost?: ITrayHostService;
  arcFind?: IArcFindService;
  STARTMENU_FOLDER: string;
  StartMenuContents: ReadableStore<RecursiveDirectoryReadReturn>;
  contextMenu: AppContextMenu;
  selectedAppGroup: ReadableStore<string>;
  start(): Promise<false | undefined>;
  render(): Promise<void>;
  stop(): Promise<boolean>;
  pinApp(appId: string): Promise<void>;
  unpinApp(appId: string): void;
  refreshStartMenu(): Promise<void>;
  exit(): Promise<void>;
  updateFullscreenCount(): void;
}
// !endtpa
