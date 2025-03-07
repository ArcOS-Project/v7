import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { DirectoryReadReturn } from "$types/fs";
import type { ShortcutStore } from "$types/shortcut";

export class WallpaperRuntime extends AppProcess {
  contents = Store<DirectoryReadReturn | undefined>();
  shortcuts = Store<ShortcutStore>({});
  directory: string;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    desktopDir?: string
  ) {
    super(handler, pid, parentPid, app);

    this.directory = desktopDir || "U:/Desktop";
    this.renderArgs = { desktopDir: this.directory };
    this.globalDispatch.subscribe<string>("fs-flush-folder", (path) => {
      if (!path || this._disposed) return;

      if (path.startsWith(this.directory)) this.updateContents();
    });
  }

  async render({ desktopDir }: { desktopDir: string }) {
    this.closeIfSecondInstance();

    try {
      await this.fs.createDirectory(desktopDir);
      await this.updateContents();
    } catch {
      MessageBox(
        {
          title: "Failed to create home directory",
          message:
            "The desktop wasn't able to create the necessary desktop folder, which contains your desktop icons.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        this.parentPid
      );
      this.closeWindow();
    }
  }

  async updateContents() {
    this.shortcuts.set(await this.fs.bulk(this.directory, "arclnk"));
    this.contents.set(await this.fs.readDir(this.directory));
  }
}
