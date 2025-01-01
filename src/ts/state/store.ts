import type { State } from "../../types/state";
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
};
