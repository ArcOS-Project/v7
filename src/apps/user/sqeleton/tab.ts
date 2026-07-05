import type { ISqeletonRuntime } from "$interfaces/runtimes/ISqeletonRuntime";
import { Daemon, Fs } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import { textToBlob } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import { Store } from "$ts/writable";

export class SqeletonTab {
  isNew = true;
  filePath?: string;
  parent: ISqeletonRuntime;
  content = Store<string>("");
  modified = Store(false);
  filename = Store<string | undefined>();

  constructor(parent: ISqeletonRuntime, filePath?: string) {
    this.filePath = filePath;
    this.isNew = !filePath;
    this.parent = parent;
  }

  async Initialize() {
  
  }

  async Save() {
    if (!this.filePath) return this.SaveAs();
  }

  async SaveAs() {
    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose where to save this query",
      icon: "SqeletonIcon",
      isSave: true,
      startDir: this.parent.filePath ? getParentDirectory(this.parent.filePath) : UserPaths.Documents,
    });

    if (!path) return;

    this.filePath = path;
    await Fs.writeFile(this.filePath, textToBlob(this.content()));
  }
}
