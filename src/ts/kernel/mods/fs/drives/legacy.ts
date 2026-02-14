import type { ILegacyServerDrive } from "$interfaces/fs";
import { toBase64 } from "$ts/util/base64";
import { type DirectoryReadReturn, type DriveCapabilities, type FolderEntry, type UserQuota } from "$types/fs";
import type { FSQuota, LegacyConnectionInfo, UserDirectory } from "$types/legacy";
import axios, { type AxiosInstance } from "axios";
import { FilesystemDrive } from "./generic";

export class LegacyServerDrive extends FilesystemDrive implements ILegacyServerDrive {
  override FILESYSTEM_LONG: string = "Legacy Server FS";
  override FILESYSTEM_SHORT: string = "LSFS";
  override IDENTIFIES_AS: string = "legacy";
  override FIXED: boolean = true;
  override REMOVABLE: boolean = true;
  override READONLY: boolean = true;

  private connectionInfo: LegacyConnectionInfo;
  private instance?: AxiosInstance;
  private authorizationHeader?: `Bearer ${string}`;

  TEST_MODES: [boolean, number][] = [
    [true, 443],
    [false, 3333],
    [true, 80],
    [false, 80],
    [true, 3333],
  ];

  DEFAULT_DIRECTORY: UserDirectory = {
    files: [],
    directories: [],
    name: "",
    scopedPath: "",
  };

  DEFAULT_QUOTA: FSQuota = {
    used: 0,
    max: 0,
    free: 0,
    username: "ArcOS",
  };

  protected override CAPABILITIES: Record<DriveCapabilities, boolean> = {
    readDir: true,
    makeDir: false,
    readFile: true,
    writeFile: false,
    tree: false,
    copyItem: false,
    moveItem: false,
    deleteItem: false,
    direct: false,
    quota: true,
    bulk: false,
    stat: false,
  };

  constructor(uuid: string, letter: string, connection: LegacyConnectionInfo) {
    super(uuid, letter);

    this.connectionInfo = connection;
    this.label = `${this.connectionInfo.username} (Legacy)`;
  }

  async _spinUp(): Promise<boolean> {
    const connectionUrlInfo = await this.legacy_testConnection(this.connectionInfo.url, this.connectionInfo.authCode);
    if (!connectionUrlInfo) return false;

    this.instance = axios.create({
      baseURL: `${connectionUrlInfo.proto}://${this.connectionInfo.url}:${connectionUrlInfo.port}`,
      params: {
        ac: this.connectionInfo.authCode,
      },
    });

    const isValidCred = await this.legacy_generateToken(this.connectionInfo.username, this.connectionInfo.password);
    if (!isValidCred) return false;

    return true;
  }

  //#region INTERFACING

  async legacy_readDir(path: string) {
    try {
      const response = await this.instance!.get(`/fs/dir/get?path=${toBase64(path || "./")}`, {
        headers: { Authorization: this.authorizationHeader },
      });

      return (response.data.data as UserDirectory) ?? this.DEFAULT_DIRECTORY;
    } catch (e) {
      return this.DEFAULT_DIRECTORY;
    }
  }

  async legacy_readFile(path: string): Promise<ArrayBuffer | undefined> {
    try {
      const response = await this.instance!.get(`/fs/file/get?path=${toBase64(path || "./")}`, {
        headers: { Authorization: this.authorizationHeader },
        responseType: "arraybuffer",
      });

      return response.data;
    } catch {
      return undefined;
    }
  }

  async legacy_testConnection(server: string, authCode: string = "") {
    for (let i = 0; i < this.TEST_MODES.length; i++) {
      const proto = `http${this.TEST_MODES[i][0] ? "s" : ""}`;
      const port = this.TEST_MODES[i][1];
      const url = `${proto}://${server}:${port}/users/get?ac=${authCode}`;

      this.Log(`Testing ${server} on port ${port} and protocol ${proto}...`);

      try {
        await (await fetch(url, {})).json();
        await (await fetch(url.replace("users/get", "connect"), {})).json();

        this.Log(`Got a response from URL ${url}`);

        return { proto, port, url };
      } catch {
        this.Log(`Did not get a valid response from ${url}`);

        continue;
      }
    }

    this.Log(`Can't connect to server ${server}: none of the modes match`);

    return false;
  }

  async legacy_generateToken(username: string, password: string) {
    try {
      const basic = toBase64(`${username}:${password}`);
      const response = await this.instance!.get("/auth", { headers: { Authorization: `Basic ${basic}` } });

      if (response.status !== 200) return false;

      this.authorizationHeader = `Bearer ${response.data.data.token}`;

      return true;
    } catch {
      return false;
    }
  }

  async legacy_quota(): Promise<FSQuota> {
    try {
      const response = await this.instance!.get("/fs/quota", { headers: { Authorization: this.authorizationHeader } });

      if (response.status !== 200) return this.DEFAULT_QUOTA;

      return response.data?.data ?? this.DEFAULT_QUOTA;
    } catch {
      return this.DEFAULT_QUOTA;
    }
  }

  //#endregion

  //#region V7 FILE OPERATIONS

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const content = await this.legacy_readDir(path);

    return {
      totalFiles: content.files.length,
      totalFolders: content.directories.length,
      dirs: content.directories.map(
        (d) =>
          ({
            name: d.name,
            dateModified: new Date(),
            dateCreated: new Date(),
            itemId: "",
          }) as FolderEntry
      ),
      files: content.files.map((f) => ({
        name: f.filename,
        dateCreated: new Date(f.dateCreated),
        dateModified: new Date(f.dateModified),
        size: f.size ?? 0,
        mimeType: f.mime,
        itemId: "missing",
      })),
      totalSize: 0,
      shortcuts: {},
    };
  }

  async readFile(path: string) {
    return await this.legacy_readFile(path);
  }

  async quota(): Promise<UserQuota> {
    const quota = await this.legacy_quota();

    return {
      used: quota.used,
      max: quota.max,
      free: quota.max - quota.used,
      percentage: (100 / quota.max) * quota.used,
    };
  }

  //#endregion
}
