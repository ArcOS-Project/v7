import { BootScreen } from "$apps/core/bootscreen/metadata";
import { InitialSetupWizard } from "$apps/core/initialsetup/metadata";
import { LoginApp } from "$apps/core/loginapp/metadata";
import CrashCss from "../../css/state/crash.css?url";
import DesktopCss from "../../css/state/desktop.css?url";
import LicenseDeclinedCss from "../../css/state/licensedeclined.css?url";
import ServerDownCss from "../../css/state/serverdown.css?url";
import CrashHtml from "../../state/crash/crash.html?url";
import CrashRender from "../../state/crash/render";
import DesktopHtml from "../../state/desktop/desktop.html?url";
import DesktopRender from "../../state/desktop/render";
import LicenseDeclinedHtml from "../../state/licensedeclined/licensedeclined.html?url";
import LicenseDeclinedRender from "../../state/licensedeclined/render";
import ServerDownRender from "../../state/serverdown/render";
import ServerDownHtml from "../../state/serverdown/serverdown.html?url";
import type { State } from "../../types/state";

export const States: Record<string, State> = {
  boot: {
    name: "Boot",
    identifier: "boot",
    app: BootScreen,
  },
  login: {
    name: "Login",
    identifier: "login",
    app: LoginApp,
  },
  serverdown: {
    name: "Server down",
    render: ServerDownRender,
    identifier: "serverdown",
    css: ServerDownCss,
    html: ServerDownHtml,
  },
  licenseDeclined: {
    name: "License Declined",
    html: LicenseDeclinedHtml,
    css: LicenseDeclinedCss,
    render: LicenseDeclinedRender,
    identifier: "licenseDeclined",
  },
  "crash-screen": {
    render: CrashRender,
    html: CrashHtml,
    css: CrashCss,
    name: "Aw, snap!",
    identifier: "crash-screen",
  },
  desktop: {
    render: DesktopRender,
    html: DesktopHtml,
    css: DesktopCss,
    name: "ArcOS Desktop",
    identifier: "desktop",
  },
  initialSetup: {
    name: "Initial Setup Wizard",
    identifier: "initialSetup",
    app: InitialSetupWizard,
  },
};
