import type { UserInfo, UserPreferences } from "$types/user";

export const DefaultUserPreferences: UserPreferences = {
  desktop: {
    wallpaper: "img18",
    icons: true,
    theme: "dark",
    sharp: false,
    accent: "008CFF",
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
      pinnedApps: [],
    },
    actionCenter: {
      weatherLocation: {
        // new york
        latitude: 40.7143,
        longitude: -74.006,
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
    },
    customStyle: {
      enabled: false,
    },
  },
  security: {
    lockdown: false,
    noPassword: false,
    disabled: false,
  },
  appPreferences: {
    experiments: {},
  },
  account: {
    profilePicture: 3,
    loginBackground: "img15",
    rotur: {},
  },
  isDefault: true,
  userThemes: {},
  userWallpapers: {},
};

export const DefaultUserInfo: UserInfo = {
  approved: false,
  username: "Stranger",
  _id: "",
  email: "unknown",
  admin: false,
  adminScopes: [],
  preferences: DefaultUserPreferences,
};
