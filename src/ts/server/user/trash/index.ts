import { arrayToText, textToBlob } from "$ts/fs/convert";
import { getItemNameFromPath, join } from "$ts/fs/util";
import { FolderIcon } from "$ts/images/filesystem";
import { DefaultMimeIcon } from "$ts/images/mime";
import type { ProcessHandler } from "$ts/process/handler";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { Service } from "$types/service";
import type { TrashIndexNode } from "$types/trash";
import { UserPaths } from "../store";

export class TrashCanService extends BaseService {
  CONFIG_PATH = join(UserPaths.System, `TrashIndex.json`);
  ConfigBuffer = Store<Record<string, TrashIndexNode>>({});
  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async start() {
    this.ConfigBuffer.set(await this.readConfigFile());
    this.ConfigBuffer.subscribe((v) => this.writeConfigFile(v));
  }

  async readConfigFile(): Promise<Record<string, TrashIndexNode>> {
    const content = await this.fs.readFile(this.CONFIG_PATH);

    if (!content) return await this.writeConfigFile({});

    try {
      const parsed = JSON.parse(arrayToText(content));

      return parsed as Record<string, TrashIndexNode>;
    } catch {
      return await this.writeConfigFile({});
    }
  }

  async writeConfigFile(index: Record<string, TrashIndexNode>) {
    await this.fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(index, null, 2)));

    return index;
  }

  async moveToTrash(path: string): Promise<TrashIndexNode | undefined> {
    if (!path.startsWith(UserPaths.Root) || path.startsWith(UserPaths.Trashcan) || path === this.CONFIG_PATH) return;

    const uuid = UUID();
    const isDir = await this.fs.isDirectory(path);
    const exists = isDir || !!(await this.fs.readFile(path));

    if (!exists) return undefined;

    const name = getItemNameFromPath(path);
    const deletedPath = join(UserPaths.Trashcan, uuid);
    const icon = isDir ? FolderIcon : this.host.daemon?.getMimeIconByFilename(name) || DefaultMimeIcon;
    const node = {
      originalPath: path,
      deletedPath: join(deletedPath, name),
      icon,
      name,
    };

    await this.fs.createDirectory(deletedPath);

    this.ConfigBuffer.update((v) => {
      v[uuid] = node;

      return v;
    });

    await this.fs.moveItem(path, `${deletedPath}/${name}`);

    return node;
  }

  async restoreTrashItem(uuid: string) {
    const index = this.ConfigBuffer()[uuid];

    if (!index) return false;

    await this.fs.moveItem(index.deletedPath, index.originalPath);

    this.ConfigBuffer.update((v) => {
      delete v[uuid];
      return v;
    });

    await this.fs.deleteItem(join(UserPaths.Trashcan, uuid));

    return true;
  }
}

export const trashService: Service = {
  name: "TrashSvc",
  description: "Handles the Recycle Bin",
  process: TrashCanService,
  initialState: "started",
  startCondition(daemon) {
    return !daemon?.preferences().globalSettings.disableTrashCan;
  },
};
