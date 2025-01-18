import type { ReadableStore } from "$ts/writable";

export interface UserInfo {
  username: string;
  preferences: UserPreferences;
  admin: boolean;
  adminScopes: string[];
  approved: boolean;
  _id: string;
  email: string;
}

export type UserPreferencesStore = ReadableStore<UserPreferences>;

export interface UserPreferences {
  shell: ShellPreferences;
  security: SecurityPreferences;
  appPreferences: ApplicationPreferences;
  account: AccountSettings;
  isDefault?: boolean;
  desktop: DesktopPreferences;
}

export interface ShellPreferences {
  taskbar: TaskbarPreferences;
  window: WindowPreferences;
  start: StartMenuPreferences;
  visuals: VisualPreferences;
  actionCenter: {
    weatherLocation: {
      latitude: number;
      longitude: number;
    };
    noteContent: string;
    galleryImage: string;
    cardIndex: number;
  };
}

export interface TaskbarPreferences {
  labels: boolean;
  docked: boolean;
  colored: boolean;
  clockSecs: boolean;
  clockDate: boolean;
  clock12hr: boolean;
  pinnedApps: string[];
}

export interface WindowPreferences {
  bigTitlebar: boolean;
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
}

export interface SecurityPreferences {
  lockdown: boolean;
  noPassword: boolean;
  disabled: boolean;
}

export interface AccountSettings {
  profilePicture: string | number | null;
  loginBackground: string;
}

export interface ApplicationPreferences {
  experiments: { [key: string]: boolean };
  [key: string]: ScopedAppData;
}

export type ScopedAppData = {
  [key: string]: number | boolean | string | object;
};
