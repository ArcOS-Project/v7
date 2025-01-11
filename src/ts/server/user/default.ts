import type { UserPreferences, UserInfo } from "$types/user";

export const DefaultUserPreferences: UserPreferences = {
  desktop: {
    wallpaper: "img18",
    icons: true,
    theme: "dark",
    sharp: false,
    accent: "#008CFF",
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
    window: {
      bigTitlebar: true,
    },
    start: {
      noGroups: false,
    },
    visuals: {
      noAnimations: false,
      sharpCorners: false,
      compactContext: false,
      showHiddenApps: false,
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
  },
  isDefault: true,
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
