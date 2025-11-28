import { sortByKey } from "$ts/util";
import { blobToText, textToArrayBuffer } from "$ts/util/convert";
import { getParentDirectory } from "$ts/util/fs";
import type { ExistingEurekaNote, ExistingEurekaUser, FolderRead } from "$types/eureka";
import type { DirectoryReadReturn, DriveCapabilities, FilesystemProgressCallback } from "$types/fs";
import type { AxiosInstance } from "axios";
import axios from "axios";
import { FilesystemDrive } from "./drive";
import { toForm } from "$ts/form";

export class EurekaDrive extends FilesystemDrive {
  private axios?: AxiosInstance;
  private token: string;
  private EUREKA_URL = "https://eureka.izkuipers.nl/api";
  public FILESYSTEM_LONG: string = "Eureka Integration";
  public FILESYSTEM_SHORT: string = "EIFS";
  public IDENTIFIES_AS: string = "eureka";
  public REMOVABLE: boolean = true;

  protected CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true, // done
    readFile: true, // done
    bulk: false,
    stat: false,
    makeDir: true, // done
    writeFile: true, // done
    moveItem: false,
    copyItem: false,
    tree: false,
    deleteItem: true, // done
    direct: false,
    quota: false,
  };

  constructor(uuid: string, letter: string, token: string) {
    super(uuid, letter);

    this.token = token;
  }

  async _spinUp(): Promise<boolean> {
    const connected = await this.Connect();
    if (!connected) return false;

    const tokenIsValid = await this.ValidateToken();
    if (!tokenIsValid) return false;

    return true;
  }

  async Connect() {
    this.axios = axios?.create({
      baseURL: this.EUREKA_URL,
    });

    try {
      const response = await this.axios.get("/ping");

      if (response.data?.ping !== "Pong!") throw "";

      return true;
    } catch (e) {
      return false;
    }
  }

  async ValidateToken(token = this.token) {
    const userInfo = await this.GetUserInfo(token);

    if (!userInfo) {
      return false;
    }

    this.label = userInfo.username;
    return true;
  }

  async GetUserInfo(token: string) {
    try {
      const response = await this.axios!.get(`/auth/user/info`, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status !== 200) throw "Token invalid";

      return response.data as ExistingEurekaUser;
    } catch (e) {
      return undefined;
    }
  }

  private async _readFolderByPath(path = "") {
    try {
      const response = await this.axios!.get(path ? `/folders/read/path/${path}`.replaceAll("//", "/") : `/folders/read/path`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      const data = response.data as FolderRead;

      data.folders = sortByKey(data.folders, "name");
      data.notes = sortByKey(data.notes, "name");

      return response.data as FolderRead;
    } catch (e) {
      return undefined;
    }
  }

  private async _readNote(id: string): Promise<ExistingEurekaNote | undefined> {
    try {
      const response = await this.axios!.get(`/notes/read/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });

      return response.data as ExistingEurekaNote;
    } catch (e) {
      return undefined;
    }
  }

  async _writeNote(id: string, data: string): Promise<boolean> {
    try {
      const response = await this.axios!.put(`/notes/write/${id}`, toForm({ data }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch (e) {
      return false;
    }
  }

  async _createNote(name: string, data: string, folderId?: string) {
    try {
      const response = await this.axios!.post(`/notes`, toForm({ name, data, folderId }), {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.data as ExistingEurekaNote;
    } catch (e) {
      return undefined;
    }
  }

  async _noteIdFromPath(path: string) {
    const parent = getParentDirectory(path);
    const filename = path.replace(`${parent}/`, "");
    const folder = await this._readFolderByPath(parent);
    if (!folder) return undefined;

    const note = folder.notes.filter((n) => n.name === filename)[0];
    if (!note) return undefined;

    return note._id;
  }

  async _folderIdFromPath(path: string) {
    const folder = await this._readFolderByPath(path);

    if (!folder) return undefined;

    return folder.folderId;
  }

  async _deleteNote(id: string): Promise<boolean> {
    try {
      const response = await this.axios!.delete(`/notes/delete/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch (e) {
      return false;
    }
  }

  async _deleteFolder(id: string) {
    try {
      const response = await this.axios!.delete(`/folders/delete/${id}`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      return response.status === 200;
    } catch (e) {
      return false;
    }
  }

  async _createFolder(path: string) {
    try {
      const response = await this.axios!.post(
        `/folders/create/${path}`,
        {},
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      );

      return response.status === 200;
    } catch (e) {
      return false;
    }
  }

  //#region ENTRYPOINTS

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const content = await this._readFolderByPath(path);

    if (!content) return undefined;

    return {
      dirs: content.folders.map((f) => ({
        name: f.name,
        dateCreated: new Date(f.createdAt),
        dateModified: new Date(f.modifiedAt),
        itemId: "missing",
      })),
      files: content.notes.map((f) => ({
        name: f.name,
        size: 0,
        dateCreated: new Date(f.createdAt),
        dateModified: new Date(f.updatedAt),
        mimeType: "text/plain",
        itemId: "missing",
      })),
      totalFiles: content.notes.length,
      totalFolders: content.folders.length,
      totalSize: 0,
      shortcuts: {},
    };
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    const noteId = await this._noteIdFromPath(path);
    if (!noteId) return undefined;

    const noteContent = await this._readNote(noteId);
    if (!noteContent) return undefined;

    return textToArrayBuffer(noteContent.data);
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    const noteId = await this._noteIdFromPath(path);
    const string = await blobToText(data);

    console.log(noteId);

    if (!noteId) {
      // new note
      const folder = await this._folderIdFromPath(getParentDirectory(path));
      console.log(folder);
      if (!folder) return false;

      const parent = getParentDirectory(path);
      const filename = path.replace(`${parent}/`, "");
      const result = await this._createNote(filename, string, folder);

      return !!result;
    } else {
      // existing note
      const written = await this._writeNote(noteId, await blobToText(data));
      console.log(written);

      return !!written;
    }
  }

  async deleteItem(path: string): Promise<boolean> {
    const noteId = await this._noteIdFromPath(path);

    if (!noteId) {
      const folderId = await this._folderIdFromPath(path);
      if (!folderId) return false;

      const result = await this._deleteFolder(folderId);
      return result;
    } else {
      const result = await this._deleteNote(noteId);
      return result;
    }
  }

  async createDirectory(path: string): Promise<boolean> {
    return await this._createFolder(path);
  }

  //#endregion
}
