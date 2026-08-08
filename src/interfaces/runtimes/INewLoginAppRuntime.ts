import type { LoginPersistence, LoginState, LoginStatus } from "$apps/core/newloginapp/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { IConfigurator } from "$interfaces/IConfigurator";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { ServerInfo } from "$types/server";
import type { ReadableStore } from "$types/shared/writable";
import type { UserInfo } from "$types/user";

export interface INewLoginAppRuntime extends IAppProcess {
  State: ReadableStore<LoginState>;
  Status: ReadableStore<LoginStatus>;
  Persistence: ReadableStore<LoginPersistence>;
  Config: IConfigurator<LoginPersistence>;

  get ServerInfo(): ServerInfo | undefined;
  get WelcomeString(): string;

  SaveUserPersistence(info: UserInfo): void;
  SetLastUsed(userId: string): void;
  RemoveUser(userId: string): void;
  SelectUser(userId: string): void;
  LoadLoginStateUsingPersistenceFrom(userId: string): void;

  JumpstartUserDaemon(token: string, userInfo: UserInfo): Promise<void>;
  PerformLogin(identity: string, password: string): Promise<void>;
  AskFor2FA(userId?: string): Promise<boolean>;
  CreateUser(): void;

  PerformShutdown(userDaemon?: IUserDaemon): Promise<void>;
  PerformRestart(userDaemon?: IUserDaemon): Promise<void>;

  DismissError(): void;
  ShowError(message: string): void;
  ShowErrorAndWait(message: string): Promise<void>;
  ShowLoading(message: string): void;
  ResetCookies(): void;
}
