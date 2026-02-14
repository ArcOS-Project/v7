import type { App } from "./app";
import type { ThemeStore } from "./theme";
import type { Wallpaper } from "./wallpaper";
import type { ReadableStore } from "./writable";

export interface UserInfo {
  username: string;
  preferences: UserPreferences;
  admin: boolean;
  adminScopes: string[];
  approved: boolean;
  _id: string;
  email: string;
  updatedAt: string;
  createdAt: string;
  hasTotp: boolean;
  restricted: boolean;
  storageSize: number;
}

export type UserPreferencesStore = ReadableStore<UserPreferences>;

export interface UserPreferences {
  shell: ShellPreferences;
  security: SecurityPreferences;
  appPreferences: ApplicationPreferences;
  account: AccountSettings;
  isDefault?: boolean;
  firstRunDone?: boolean;
  desktop: DesktopPreferences;
  userThemes: ThemeStore;
  userWallpapers: Record<string, Wallpaper>;
  userApps: Record<string, App>;
  currentThemeId?: string;
  searchOptions: ArcFindOptions;
  pinnedApps: string[];
  disabledApps: string[];
  workspaces: WorkspacesOptions;
  globalSettings: Record<string, any>;
  startup?: Record<string, "app" | "file" | "folder" | "share" | "disabled">;
  _internalImportBlocklist: string[];
  enableVerboseLogin?: boolean;
}

export type ExpandedUserInfo = UserInfo & { profile: PublicUserInfo };

export interface WorkspacesOptions {
  desktops: Workspace[];
  index: number;
}

export interface Workspace {
  name?: string;
  uuid: string;
}

export interface ArcFindOptions {
  includeFilesystem: boolean;
  includeSettingsPages: boolean;
  includeApps: boolean;
  includePower: boolean;
  cacheFilesystem: boolean;
  showHiddenApps: boolean;
  showThirdPartyApps: boolean;
  excludeShortcuts: boolean;
}

export interface CustomStylePreferences {
  enabled: boolean;
  content?: string;
}

export interface ShellPreferences {
  taskbar: TaskbarPreferences;
  start: StartMenuPreferences;
  visuals: VisualPreferences;
  customStyle: CustomStylePreferences;
  actionCenter: {
    weatherLocation: {
      latitude: number;
      longitude: number;
      name?: string;
    };
    noteContent: string;
    galleryImage: string;
    cardIndex: number;
    hideQuickSettings: boolean;
  };
}

export interface TaskbarPreferences {
  labels: boolean;
  docked: boolean;
  colored: boolean;
  clockSecs: boolean;
  clockDate: boolean;
  clock12hr: boolean;
  batteryPercentage: boolean;
  openedAppsPerWorkspace?: boolean;
}

export interface DesktopPreferences {
  wallpaper: string;
  icons: boolean;
  theme: "light" | "dark" | string;
  sharp: boolean;
  accent: string;
  noIconGrid: boolean;
  lockIcons: boolean;
  nativeNotificationsState?: NotificationPermission;
}

export interface StartMenuPreferences {
  noGroups: boolean;
  actions: string[];
}

export interface VisualPreferences {
  noAnimations: boolean;
  sharpCorners: boolean;
  compactContext: boolean;
  showHiddenApps: boolean;
  noGlass: boolean;
  userFont?: string;
  trafficLights: boolean;
  blurRadius: number;
  hideAltmenus?: boolean;
}

export interface SecurityPreferences {
  lockdown: boolean;
  noPassword: boolean;
  disabled: boolean;
  enableThirdParty: boolean;
  restrictSystemFolders: boolean;
}

export interface AccountSettings {
  profilePicture: string | number | null;
  loginBackground: string;
  displayName?: string;
}

export interface ApplicationPreferences {
  experiments: { [key: string]: boolean };
  [key: string]: ScopedAppData;
}

export type ScopedAppData = {
  [key: string]: any;
};

export type WallpaperGetters = [string, (id: string) => Wallpaper | Promise<Wallpaper>][];

export type PasswordStrength = "tooWeak" | "weak" | "medium" | "strong";

export const PasswordStrengthCaptions: Record<PasswordStrength, string> = {
  tooWeak: "too weak",
  weak: "weak",
  medium: "medium",
  strong: "strong",
};

export interface PublicUserInfo {
  username: string;
  displayName?: string;
  profilePicture: string;
  admin: boolean;
  dispatchClients: number;
}

export interface CategorizedDiskUsage {
  sizes: {
    system: number;
    trash: number;
    home: number;
    apps: number;
  };
  absolutePercentages: {
    system: number;
    trash: number;
    home: number;
    apps: number;
  };
  relativePercentages: {
    system: number;
    trash: number;
    home: number;
    apps: number;
  };
  used: number;
  free: number;
  total: number;
}
