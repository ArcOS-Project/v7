import { DistributionServiceProcess } from "$ts/distrib";
import { LibraryInstallerProcess } from "$ts/distrib/installer/libraryinstaller";
import { JsExec } from "$ts/jsexec";
import { tryJsonParse } from "$ts/json";
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayToBlob, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type { FilesystemProgressCallback } from "$types/fs";
import type { TpaLibrary } from "$types/libraries";
import { LogLevel } from "$types/logging";
import type { StoreItem } from "$types/package";
import type { Service } from "$types/service";
import { fromExtension } from "human-filetypes";
import type JSZip from "jszip";

export class LibraryManagement extends BaseService {
  Index: Map<string, TpaLibrary> = new Map([]);

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.populateIndex();
  }

  //#endregion
  //#region INDEXING

  async populateIndex() {
    this.Log("Populating index");
    this.Index.clear();

    try {
      const libraryObject = await this.fs.bulk<TpaLibrary>(UserPaths.Libraries, "json");

      for (const filename in libraryObject) {
        const interpretedIdentifier = filename.replace(".json", "");
        const library = libraryObject[filename];

        if (library.identifier !== interpretedIdentifier) {
          this.Log(`Skipping ${filename}: filename does not match the library identifier`, LogLevel.warning);

          continue;
        }

        this.Index.set(interpretedIdentifier, library);
      }
    } catch {
      this.Index = new Map([]);
    }
  }

  //#endregion
  //#region INSTALL/DELETE

  async deleteLibrary(id: string, onStage?: (stage: string) => void): Promise<boolean> {
    this.Log(`Deleting library ${id}`);

    const library = this.Index.get(id.toLowerCase());

    if (!id || !library) return false;

    onStage?.("Deleting library directory");
    await this.fs.deleteItem(join(UserPaths.Libraries, id), false); // Library directory
    onStage?.("Deleting library configuration");
    await this.fs.deleteItem(join(UserPaths.Libraries, `${id}.json`), false); // Library metadata file
    onStage?.("Refreshing index");
    await this.populateIndex();

    return true;
  }

  //#endregion
  //#region EXTERNAL

  async getLibrary<T = any>(id: string): Promise<T> {
    const defaultReturnValue = {};
    const library = this.Index.get(id.toLowerCase());

    if (!library) return defaultReturnValue as T; // TODO: determine

    try {
      const filePath = join(UserPaths.Libraries, id, library.entrypoint);
      const engine = await this.handler.spawn<JsExec>(
        JsExec,
        undefined,
        this.host.daemon.userInfo._id,
        this.host.daemon.pid,
        filePath
      );

      return (await engine?.getContents()) as T;
    } catch {
      return defaultReturnValue as T; // TODO: determine
    }
  }

  //#endregion
}

export const libraryManagementService: Service = {
  name: "LibMgmtSvc",
  process: LibraryManagement,
  description: "Manages third-party libraries",
  initialState: "started",
};
