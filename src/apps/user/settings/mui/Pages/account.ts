import type { ModularSettingsPage } from "$types/system/mui/settings";

export const SettingsAccountPage: ModularSettingsPage = {
  pageIdentifier: "account",
  title: "Your ArcOS Identity",
  icon: "AccountIcon",
  description: "Manage your ArcOS account",
  hidden: true,
  page: [
    {
      type: "EmbeddedComponent",
      id: "ProfilePicture",
      props: {
        className: "backdrop",
        height: 0,
      },
    },
    {
      type: "Layout",
      variant: "centered",
      children: [
        {
          type: "If",
          conditions: ["HAS_PREFERENCES", "HAS_USERINFO"],
          ifMet: [
            {
              type: "EmbeddedComponent",
              id: "AccountHeader",
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
          conditions: ["SAFE_MODE"],
          ifMet: [
            {
              type: "EmbeddedComponent",
              id: "SafeModeNotice",
              props: {},
            },
          ],
          else: [],
        },
        {
          type: "Section",
          children: [
            {
              type: "Option",
              image: "SecureIcon",
              caption: "Rename your account",
              chevron: true,
              onclick: {
                operation: "show_changeUsername",
                arguments: [],
              },
            },
            {
              type: "Option",
              image: "PasswordIcon",
              caption: "Change your password",
              chevron: true,
              onclick: {
                operation: "show_changePassword",
                arguments: [],
              },
            },
            {
              type: "If",
              conditions: ["HAS_TOTP"],
              ifMet: [
                {
                  type: "Option",
                  image: "SecurityHighIcon",
                  caption: "Disable two-factor authentication",
                  chevron: true,
                  onclick: {
                    operation: "disableTotp",
                    arguments: [],
                  },
                },
              ],
              else: [
                {
                  type: "Option",
                  image: "ElevationIcon",
                  caption: "Set up two-factor authentication",
                  chevron: true,
                  onclick: {
                    operation: "setup2fa",
                    arguments: [],
                  },
                },
              ],
            },
          ],
        },
        {
          type: "Section",
          children: [
            {
              type: "Option",
              image: "WaveIcon",
              caption: "View login activity",
              chevron: true,
              onclick: {
                operation: "show_loginActivity",
                arguments: [],
              },
            },
            {
              type: "Option",
              image: "LogoutIcon",
              caption: "Log out everywhere",
              chevron: true,
              onclick: {
                operation: "logOutEverywhere",
                arguments: [],
              },
            },
            {
              type: "Option",
              image: "TrashIcon",
              caption: "Delete ArcOS account...",
              chevron: true,
              onclick: {
                operation: "deleteAccount",
                arguments: [],
              },
            },
          ],
        },
      ],
    },
  ],
};
