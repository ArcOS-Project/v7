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

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);
  }

  async start() {
    this.populateIndex();
  }

  async populateIndex() {
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

  async deleteLibrary(id: string) {
    const library = this.Index.get(id.toLowerCase());

    if (!id || !library) return false;

    await this.fs.deleteItem(join(UserPaths.Libraries, id)); // Library directory
    await this.fs.deleteItem(join(UserPaths.Libraries, `${id}.json`)); // Library metadata file
    await this.populateIndex();
  }

  async installArcPackageAsLibrary(zip: JSZip) {
    console.log(zip);
    if (!zip.files["payload/"] || !zip.files["payload/library.json"]) throw "Missing payload or metadata";

    const library = tryJsonParse<TpaLibrary>(await zip.files["payload/library.json"].async("text"));
    const destinationPath = join(UserPaths.Libraries, library.identifier);
    const destinationMetaPath = destinationPath + ".json";

    await this.fs.createDirectory(destinationPath, false);
    await this.fs.writeFile(destinationMetaPath, textToBlob(JSON.stringify(library, null, 2)), undefined, false);

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
        await this.fs.createDirectory(scopedPath);
      } else {
        const content = await item.async("arraybuffer");

        await this.fs.writeFile(scopedPath, arrayToBlob(content, fromExtension(path)));
      }
    }

    await this.populateIndex();

    return true;
  }

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
}

export const libraryManagementService: Service = {
  name: "LibMgmtSvc",
  process: LibraryManagement,
  description: "Manages third-party libraries",
  initialState: "started",
};
