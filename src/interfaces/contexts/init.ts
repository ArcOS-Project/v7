import type { IUserContext } from "$interfaces/daemon";
import type { Service } from "$types/service";

export interface IInitUserContext extends IUserContext {
  anchorInterceptObserver?: MutationObserver;
  _init(): Promise<void>;
  _deactivate(): Promise<void>;
  startAnchorRedirectionIntercept(): void;
  startFilesystemSupplier(): Promise<void>;
  startDriveNotifierWatcher(): void;
  startShareManager(): Promise<void>;
  startPreferencesSync(): Promise<void>;
  startSystemStatusRefresh(): Promise<void>;
  startVirtualDesktops(): Promise<void>;
  startServiceHost(svcPreRun?: (service: Service) => void): Promise<void>;
  startPermissionHandler(): Promise<boolean>;
}
