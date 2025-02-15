import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { getParentDirectory } from "$ts/fs/util";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Sleep } from "$ts/sleep";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { DirectoryReadReturn } from "$types/fs";
import type { RenderArgs } from "$types/process";

export class FileManagerRuntime extends AppProcess {
  path = Store<string>("");
  contents = Store<DirectoryReadReturn | undefined>();
  loading = Store<boolean>(false);
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
    if (this.path() === path) return;

    this.loading.set(true);
    this.errored.set(false);
    this.path.set(path);

    await this.refresh();

    this.loading.set(false);
  }

  async refresh() {
    const path = this.path();

    if (!path) return;

    try {
      const contents = await this.fs.readDir(path);

      if (!contents) this.DirectoryNotFound();
      else {
        this.contents.set(contents);
      }
    } catch (e) {
      console.log(e);
      this.DirectoryNotFound();
    } finally {
      await Sleep(10);
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

  parentDir() {
    const parent = getParentDirectory(this.path());

    this.navigate(parent || this.path());
  }

  public updateSelection(e: MouseEvent, path: string) {
    if (!e.shiftKey) return this.selection.set([path]);

    const selected = this.selection.get();

    if (selected.includes(path)) selected.splice(selected.indexOf(path), 1);
    else selected.push(path);

    this.selection.set(selected);

    return;
  }

  public setCopyFiles(files = this.selection()) {
    this.copyList.set(files || []);
    this.cutList.set([]);
  }

  public setCutFiles(files = this.selection()) {
    this.cutList.set(files || []);
    this.copyList.set([]);
  }
}
