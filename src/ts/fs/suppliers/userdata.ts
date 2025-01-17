import type { WaveKernel } from "$ts/kernel";
import type { UserDaemon } from "$ts/server/user/daemon";
import { textToArrayBuffer } from "../convert";
import { FilesystemSupplier } from "../supplier";

export class UserDataFilesystemSupplier extends FilesystemSupplier {
  private resolves: Record<string, () => Promise<string>> = {
    ".userdata": async () =>
      JSON.stringify(this.userDaemon.preferences(), null, 2),
  };

  private userDaemon: UserDaemon;
  override readonly supplies = {
    readDir: false,
    createDirectory: false,
    readFile: true,
    writeFile: false,
    tree: false,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
  };

  constructor(kernel: WaveKernel, daemon: UserDaemon) {
    super(kernel);

    this.userDaemon = daemon;
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    if (this.resolves[path]) {
      return textToArrayBuffer(await this.resolves[path]());
    }

    return undefined;
  }
}
