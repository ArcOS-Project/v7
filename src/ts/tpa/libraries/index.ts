import type { InstallerProcess } from "$ts/distrib/installer";
import { JsExec } from "$ts/jsexec";
import { tryJsonParse } from "$ts/json";
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayToBlob, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import type { TpaLibrary } from "$types/libraries";
import { LogLevel } from "$types/logging";
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

  async deleteLibrary(id: string) {
    this.Log(`Deleting library ${id}`);

    const library = this.Index.get(id.toLowerCase());

    if (!id || !library) return false;

    await this.fs.deleteItem(join(UserPaths.Libraries, id), false); // Library directory
    await this.fs.deleteItem(join(UserPaths.Libraries, `${id}.json`), false); // Library metadata file
    await this.populateIndex();
  }

  async installLibraryFromArcInstallerProc(proc: InstallerProcess) {
    const { zip } = proc;

    if (!zip?.files["payload/"] || !zip.files["payload/library.json"]) throw "Missing payload or metadata";

    const library = tryJsonParse<TpaLibrary>(await zip.files["payload/library.json"].async("text"));

    this.Log(`Installing library ${library.identifier}`);

    const destinationPath = join(UserPaths.Libraries, library.identifier);
    const destinationMetaPath = destinationPath + ".json";

    proc.logStatus(destinationPath, "mkdir");
    await this.fs.createDirectory(destinationPath, false);
    proc.setCurrentStatus("done");
    proc.logStatus(destinationMetaPath, "file");
    await this.fs.writeFile(destinationMetaPath, textToBlob(JSON.stringify(library, null, 2)), undefined, false);
    proc.setCurrentStatus("done");

    const files = Object.fromEntries(
      Object.entries(zip!.files)
        .filter(([k]) => k.startsWith("payload/"))
        .map(([k, v]) => [k.replace("payload/", ""), v])
        .filter(Boolean)
    );
    const sortedPaths = Object.keys(files).sort((p) => (files[p].dir ? -1 : 0));

    for (const path of sortedPaths) {
      if (!path || path === "library.json") continue;
      const scopedPath = join(destinationPath, path);
      const item = files[path];

      if (!item) continue;
      if (item.dir) {
        proc.logStatus(path, "mkdir");
        await this.fs.createDirectory(scopedPath);
        proc.setCurrentStatus("done");
      } else {
        proc.logStatus(path, "file");

        const content = await item.async("arraybuffer");
        await this.fs.writeFile(scopedPath, arrayToBlob(content, fromExtension(path)));

        proc.setCurrentStatus("done");
      }
    }

    proc.logStatus("Populating index", "other");
    await this.populateIndex();
    proc.setCurrentStatus("done");

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
