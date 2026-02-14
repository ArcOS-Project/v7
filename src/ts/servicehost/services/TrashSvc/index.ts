import type { ITrashCanService } from "$interfaces/services/TrashSvc";
import { Daemon } from "$ts/daemon";
import { Env, Fs, SysDispatch } from "$ts/env";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory, join } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import { Store } from "$ts/writable";
import type { Service } from "$types/service";
import type { TrashIndexNode } from "$types/trash";

export class TrashCanService extends BaseService implements ITrashCanService {
  INDEX_PATH = join(UserPaths.System, `TrashIndex.json`);
  IndexBuffer = Store<Record<string, TrashIndexNode>>({});

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.IndexBuffer.set(await this.readIndex());
    this.IndexBuffer.subscribe((v) => this.writeIndex(v));
  }

  //#endregion

  async readIndex(): Promise<Record<string, TrashIndexNode>> {
    const content = await Fs.readFile(this.INDEX_PATH);

    if (!content) return await this.writeIndex({});

    try {
      const parsed = JSON.parse(arrayBufferToText(content)!);

      return parsed as Record<string, TrashIndexNode>;
    } catch {
      return await this.writeIndex({});
    }
  }

  async writeIndex(index: Record<string, TrashIndexNode>) {
    await Fs.writeFile(this.INDEX_PATH, textToBlob(JSON.stringify(index, null, 2)));

    return index;
  }

  async moveToTrash(path: string, dispatch = false): Promise<TrashIndexNode | undefined> {
    if (Daemon?.preferences().globalSettings.disableTrashCan) {
      await Fs.deleteItem(path);
      return undefined;
    }

    if (
      !path.startsWith(UserPaths.Root) ||
      path.startsWith(UserPaths.Trashcan) ||
      path === this.INDEX_PATH ||
      path.startsWith(UserPaths.System)
    )
      return undefined;

    const uuid = UUID();
    const isDir = await Fs.isDirectory(path);
    const name = getItemNameFromPath(path);
    const deletedPath = join(UserPaths.Trashcan, uuid);
    const icon = isDir ? "FolderIcon" : Daemon?.assoc?.getUnresolvedAssociationIcon(name) || "DefaultMimeIcon";
    const node = {
      originalPath: path,
      deletedPath: join(deletedPath, name),
      icon,
      name,
      timestamp: Date.now(),
    };

    await Fs.createDirectory(deletedPath, false);

    this.IndexBuffer.update((v) => {
      v[uuid] = node;

      return v;
    });

    await Fs.moveItem(path, `${deletedPath}/${name}`, dispatch);

    SysDispatch.dispatch("fs-flush-folder", getParentDirectory(path));

    return node;
  }

  async restoreTrashItem(uuid: string) {
    const index = this.IndexBuffer()[uuid];

    if (!index) return false;

    await Fs.moveItem(index.deletedPath, index.originalPath, false);

    SysDispatch.dispatch("fs-flush-folder", getParentDirectory(index.originalPath));

    this.IndexBuffer.update((v) => {
      delete v[uuid];
      return v;
    });

    await Fs.deleteItem(join(UserPaths.Trashcan, uuid), false);

    return true;
  }

  getIndex() {
    return this.IndexBuffer();
  }

  async permanentlyDelete(uuid: string) {
    const index = this.IndexBuffer()[uuid];

    if (!index) return false;

    await Fs.deleteItem(join(UserPaths.Trashcan, uuid));

    this.IndexBuffer.update((v) => {
      delete v[uuid];
      return v;
    });

    return true;
  }

  async emptyBin() {
    const buffer = this.IndexBuffer();
    const prog = await Daemon!.files!.FileProgress(
      {
        caption: "Emptying recycle bin",
        subtitle: "Please wait...",
        max: Object.entries(buffer).length,
        icon: Daemon!.icons?.getIconCached("TrashIcon"),
      },
      +Env.get("shell_pid")
    );

    prog.show();

    for (const uuid in buffer) {
      await Fs.deleteItem(join(UserPaths.Trashcan, uuid));
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
