import type { IInstallerProcessBase } from "$interfaces/distrib";
import { Daemon } from "$ts/daemon";
import { Fs } from "$ts/env";
import { UserPaths } from "$ts/user/store";
import { textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import type { TpaLibrary } from "$types/libraries";
import type { ArcPackage, StoreItem } from "$types/package";
import type JSZip from "jszip";
import type { DistributionServiceProcess } from "..";
import { InstallerProcessBase } from "./base";

export class LibraryInstallerProcess extends InstallerProcessBase implements IInstallerProcessBase {
  library?: TpaLibrary;

  //#region LIFECYCLE

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

  protected async afterSuccessfulInstallation(): Promise<any> {
    this.logStatus("Populating index", "other");
    await Daemon?.libraries?.populateIndex();
    this.setCurrentStatus("done");
  }

  //#endregion

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

  async writeMetadataFile() {
    this.Log("writeMetadataFile");

    this.logStatus("Library information", "file");
    try {
      await Fs.writeFile(`${this.workingDirectory}.json`, textToBlob(JSON.stringify(this.library!, null, 2)), undefined, false);
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

    const host = Daemon!.serviceHost;
    const distrib = host?.getService<DistributionServiceProcess>("DistribSvc")!;
    const libraries = Daemon?.libraries!;

    await libraries.deleteLibrary(metadata.appId.replace("Library::", ""), onStage);

    const installedPkg = await distrib?.getInstalledStoreItemById(metadata.appId);

    if (installedPkg) {
      onStage?.("Removing package from installed...");

      distrib.BUSY = "";
    }
  }
}
