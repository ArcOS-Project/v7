import { arrayToText, textToBlob } from "$ts/fs/convert";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/fs/util";
import { FolderIcon } from "$ts/images/filesystem";
import { TrashIcon } from "$ts/images/general";
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
  INDEX_PATH = join(UserPaths.System, `TrashIndex.json`);
  IndexBuffer = Store<Record<string, TrashIndexNode>>({});

  //#region ELCYCEFIL

  constructor(handler: ProcessHandler, pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(handler, pid, parentPid, name, host);
  }

  async start() {
    this.IndexBuffer.set(await this.readIndex());
    this.IndexBuffer.subscribe((v) => this.writeIndex(v));
  }

  //#endregion

  async readIndex(): Promise<Record<string, TrashIndexNode>> {
    const content = await this.fs.readFile(this.INDEX_PATH);

    if (!content) return await this.writeIndex({});

    try {
      const parsed = JSON.parse(arrayToText(content));

      return parsed as Record<string, TrashIndexNode>;
    } catch {
      return await this.writeIndex({});
    }
  }

  async writeIndex(index: Record<string, TrashIndexNode>) {
    await this.fs.writeFile(this.INDEX_PATH, textToBlob(JSON.stringify(index, null, 2)));

    return index;
  }

  async moveToTrash(path: string, dispatch = false): Promise<TrashIndexNode | undefined> {
    if (this.host.daemon?.preferences().globalSettings.disableTrashCan) {
      await this.fs.deleteItem(path);
      return undefined;
    }

    if (!path.startsWith(UserPaths.Root) || path.startsWith(UserPaths.Trashcan) || path === this.INDEX_PATH) return undefined;

    const uuid = UUID();
    const isDir = await this.fs.isDirectory(path);
    const name = getItemNameFromPath(path);
    const deletedPath = join(UserPaths.Trashcan, uuid);
    const icon = isDir ? FolderIcon : this.host.daemon?.assoc?.getFileAssociation(name)?.icon || DefaultMimeIcon;
    const node = {
      originalPath: path,
      deletedPath: join(deletedPath, name),
      icon,
      name,
      timestamp: Date.now(),
    };

    await this.fs.createDirectory(deletedPath, false);

    this.IndexBuffer.update((v) => {
      v[uuid] = node;

      return v;
    });

    await this.fs.moveItem(path, `${deletedPath}/${name}`, dispatch);

    this.systemDispatch.dispatch("fs-flush-folder", getParentDirectory(path));

    return node;
  }

  async restoreTrashItem(uuid: string) {
    const index = this.IndexBuffer()[uuid];

    if (!index) return false;

    await this.fs.moveItem(index.deletedPath, index.originalPath, false);

    this.systemDispatch.dispatch("fs-flush-folder", getParentDirectory(index.originalPath));

    this.IndexBuffer.update((v) => {
      delete v[uuid];
      return v;
    });

    await this.fs.deleteItem(join(UserPaths.Trashcan, uuid), false);

    return true;
  }

  getIndex() {
    return this.IndexBuffer();
  }

  async permanentlyDelete(uuid: string) {
    const index = this.IndexBuffer()[uuid];

    if (!index) return false;

    await this.fs.deleteItem(join(UserPaths.Trashcan, uuid));

    this.IndexBuffer.update((v) => {
      delete v[uuid];
      return v;
    });

    return true;
  }

  async emptyBin() {
    const buffer = this.IndexBuffer();
    const prog = await this.host.daemon.FileProgress(
      {
        caption: "Emptying recycle bin",
        subtitle: "Please wait...",
        max: Object.entries(buffer).length,
        icon: TrashIcon,
      },
      +this.env.get("shell_pid")
    );

    prog.show();

    for (const uuid in buffer) {
      await this.fs.deleteItem(join(UserPaths.Trashcan, uuid));
      prog.mutDone(+1);
    }

    prog.stop();
    this.IndexBuffer.set({});
  }
}

export const trashService: Service = {
  name: "TrashSvc",
  description: "Handles the Recycle Bin",
  process: TrashCanService,
  initialState: "started",
};
