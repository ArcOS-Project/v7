import { BootScreen } from "$apps/core/bootscreen/metadata";
import { InitialSetupWizard } from "$apps/core/initialsetup/metadata";
import { LoginApp } from "$apps/core/loginapp/metadata";
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
    app: InitialSetupWizard,
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
};
