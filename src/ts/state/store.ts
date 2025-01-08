import { BootScreen } from "$apps/core/bootscreen/metadata";
import CrashCss from "../../css/state/crash.css?url";
import CrashHtml from "../../state/crash/crash.html?url";
import CrashRender from "../../state/crash/render";
import type { State } from "../../types/state";

export const States: Record<string, State> = {
  boot: {
    name: "Boot",
    identifier: "boot",
    app: BootScreen,
  },
  "crash-screen": {
    render: CrashRender,
    html: CrashHtml,
    css: CrashCss,
    name: "Aw, snap!",
    identifier: "crash-screen",
  },
};
