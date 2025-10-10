import type { UserInfo, UserPreferences } from "$types/user";

export const DefaultUserPreferences: UserPreferences = {
  desktop: {
    wallpaper: "img18",
    icons: true,
    theme: "dark",
    sharp: false,
    accent: "FF6E54",
    noIconGrid: false,
    lockIcons: true,
  },
  shell: {
    taskbar: {
      labels: false,
      docked: false,
      colored: false,
      clock12hr: false,
      clockDate: false,
      clockSecs: false,
      batteryPercentage: false,
      position: "horizontal-bottom",
    },
    actionCenter: {
      weatherLocation: {
        // unset
        latitude: Infinity,
        longitude: Infinity,
        name: "unset",
      },
      noteContent: "",
      galleryImage: "",
      cardIndex: 0,
      hideQuickSettings: false,
    },
    start: {
      noGroups: false,
    },
    visuals: {
      noAnimations: false,
      sharpCorners: false,
      compactContext: false,
      showHiddenApps: false,
      noGlass: false,
      trafficLights: false,
      blurRadius: 10,
    },
    customStyle: {
      enabled: false,
    },
  },
  searchOptions: {
    includeApps: true,
    includeFilesystem: true,
    includePower: true,
    includeSettingsPages: true,
    cacheFilesystem: true,
    showHiddenApps: false,
    showThirdPartyApps: true,
    excludeShortcuts: true,
  },
  security: {
    lockdown: false,
    noPassword: false,
    disabled: false,
    enableThirdParty: false,
    restrictSystemFolders: true,
  },
  appPreferences: {
    experiments: {},
    fileManager: {
      renderThumbnails: true,
    },
  },
  account: {
    profilePicture: 3,
    loginBackground: "img18",
  },
  isDefault: true,
  userThemes: {},
  userWallpapers: {},
  userApps: {},
  pinnedApps: [],
  disabledApps: [],
  workspaces: {
    desktops: [],
    index: 0,
  },
  globalSettings: {},
  _internalImportBlocklist: [],
  enableVerboseLogin: false,
};

export const DefaultUserInfo: UserInfo = {
  approved: false,
  username: "Stranger",
  _id: "",
  email: "unknown",
  admin: false,
  adminScopes: [],
  preferences: DefaultUserPreferences,
  createdAt: new Date().toLocaleString(),
  updatedAt: new Date().toLocaleString(),
  restricted: false,
  hasTotp: false,
  storageSize: 1024 ** 3, // 1GB
};
