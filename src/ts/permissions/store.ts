import type { PermissionInfo, PermissionStorage } from "$types/permission";

export const PERMISSIONS = [
  "PERMISSION_USER_CONTEXT_ACCOUNT",
  "PERMISSION_USER_CONTEXT_APPLICATIONS",
  "PERMISSION_USER_CONTEXT_APPREGISTRATION",
  "PERMISSION_USER_CONTEXT_FILESYSTEM",
  "PERMISSION_USER_CONTEXT_HELPERS",
  "PERMISSION_USER_CONTEXT_ICONS",
  "PERMISSION_USER_CONTEXT_NOTIFICATIONS",
  "PERMISSION_USER_CONTEXT_POWER",
  "PERMISSION_USER_CONTEXT_PREFERENCES",
  "PERMISSION_USER_CONTEXT_SHORTCUTS",
  "PERMISSION_USER_CONTEXT_SPAWN",
  "PERMISSION_USER_CONTEXT_THEMES",
  "PERMISSION_USER_CONTEXT_WALLPAPER",
  "PERMISSION_USER_CONTEXT_WORKSPACES",
  "PERMISSION_FS_READ_EXTERNAL",
  "PERMISSION_FS_WRITE_EXTERNAL",
  "PERMISSION_FS_READ_APPLICATIONS",
  "PERMISSION_FS_WRITE_APPLICATIONS",
  "PERMISSION_FS_READ_SYSTEM",
  "PERMISSION_FS_WRITE_SYSTEM",
  "PERMISSION_FS_READ_CONFIG",
  "PERMISSION_FS_WRITE_CONFIG",
  "PERMISSION_FS_READ_USER",
  "PERMISSION_FS_WRITE_USER",
  "PERMISSION_FS_READ",
  "PERMISSION_FS_WRITE",
  "PERMISSION_FS_DRIVES",
  "PERMISSION_KMOD_ENV",
  "PERMISSION_APPRENDERER",
] as const;
export const PERMISSION_NAMES: Record<PermissionString, string> = {
  PERMISSION_USER_CONTEXT_ACCOUNT: "Account",
  PERMISSION_USER_CONTEXT_APPLICATIONS: "Applications",
  PERMISSION_USER_CONTEXT_APPREGISTRATION: "App registration",
  PERMISSION_USER_CONTEXT_FILESYSTEM: "File System",
  PERMISSION_USER_CONTEXT_HELPERS: "Helpers",
  PERMISSION_USER_CONTEXT_ICONS: "Icons",
  PERMISSION_USER_CONTEXT_NOTIFICATIONS: "Notifications",
  PERMISSION_USER_CONTEXT_POWER: "Power",
  PERMISSION_USER_CONTEXT_PREFERENCES: "Preferences",
  PERMISSION_USER_CONTEXT_SHORTCUTS: "Shortcuts",
  PERMISSION_USER_CONTEXT_SPAWN: "Spawning",
  PERMISSION_USER_CONTEXT_THEMES: "Themes",
  PERMISSION_USER_CONTEXT_WALLPAPER: "Wallpapers",
  PERMISSION_USER_CONTEXT_WORKSPACES: "Workspaces",
  PERMISSION_FS_READ_EXTERNAL: "Read external file system",
  PERMISSION_FS_WRITE_EXTERNAL: "Write external file system",
  PERMISSION_FS_READ_APPLICATIONS: "Read application files",
  PERMISSION_FS_WRITE_APPLICATIONS: "Write application files",
  PERMISSION_FS_READ_SYSTEM: "Read system files",
  PERMISSION_FS_WRITE_SYSTEM: "Write system files",
  PERMISSION_FS_READ_CONFIG: "Read config files",
  PERMISSION_FS_WRITE_CONFIG: "Write config files",
  PERMISSION_FS_READ_USER: "Read user files",
  PERMISSION_FS_WRITE_USER: "Write user files",
  PERMISSION_FS_READ: "Read files",
  PERMISSION_FS_WRITE: "Write files",
  PERMISSION_FS_DRIVES: "Drives",
  PERMISSION_KMOD_ENV: "Env kernel module",
  PERMISSION_APPRENDERER: "AppRenderer",
} as const;
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

