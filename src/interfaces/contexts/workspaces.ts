import type { IUserContext } from "$interfaces/daemon";
import type { UserPreferences } from "$types/user";

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
}
