import type { PermissionStorage } from "$types/permission";

export const PERMISSIONS = [
  "PERMISSION_USER_CONTEXT_ACCOUNT",
  "PERMISSION_USER_CONTEXT_APPLICATIONS",
  "PERMISSION_USER_CONTEXT_APPREGISTRATION",
  "PERMISSION_USER_CONTEXT_ELEVATION",
  "PERMISSION_USER_CONTEXT_FILESYSTEM",
  "PERMISSION_USER_CONTEXT_HELPERS",
  "PERMISSION_USER_CONTEXT_ICONS",
  "PERMISSION_USER_CONTEXT_NOTIFICATIONS",
  "PERMISSION_USER_CONTEXT_POWER",
  "PERMISSION_USER_CONTEXT_PREFERENCES",
  "PERMISSION_USER_CONTEXT_SHORTCUTS",
  "PERMISSION_USER_CONTEXT_SPAWN",
  "PERMISSION_USER_CONTEXT_THEMES",
  "PERMISSION_USER_CONTEXT_VERSION",
  "PERMISSION_USER_CONTEXT_WALLPAPER",
  "PERMISSION_USER_CONTEXT_WORKSPACES",
  "PERMISSION_FS_READ_EXTERNAL",
  "PERMISSION_FS_WRITE_EXTERNAL",
  "PERMISSION_FS_READ_SYSTEM",
  "PERMISSION_FS_WRITE_SYSTEM",
  "PERMISSION_FS_READ_CONFIG",
  "PERMISSION_FS_WRITE_CONFIG",
  "PERMISSION_KMOD_ENV",
  "PERMISSION_APPRENDERER",
] as const;
export type PermissionString = (typeof PERMISSIONS)[number];

export const PERMISSION_ERRORS = [
  "PERMERR_ALREADY_OWNED",
  "PERMERR_NOT_DENIED",
  "PERMERR_DENIED",
  "PERMERR_NOT_GRANTED",
  "PERMERR_INVALID_PERMSTR",
  "PERMERR_NATURE_UNKNOWN",
  "PERMERR_ALREADY_DENIED",
  "PERMERR_SUDO_NOT_GRANTED",
  "PERMERR_SUDO_ALREADY_GRANTED",
  "PERMERR_SUDO_INVALID",
  "PERMERR_SUDO_EXPIRED",
  "PERMERR_OK",
] as const;
export type PermissionError = (typeof PERMISSION_ERRORS)[number];

export const PermissionErrorCaptions: Record<PermissionError, string> = {
  PERMERR_ALREADY_OWNED: "Client %c already owns %p",
  PERMERR_NOT_DENIED: "Client %c is not denied %p",
  PERMERR_DENIED: "Client %c has been denied %p",
  PERMERR_NOT_GRANTED: "Client %c has not been granted %p",
  PERMERR_INVALID_PERMSTR: "Permission %p is invalid",
  PERMERR_NATURE_UNKNOWN: "The nature of the process could not be determined",
  PERMERR_ALREADY_DENIED: "Permission %p is already explicitly denied on %c",
  PERMERR_SUDO_ALREADY_GRANTED: "%c already has sudo",
  PERMERR_SUDO_EXPIRED: "Sudo on %c has expired",
  PERMERR_SUDO_INVALID: "Sudo on %c is invalid",
  PERMERR_SUDO_NOT_GRANTED: "Client %c has not been granted sudo",
  PERMERR_OK: "Operation completed successfully",
};

export const DefaultPermissionStorage: PermissionStorage = {
  allowed: {},
  denied: {},
  registration: {},
};
