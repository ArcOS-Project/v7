import type { IUserContext } from "$interfaces/IUserDaemon";

export interface IInitUserContext extends IUserContext {
  anchorInterceptObserver?: MutationObserver;
  _init(): Promise<void>;
  _deactivate(): Promise<void>;
  startAnchorRedirectionIntercept(): void;
  startSystemStatusRefresh(): Promise<void>;
  startServiceHost(broadcast?: (msg: string) => void): Promise<void>;
  firstRun(): Promise<void>;
  handleShellAndAutorun(): Promise<void>;
}
