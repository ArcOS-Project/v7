import type { UserContext } from "./context";
import { AccountUserContext } from "./contexts/account";
import { LoginActivityUserContext } from "./contexts/activity";
import { ApplicationsUserContext } from "./contexts/applications";
import { AppRegistrationUserContext } from "./contexts/appregistration";
import { AppRendererUserContext } from "./contexts/apprenderer";
import { ChecksUserContext } from "./contexts/checks";
import { ElevationUserContext } from "./contexts/elevation";
import { FilesystemUserContext } from "./contexts/filesystem";
import { IconsUserContext } from "./contexts/icons";
import { MigrationsUserContext } from "./contexts/migrations";
import { NotificationsUserContext } from "./contexts/notifications";
import { PowerUserContext } from "./contexts/power";
import { PreferencesUserContext } from "./contexts/preferences";
import { ShortcutsUserContext } from "./contexts/shortcuts";
import { SpawnUserContext } from "./contexts/spawn";
import { StatusUserContext } from "./contexts/status";
import { ThemesUserContext } from "./contexts/themes";
import { VersionUserContext } from "./contexts/version";
import { WallpaperUserContext } from "./contexts/wallpaper";
import { WorkspaceUserContext } from "./contexts/workspaces";

export const UserContexts: Record<string, typeof UserContext> = {
  account: AccountUserContext,
  activity: LoginActivityUserContext,
  apps: ApplicationsUserContext,
  appreg: AppRegistrationUserContext,
  renderer: AppRendererUserContext,
  checks: ChecksUserContext,
  elevation: ElevationUserContext,
  files: FilesystemUserContext,
  icons: IconsUserContext,
  migrations: MigrationsUserContext,
  notifications: NotificationsUserContext,
  power: PowerUserContext,
  preferencesCtx: PreferencesUserContext,
  shortcuts: ShortcutsUserContext,
  spawn: SpawnUserContext,
  status: StatusUserContext,
  themes: ThemesUserContext,
  version: VersionUserContext,
  wallpaper: WallpaperUserContext,
  workspaces: WorkspaceUserContext,
};
