import type { IArcFindService } from "$interfaces/services/IArcFindService";
import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
import type { AppContextMenu } from "$types/apps/app";
import type { SearchItem } from "$types/services/search";
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
  gotReadySignal(): Promise<void>;
  pinApp(appId: string): Promise<void>;
  unpinApp(appId: string): void;
  deleteWorkspace(workspace: Workspace): Promise<void>;
  MutateIndex(e: KeyboardEvent): void | -1;
  Trigger(result: SearchItem): Promise<void>;
  Submit(): void;
  refreshStartMenu(): Promise<void>;
  exit(): Promise<void>;
  updateFullscreenCount(): void;
  changeShell(id: string): Promise<false | undefined>;
}
// !endtpa
