import type { IUserContext } from "$interfaces/IUserDaemon";
import type { UserPreferences, Workspace } from "$types/user";

// !tpa
export interface IWorkspaceUserContext extends IUserContext {
  virtualDesktop: HTMLDivElement | undefined;
  syncVirtualDesktops(v: UserPreferences): Promise<void>;
  renderVirtualDesktop(uuid: string): void;
  deleteVirtualDesktop(uuid: string): Promise<void>;
  getCurrentDesktop(): HTMLDivElement | undefined;
  createWorkspace(name?: string): void;
  getDesktopIndexByUuid(uuid: string): number;
  switchToDesktopByUuid(uuid: string): void;
  killWindowsOfDesktop(uuid: string): Promise<boolean | undefined>;
  nextDesktop(): boolean;
  previousDesktop(): void;
  moveWindow(pid: number, destination: string): Promise<void>;
  deleteVirtualDesktopAck(workspace: Workspace): Promise<void>;
  startVirtualDesktops(): Promise<void>;
}
// !endtpa
