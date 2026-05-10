import type { LoginAppProps, PersistenceInfo } from "$apps/core/loginapp/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IServerManager } from "$interfaces/modules/IServerManager";
import type { ServerInfo } from "$types/server";
import type { UserInfo } from "$types/user";
import type { ReadableStore } from "$types/writable";

export interface ILoginAppRuntime extends IAppProcess {
  DEFAULT_WALLPAPER: ReadableStore<string>;
  loadingStatus: ReadableStore<string>;
  errorMessage: ReadableStore<string>;
  profileImage: ReadableStore<string>;
  profileName: ReadableStore<string>;
  loginBackground: ReadableStore<string>;
  hideProfileImage: ReadableStore<boolean>;
  persistence: ReadableStore<PersistenceInfo | undefined>;
  serverInfo: ReadableStore<ServerInfo>;
  server: IServerManager;
  safeMode: boolean;
  loginProps?: LoginAppProps;
  start(): Promise<void>;
  stop(): Promise<void>;
  render(): Promise<false | undefined>;
  getWelcomeString(): string;
  setUserDisplayStuff(userDaemon: IUserDaemon, applyBackground?: boolean): Promise<void>;
  startDaemon(token: string, username: string, info?: UserInfo): Promise<void>;
  logoff(userDaemon: IUserDaemon): Promise<void>;
  shutdown(userDaemon?: IUserDaemon): Promise<void>;
  restart(userDaemon?: IUserDaemon): Promise<void>;
  proceed(username: string, password: string): Promise<void>;

  resetCookies(): void;
  firstRun(daemon: IUserDaemon): Promise<void>;
  createUser(): void;
  loadPersistence(): Promise<void>;
  savePersistence(username: string, profilePicture: string, loginWallpaper?: string): void;
  deletePersistence(): Promise<void>;
  updateServerStuff(): void;
}
