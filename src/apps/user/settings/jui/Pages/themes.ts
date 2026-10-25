import type { JoltSettingsPage } from "$types/system/jui/settings";

export const SettingsThemesPage: JoltSettingsPage = {
  pageIdentifier: "themes",
  title: "Themes",
  icon: "ThemesIcon",
  page: [
    {
      type: "If",
      conditions: ["HAS_PREFERENCES", "HAS_USERINFO"],
      ifMet: [
        {
          type: "EmbeddedComponent",
          id: "ThemesPageHeader",
          props: {},
        },
      ],
      else: [
        {
          type: "EmbeddedComponent",
          id: "NoDaemonNotice",
          props: {},
        },
      ],
    },
    {
      type: "If",
      conditions: ["!SAFE_MODE"],
      ifMet: [
        {
          type: "EmbeddedComponent",
          id: "BuiltInThemes",
        },
        {
          type: "EmbeddedComponent",
          id: "UserThemes",
        },
      ],
    },
  ],
};
