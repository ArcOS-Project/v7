import type { UserContext } from "./context";
import { AccountUserContext } from "./contexts/account";
import { LoginActivityUserContext } from "./contexts/activity";
import { ApplicationsUserContext } from "./contexts/applications";
import { AppRegistrationUserContext } from "./contexts/appregistration";
import { AppRendererUserContext } from "./contexts/apprenderer";
import { ChecksUserContext } from "./contexts/checks";
import { ElevationUserContext } from "./contexts/elevation";
import { FilesystemUserContext } from "./contexts/filesystem";
import { MigrationsUserContext } from "./contexts/migrations";
import { NotificationsUserContext } from "./contexts/notifications";
import { PowerUserContext } from "./contexts/power";
import { PreferencesUserContext } from "./contexts/preferences";
import { SpawnUserContext } from "./contexts/spawn";
import { StatusUserContext } from "./contexts/status";
import { ThemesUserContext } from "./contexts/themes";
import { VersionUserContext } from "./contexts/version";
import { WallpaperUserContext } from "./contexts/wallpaper";
import { WorkspaceUserContext } from "./contexts/workspaces";

export const UserContexts: Record<string, typeof UserContext> = {
  account: AccountUserContext,
  activityContext: LoginActivityUserContext,
  applicationsContext: ApplicationsUserContext,
  appRegistrationContext: AppRegistrationUserContext,
  appRendererContext: AppRendererUserContext,
  checksContext: ChecksUserContext,
  elevationContext: ElevationUserContext,
  filesystemContext: FilesystemUserContext,
  migrationsContext: MigrationsUserContext,
  notificationsContext: NotificationsUserContext,
  powerContext: PowerUserContext,
  preferencesContext: PreferencesUserContext,
  spawnContext: SpawnUserContext,
  statusContext: StatusUserContext,
  themesContext: ThemesUserContext,
  versionContext: VersionUserContext,
  wallpaperContext: WallpaperUserContext,
  workspacesContext: WorkspaceUserContext,
};
