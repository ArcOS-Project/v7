/**
 * ProcessWithPermissions
 * 
 * This base class adds the permission-guarded class properties like the daemon contexts.
 * This class is to be applied to any designation by method of mixins or direct inheritance.
 * 
 * © IzKuipers 2025
 */

import { Env, Stack } from "$ts/env";
import { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
import { Permissions } from ".";
import type { PermissionString } from "./store";

export class ProcessWithPermissions extends Process {
  get HAS_SUDO() {
    try {
      return Permissions.hasSudo(this);
    } catch {
      return false;
    }
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, ...args: any[]) {
    super(pid, parentPid, ...args); // pass em right through my guy
  }

  //#endregion LIFECYCLE

  async requestPermission(permission: PermissionString) {
    return await Permissions.requestPermission(this, permission);
  }

  //#region USER CONTEXTS GETTERS

  get accountContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_ACCOUNT", Daemon?.account);
  }

  get applicationsContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_APPLICATIONS", Daemon?.apps);
  }

  get appregistrationContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_APPREGISTRATION", Daemon?.appreg);
  }

  get elevationContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_ELEVATION", Daemon?.elevation);
  }

  get filesystemContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_FILESYSTEM", Daemon?.files);
  }

  get helpersContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_HELPERS", Daemon?.helpers);
  }

  get iconsContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_ICONS", Daemon?.icons);
  }

  get notificationsContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_NOTIFICATIONS", Daemon?.notifications);
  }

  get powerContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_POWER", Daemon?.power);
  }

  get preferencesContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_PREFERENCES", Daemon?.preferences);
  }

  get shortcutsContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_SHORTCUTS", Daemon?.shortcuts);
  }

  get spawnContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_SPAWN", Daemon?.spawn);
  }

  get themesContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_THEMES", Daemon?.themes);
  }

  get wallpaperContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_WALLPAPER", Daemon?.wallpaper);
  }

  get workspacesContext() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_USER_CONTEXT_WORKSPACES", Daemon?.workspaces);
  }

  //#endregion USER CONTEXTS GETTERS
  //#region KERNEL MODULE GETTERS

  get env() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_KMOD_ENV", Env);
  }

  get appRenderer() {
    return Permissions?.hasPermissionExplicit(this, "PERMISSION_APPRENDERER", Stack.renderer);
  }

  //#endregion
}
