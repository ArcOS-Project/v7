import { ShutdownIcon } from "$ts/images/power";
import type { ArcLang } from "$ts/lang";
import { AppProcess } from "../../../ts/apps/process";
import type { ProcessHandler } from "../../../ts/process/handler";
import type { AppProcessData } from "../../../types/app";

export class TestAppRuntime extends AppProcess {
  lang: ArcLang;
  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData
  ) {
    super(handler, pid, parentPid, app);

    this.lang = this.kernel.getModule<ArcLang>("lang");
  }

  async render() {
    this.altMenu.set([
      {
        caption: "File",
        subItems: [
          { caption: "New window", icon: "plus" },
          { caption: "New window", icon: "plus" },
          { sep: true },
          { caption: "Upload", icon: "upload" },
          { caption: "Download", icon: "download" },
          { sep: true },
          { caption: "Exit", image: ShutdownIcon },
        ],
      },
      { caption: "Edit" },
      { caption: "View" },
      { caption: "Go" },
    ]);
  }
}