// export const PermissionInfoStore: PermissionInfo[] = [
//   {
//     permission: "PERMISSION_USER_CONTEXT_ACCOUNT",
//     friendlyName: "Manage your ArcOS account",
//     friendlyDescription: "{{name}} would like to manage your ArcOS account",
//     icon: "square-user",
//     canDo: [
//       {
//         what: "Read your user information",
//         icon: "info",
//       },
//       {
//         what: "Change your password if you confirm",
//         icon: "key-round",
//       },
//       {
//         what: "Change your username if you confirm",
//         icon: "person",
//       },
//       {
//         what: "Ask you if you want to delete your account",
//         icon: "trash-2",
//       },
//       {
//         what: "Get the public user info of any user",
//         icon: "users",
//       },
//     ],
//     cantDo: [
//       {
//         what: "Change your credentials without your permission",
//         icon: "key-round",
//       },
//       {
//         what: "Delete your account without your permission",
//         icon: "trash-2",
//       },
//     ],
//   },
//   {
//     permission: "PERMISSION_USER_CONTEXT_APPLICATIONS",
//     friendlyName: "Manage applications",
//     friendlyDescription: "{{name}} would like to manage application related settings",
//     icon: "package",
//     canDo: [
//       {
//         what: "Run the startup list",
//         icon: "play",
//       },
//       {
//         what: "Check the state of applications",
//         icon: "check",
//       },
//       {
//         what: "Disable- or enable an app",
//         icon: "power",
//       },
//       {
//         what: "Enable or disable third-party apps",
//         icon: "shopping-bag",
//       },
//     ],
//     cantDo: [
//       {
//         what: "Install or uninstall an application",
//         icon: "download",
//       },
//     ],
//   },
//   {
//     permission: "PERMISSION_USER_CONTEXT_APPREGISTRATION",
//     friendlyName: "Manage application registration",
//     friendlyDescription: "{{name}} would like to manage your installed applications",
//     icon: "hard-drive-download",
//     canDo: [
//       {
//         what: "Register an application",
//         icon: "monitor-down",
//       },
//       {
//         what: "Uninstall an app",
//         icon: "trash-2",
//       },
//       {
//         what: "Pin or unpin an app",
//         icon: "pin",
//       },
//       {
//         what: "Add- or remove apps from the start menu",
//         icon: "list-checks",
//       },
//     ],
//     cantDo: [
//       {
//         what: "Install or uninstall an application",
//         icon: "download",
//       },
//     ],
//   },
//   {
//     permission: "PERMISSION_USER_CONTEXT_FILESYSTEM",
//     friendlyName: "Use filesystem utilities",
//     friendlyDescription: "{{name}} would like to make use of filesystem utilities",
//     icon: "hard-drive-download",
//     canDo: [
//       {
//         what: "Mount a ZIP file",
//         icon: "file-archive",
//       },
//       {
//         what: "Unmount mounted drives",
//         icon: "hard-drive-upload",
//       },
//       {
//         what: "See what drives are mounted",
//         icon: "list-checked",
//       },
//       {
//         what: "Display file progress",
//         icon: "pin",
//       },
//       {
//         what: "Tell ArcOS to open a file",
//         icon: "file-check",
//       },
//       {
//         what: "Open a load/save dialog",
//         icon: "save",
//       },
//       {
//         what: "Get categorized disk usage of U:",
//         icon: "chart-pie",
//       },
//       {
//         what: "Mount a v5 or v6 filesystem",
//         icon: "hard-drive",
//       },
//       {
//         what: "Move an item to the trash",
//         icon: "trash-2",
//         critical: true,
//         extraWarning:
//           "When moving an item to the trash when the trash is disabled, the item is permanently deleted. This includes system files!",
//       },
//       {
//         what: "Access the Temporary filesystem",
//         icon: "book-dashed",
//       },
//     ],
//     cantDo: [
//       {
//         what: "Access your drive",
//         icon: "download",
//       },
//       {
//         what: "Eat cookies",
//         icon: "cookie",
//       },
//       // TODO
//     ],
//   },
//     {
//     permission: "PERMISSION_USER_CONTEXT_APPREGISTRATION",
//     friendlyName: "Manage application registration",
//     friendlyDescription: "{{name}} would like to manage your installed applications",
//     icon: "hard-drive-download",
//     canDo: [
//       {
//         what: "Register an application",
//         icon: "monitor-down",
//       },
//       {
//         what: "Uninstall an app",
//         icon: "trash-2",
//       },
//       {
//         what: "Pin or unpin an app",
//         icon: "pin",
//       },
//       {
//         what: "Add- or remove apps from the start menu",
//         icon: "list-checks",
//       },
//     ],
//     cantDo: [
//       {
//         what: "Install or uninstall an application",
//         icon: "download",
//       },
//     ],
//   },
// ];
