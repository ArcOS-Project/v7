import type { State } from "../../types/state";
import CrashRender from "../../state/crash/render";
import CrashHtml from "../../state/crash/crash.html?url";
import CrashCss from "../../css/state/crash.css?url";
import BootRender from "../../state/boot/render";
import BootHtml from "../../state/boot/boot.html?url";
import BootCss from "../../css/state/boot.css?url";

export const States: Record<string, State> = {
  boot: {
    render: BootRender,
    html: BootHtml,
    css: BootCss,
    name: "Boot",
    identifier: "boot",
  },
  "crash-screen": {
    render: CrashRender,
    html: CrashHtml,
    css: CrashCss,
    name: "Aw, snap!",
    identifier: "crash-screen",
  },
};
