import TurnedOff from "$state/turnedoff/render";
import ArcTermHtml from "../../state/arcterm/arcterm.html?url";
import ArcTermRender from "../../state/arcterm/render";
import CrashHtml from "../../state/crash/crash.html?url";
import CrashRender from "../../state/crash/render";
import DesktopHtml from "../../state/desktop/desktop.html?url";
import DesktopRender from "../../state/desktop/render";
import LicenseDeclinedHtml from "../../state/licensedeclined/licensedeclined.html?url";
import LicenseDeclinedRender from "../../state/licensedeclined/render";
import ServerDownRender from "../../state/serverdown/render";
import ServerDownHtml from "../../state/serverdown/serverdown.html?url";
import TurnedOffHtml from "../../state/turnedoff/turnedoff.html?url";
import type { AppModuleLoader, State } from "../../types/state";

const globs = Object.values(
  import.meta.glob([
    "$apps/core/bootscreen/bootScreen",
    "$apps/core/initialsetup/initialSetupWizard",
    "$apps/core/loginapp/loginApp",
    "$apps/core/switchserver/SwitchServer",
  ])
);

export const States: Record<string, State> = {
  boot: {
    name: "Boot",
    identifier: "boot",
    appModule: globs[0] as AppModuleLoader,
  },
  login: {
    name: "Login",
    identifier: "login",
    appModule: globs[2] as AppModuleLoader,
  },
  serverdown: {
    name: "Server down",
    render: ServerDownRender,
    identifier: "serverdown",
    html: ServerDownHtml,
  },
  licenseDeclined: {
    name: "License Declined",
    html: LicenseDeclinedHtml,
    render: LicenseDeclinedRender,
    identifier: "licenseDeclined",
  },
  "crash-screen": {
    render: CrashRender,
    html: CrashHtml,
    name: "Aw, snap!",
    identifier: "crash-screen",
  },
  desktop: {
    render: DesktopRender,
    html: DesktopHtml,
    name: "ArcOS Desktop",
    identifier: "desktop",
  },
  initialSetup: {
    name: "Initial Setup Wizard",
    identifier: "initialSetup",
    appModule: globs[1] as AppModuleLoader,
  },
  turnedOff: {
    name: "Turned off",
    identifier: "turnedOff",
    render: TurnedOff,
    html: TurnedOffHtml,
  },
  arcterm: {
    name: "ArcTerm",
    identifier: "arcterm",
    render: ArcTermRender,
    html: ArcTermHtml,
  },
  switchServer: {
    name: "Switch Server",
    identifier: "switchServer",
    appModule: globs[3] as AppModuleLoader,
  },
};
