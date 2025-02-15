import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { DirectoryReadReturn } from "$types/fs";
import type { RenderArgs } from "$types/process";

export class FileManagerRuntime extends AppProcess {
  path = Store<string>("");
  contents = Store<DirectoryReadReturn | undefined>();
  loading = Store<boolean>(true);
  errored = Store<boolean>(false);
  selection = Store<string[]>([]);
  copyList = Store<string[]>([]);
  cutList = Store<string[]>([]);

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    path?: string
  ) {
    super(handler, pid, parentPid, app);

    console.log("bruh");
    this.renderArgs.path = path;
  }

  async render({ path }: RenderArgs) {
    this.navigate(path || "U:/");
  }

  async navigate(path: string) {
    this.loading.set(true);
    this.errored.set(false);
    try {
      const contents = await this.fs.readDir(path);

      if (!contents) this.DirectoryNotFound();
      else {
        this.contents.set(contents);
        this.path.set(path);
      }
    } catch {
      this.DirectoryNotFound();
    } finally {
      this.loading.set(false);
    }
  }

  DirectoryNotFound() {
    this.errored.set(true);

    MessageBox(
      {
        title: "Location unavailable",
        message: `The location you tried to navigate to is unavailable. Maybe the specified drive isn't mounted or the folder itself is missing.`,
        buttons: [
          {
            caption: "Your Drive",
            action: () => {
              this.navigate("U:/");
            },
          },
        ],
        sound: "arcos.dialog.error",
        image: ErrorIcon,
      },
      this.pid,
      true
    );
  }
}
