import type { IUserContext } from "$interfaces/daemon";

export interface IInitUserContext extends IUserContext {
  anchorInterceptObserver?: MutationObserver;
  _init(): Promise<void>;
  _deactivate(): Promise<void>;
  startAnchorRedirectionIntercept(): void;
  startFilesystemSupplier(): Promise<void>;
  startDriveNotifierWatcher(): void;
  startPreferencesSync(): Promise<void>;
  startSystemStatusRefresh(): Promise<void>;
  startVirtualDesktops(): Promise<void>;
  startServiceHost(broadcast?: (msg: string) => void): Promise<void>;
  startPermissionHandler(): Promise<boolean>;
}
