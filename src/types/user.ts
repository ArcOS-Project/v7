import type { ReadableStore } from "$ts/writable";
import type { App } from "./app";
import type { ThemeStore } from "./theme";
import type { Wallpaper } from "./wallpaper";

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
  accountNumber: number;
  storageSize: number;
}

export type UserPreferencesStore = ReadableStore<UserPreferences>;

export interface UserPreferences {
  shell: ShellPreferences;
  security: SecurityPreferences;
  appPreferences: ApplicationPreferences;
  account: AccountSettings;
  isDefault?: boolean;
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
}

export interface DesktopPreferences {
  wallpaper: string;
  icons: boolean;
  theme: "light" | "dark" | string;
  sharp: boolean;
  accent: string;
  noIconGrid: boolean;
  lockIcons: boolean;
}

export interface StartMenuPreferences {
  noGroups: boolean;
}

export interface VisualPreferences {
  noAnimations: boolean;
  sharpCorners: boolean;
  compactContext: boolean;
  showHiddenApps: boolean;
  noGlass: boolean;
  userFont?: string;
  trafficLights: boolean;
}

export interface SecurityPreferences {
  lockdown: boolean;
  noPassword: boolean;
  disabled: boolean;
  enableThirdParty: boolean;
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
  accountNumber: number;
  admin: boolean;
  dispatchClients: number;
}
