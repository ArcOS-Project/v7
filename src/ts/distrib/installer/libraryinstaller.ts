import type { ArcPackage, StoreItem } from "$types/package";
import type JSZip from "jszip";
import { InstallerProcessBase } from "./base";
import { join } from "$ts/util/fs";
import { UserPaths } from "$ts/server/user/store";
import type { TpaLibrary } from "$types/libraries";
import { tryJsonParse } from "$ts/json";
import { textToBlob } from "$ts/util/convert";
import { TryGetDaemon } from "$ts/server/user/daemon";
import type { DistributionServiceProcess } from "..";

export class LibraryInstallerProcess extends InstallerProcessBase {
  library?: TpaLibrary;
  constructor(pid: number, parentPid: number, zip: JSZip, metadata: ArcPackage, item: StoreItem) {
    super(pid, parentPid, zip, metadata, item);

    this.name = "LibraryInstallerProcess";

    this.setSource(__SOURCE__);
  }

  async initialize(): Promise<void> {
    if (!this.zip?.files["payload/"] || !this.zip.files["payload/library.json"]) throw "Missing payload or metadata";

    this.library = tryJsonParse<TpaLibrary>(await this.zip.files["payload/library.json"].async("text"));
    this.workingDirectory = join(UserPaths.Libraries, this.library.identifier);
    this.TOTAL_COUNT.set(this.TOTAL_COUNT() + Object.keys((await this.getFiles()).files).length);
    this.MISC_STEPCOUNT = 2;
  }

  async go(): Promise<boolean> {
    if (!(await this.createInstallLocation())) return false;
    if (!(await this.writeMetadataFile())) return false;

    const { files, sortedPaths } = await this.getFiles();

    for (const path of sortedPaths) {
      if (!path || path === "library.json") continue;
      const scopedPath = join(this.workingDirectory, path);
      const item = files[path];

      if (!item) continue;
      if (item.dir) {
        if (!(await this.mkdir(scopedPath))) return false;
      } else {
        if (!(await this.writeFile(scopedPath, await item.async("arraybuffer")))) return false;
      }
    }

    return true;
  }

  protected async afterSuccessfulInstallation(): Promise<any> {
    this.logStatus("Populating index", "other");
    await this.userDaemon.libraries?.populateIndex();
    this.setCurrentStatus("done");
  }

  async writeMetadataFile() {
    this.Log("writeMetadataFile");

    this.logStatus("Library information", "file");
    try {
      await this.fs.writeFile(
        `${this.workingDirectory}.json`,
        textToBlob(JSON.stringify(this.library!, null, 2)),
        undefined,
        false
      );
      this.setCurrentStatus("done");
      return true;
    } catch {
      this.fail(`Failed to write library information`);
      return false;
    }
  }

  static async validatePackage(metadata: ArcPackage, zip: JSZip): Promise<boolean> {
    if (!zip.files["payload/library.json"]) return false;

    if (!metadata.appId.startsWith("Library::")) {
      return false;
    }

    return true;
  }

  static async uninstallPackage(metadata: ArcPackage, deleteFiles = true, onStage?: (stage: string) => void): Promise<void> {
    onStage?.("Getting installed package");

    const daemon = TryGetDaemon();
    const host = daemon!.serviceHost;
    const distrib = host?.getService<DistributionServiceProcess>("DistribSvc")!;
    const libraries = daemon?.libraries!;

    await libraries.deleteLibrary(metadata.appId.replace("Library::", ""), onStage);

    const installedPkg = await distrib?.getInstalledStoreItemById(metadata.appId);

    if (installedPkg) {
      onStage?.("Removing package from installed...");

      distrib.BUSY = "";
    }
  }
}
