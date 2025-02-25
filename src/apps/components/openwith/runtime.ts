import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getDirectoryName } from "$ts/fs/util";
import { WarningIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppProcessData, AppStorage } from "$types/app";
import type { RenderArgs } from "$types/process";

export class OpenWithRuntime extends AppProcess {
  available = Store<AppStorage>();
  all = Store<AppStorage>();
  filename = Store<string>();
  path = Store<string>();
  selectedId = Store<string>();
  showAll = Store<boolean>(false);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path: string
  ) {
    super(handler, pid, parentPid, app);

    this.renderArgs.path = path;
  }

  async render({ path }: RenderArgs) {
    if (!path) return;

    const available = await this.userDaemon!.findAppToOpenFile(path);

    this.available.set(available);
    this.all.set(await this.userDaemon!.appStore!.get());
    this.filename.set(getDirectoryName(path));
    this.path.set(path);

    if (!available || !available.length) this.showAll.set(true);
  }

  async go(id = this.selectedId()) {
    if (!id) return;

    const compatible = await this.checkCompatibility(id);

    if (!compatible) return;

    await this.closeWindow();
    await this.spawnApp(id, this.parentPid, this.path());
  }

  async checkCompatibility(selectedId = this.selectedId()) {
    return new Promise((r) => {
      const available = this.available();

      if (!available.map((a) => a.id).includes(selectedId)) {
        MessageBox(
          {
            title: "Incompatible app!",
            message:
              "You're about to open a file using an application that might not support it. <b>This is not recommended</b> because the application might malfunction. Are you sure you want to continue?",
            image: WarningIcon,
            sound: "arcos.dialog.warning",
            buttons: [
              {
                caption: "Cancel",
                action: () => {
                  r(false);
                },
              },
              {
                caption: "Continue",
                action: async () => {
                  r(true);
                  await Sleep(400);
                },
                suggested: true,
              },
            ],
          },
          this.pid,
          true
        );
      } else r(true);
    });
  }
}
