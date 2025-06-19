import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { AppProcessData } from "$types/app";
import type { ArcPackage, InstallStatusItem } from "$types/package";
import type JSZip from "jszip";

export class InstallerProcess extends Process {
  constructor(handler: ProcessHandler, pid: number, parentPid: number) {
    super(handler, pid, parentPid);
  }

  async _installPackage(metadata: ArcPackage, zip: JSZip, onProgress?: (item: InstallStatusItem) => void) {
    if (!(await this.createInstallLocation())) return;

    const { files, sortedPaths } = await this.getFiles();

    for (const path of sortedPaths) {
      if (!path) continue;
      const target = join(this.metadata!.installLocation, path);
      const item = files[path];

      if (!item) continue;
      if (item.dir) {
        if (!(await this.mkdir(target))) return;
      } else {
        if (!(await this.writeFile(target, await item.async("arraybuffer")))) return;
      }
    }

    if (!(await this.registerApp())) return;

    this.installing.set(false);
    this.completed.set(true);
  }
}
