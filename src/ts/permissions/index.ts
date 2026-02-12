import { AppProcess } from "$ts/apps/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { Fs, USERFS_UUID } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { Process } from "$ts/process/instance";
import { Daemon } from "$ts/server/user/daemon";
import { sliceIntoChunks } from "$ts/util";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { Store } from "$ts/writable";
import { ElevationLevel } from "$types/elevation";
import type { PermissionStorage, SudoPermissions } from "$types/permission";
import { sha256 } from "js-sha256";
import { PermissionedFilesystemInteractor } from "./filesystem";
import {
  DefaultPermissionStorage,
  PERMISSION_ERRORS,
  PermissionErrorCaptions,
  PERMISSIONS,
  type PermissionError,
  type PermissionString,
} from "./store";
import type { IProcess } from "$interfaces/process";

export let Permissions: PermissionHandler;

export class PermissionHandler extends Process {
  public _criticalProcess: boolean = true;
  private PERMISSION_ID_REGEX = /^([0-9A-Z]{4}-){3}[0-9A-Z]{4}$/gm;
  #PERMISSION_FILE = "U:/System/Permissions.json";
  #PERMISSION_EXPIRY = 1000 * 60 * 10; // 10 minutes
  public Configuration = Store<PermissionStorage>(DefaultPermissionStorage);
  private SudoConfiguration = Store<SudoPermissions>({});
  private FirstSubDone = false;
  private configurationWriteTimeout?: NodeJS.Timeout;
  #permissionedFilesystemInteractors: Record<string, PermissionedFilesystemInteractor> = {};

  get #PERMISSION_EXPIRY_DYN() {
    return Date.now() + this.#PERMISSION_EXPIRY;
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number) {
    super(pid, parentPid);

    this.setSource(__SOURCE__);
    Permissions = this;
    this.name = "PermissionHandler";
  }

  protected async start(): Promise<any> {
    await this.readConfiguration();

    this.Configuration.subscribe((v) => {
      if (!this.FirstSubDone) return (this.FirstSubDone = true);

      clearTimeout(this.configurationWriteTimeout);

      this.configurationWriteTimeout = setTimeout(() => {
        this.writeConfiguration(v);
      }, 100);
    });
  }

  //#endregion

  //#region CONFIGURATION

  async readConfiguration() {
    const content = await Fs.readFile(this.#PERMISSION_FILE);
    if (!content) return this.writeConfiguration(this.Configuration());

    const json = tryJsonParse<PermissionStorage>(arrayBufferToText(content));
    if (typeof json === "string") return this.writeConfiguration(DefaultPermissionStorage);

    this.Configuration.set(json);
  }

  async writeConfiguration(config: PermissionStorage) {
    await Fs.writeFile(this.#PERMISSION_FILE, textToBlob(JSON.stringify(config, null, 2)), undefined, false);
  }

  //#endregion

  //#region APPROVAL

  hasPermission(process: IProcess, permission: PermissionString) {
    this.validatePermissionString(permission);
    const id = this.getPermissionId(process);

    return this.Configuration().allowed[id]?.includes(permission);
  }

  hasPermissionById(permissionId: string, permission: PermissionString) {
    this.validatePermissionString(permission);
    this.validatePermissionId(permissionId);

    return this.Configuration().allowed[permissionId]?.includes(permission);
  }

  grantPermission(process: IProcess, permission: PermissionString) {
    this.validatePermissionString(permission);
    const id = this.getPermissionId(process);

    if (this.hasPermission(process, permission)) this.throwError("PERMERR_ALREADY_OWNED", id, permission);

    this.Configuration.update((v) => {
      v.allowed[id] ||= [];
      v.allowed[id].push(permission);

      return v;
    });
  }

  grantPermissionById(permissionId: string, permission: PermissionString) {
    this.validatePermissionString(permission);
    this.validatePermissionId(permissionId);

    if (this.hasPermissionById(permissionId, permission)) this.throwError("PERMERR_ALREADY_OWNED", permissionId, permission);

    this.Configuration.update((v) => {
      v.allowed[permissionId] ||= [];
      v.allowed[permissionId].push(permission);

      return v;
    });
  }

  revokePermission(process: IProcess, permission: PermissionString) {
    this.validatePermissionString(permission);
    const id = this.getPermissionId(process);

    this.Configuration.update((v) => {
      v.allowed[id] ||= [];
      v.allowed[id].splice(v.allowed[id].indexOf(permission), 1);

      return v;
    });
  }

  revokePermissionById(permissionId: string, permission: PermissionString) {
    this.validatePermissionString(permission);
    this.validatePermissionId(permissionId);

    this.Configuration.update((v) => {
      v.allowed[permissionId] ||= [];
      v.allowed[permissionId].splice(v.allowed[permissionId].indexOf(permission), 1);

      return v;
    });
  }

  //#endregion
  //#region DENIAL

  isDenied(process: IProcess, permission: PermissionString) {
    this.validatePermissionString(permission);

    const id = this.getPermissionId(process);
    return this.Configuration().denied[id]?.includes(permission);
  }

  isDeniedById(permissionId: string, permission: PermissionString) {
    this.validatePermissionId(permissionId);
    this.validatePermissionString(permission);

    return this.Configuration().denied[permissionId]?.includes(permission);
  }

  denyPermission(process: IProcess, permission: PermissionString) {
    this.validatePermissionString(permission);

    const id = this.getPermissionId(process);

    if (this.isDenied(process, permission)) this.throwError("PERMERR_ALREADY_DENIED", id, permission);
    if (this.hasPermission(process, permission)) this.revokePermission(process, permission);

    this.Configuration.update((v) => {
      v.denied[id] ||= [];
      v.denied[id].push(permission);

      return v;
    });
  }

  denyPermissionById(permissionId: string, permission: PermissionString) {
    this.validatePermissionString(permission);
    this.validatePermissionId(permissionId);

    if (this.isDeniedById(permissionId, permission)) this.throwError("PERMERR_ALREADY_DENIED", permissionId, permission);
    if (this.hasPermissionById(permissionId, permission)) this.revokePermissionById(permissionId, permission);

    this.Configuration.update((v) => {
      v.denied[permissionId] ||= [];
      v.denied[permissionId].push(permission);

      return v;
    });
  }

  revokeDenial(process: IProcess, permission: PermissionString) {
    this.validatePermissionString(permission);

    const id = this.getPermissionId(process);

    if (!this.isDenied(process, permission)) this.throwError("PERMERR_NOT_DENIED", id, permission);

    this.Configuration.update((v) => {
      v.denied[id] ||= [];
      v.denied[id].splice(v.denied[id].indexOf(permission), 1);

      return v;
    });
  }

  revokeDenialById(permissionId: string, permission: PermissionString) {
    this.validatePermissionId(permissionId);
    this.validatePermissionString(permission);

    if (!this.isDeniedById(permissionId, permission)) this.throwError("PERMERR_NOT_DENIED", permissionId, permission);

    this.Configuration.update((v) => {
      v.denied[permissionId] ||= [];
      v.denied[permissionId].splice(v.denied[permissionId].indexOf(permission), 1);

      return v;
    });
  }

  //#endregion
  //#region EXTERNAL IFACE

  async requestPermission(process: IProcess, permission: PermissionString) {
    const id = this.getPermissionId(process);
    const app = process instanceof AppProcess ? process.app.data : undefined;
    const noun = app ? "application" : "process";

    if (this.isDenied(process, permission)) this.throwError("PERMERR_DENIED", id, permission);
    if (this.hasPermission(process, permission)) return;

    const proceed = await Daemon.elevation?.manuallyElevate({
      what: `This ${noun} wants you to grant a permission`,
      title: app ? app.metadata.name : process.name,
      description: permission,
      image: app ? `@app::${app.id}` : "ComponentIcon",
      level: ElevationLevel.medium,
    });

    if (!proceed) {
      this.denyPermission(process, permission);
      this.throwError("PERMERR_DENIED", id, permission);
    }

    this.grantPermission(process, permission);
  }

  hasPermissionExplicit<T>(process: IProcess, permission: PermissionString, returnValue?: T): T | undefined {
    const id = this.getPermissionId(process);

    if (this.hasSudo(process)) return returnValue;

    if (this.isDenied(process, permission)) this.throwError("PERMERR_DENIED", id, permission);
    if (!this.hasPermission(process, permission)) this.throwError("PERMERR_NOT_GRANTED", id, permission);

    return returnValue;
  }

  getOrCreatePermissionedFilesystemInteractor(process: IProcess) {
    const id = this.getPermissionId(process);

    if (!this.hasPermission(process, "PERMISSION_FS_READ")) this.throwError("PERMERR_DENIED", id, "PERMISSION_FS_READ");

    if (!this.#permissionedFilesystemInteractors[id])
      this.#permissionedFilesystemInteractors[id] = new PermissionedFilesystemInteractor(process);

    return this.#permissionedFilesystemInteractors[id];
  }

  hasReadPermissionForPathExplicit(process: IProcess, path: string) {
    path = Daemon.files?.normalizePath(path)!;
    if (path === "U:/System/Permissions.json") Permissions.throwError("PERMERR_DENIED");

    Permissions.hasPermissionExplicit(process, "PERMISSION_FS_READ");

    if (!path.startsWith("U:/") && !path.startsWith(`${USERFS_UUID}:/`))
      Permissions.hasPermissionExplicit(process, "PERMISSION_FS_READ_EXTERNAL");
    if (path.startsWith("U:/Applications")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_READ_APPLICATIONS");
    if (path.startsWith("U:/Home")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_READ_USER");
    if (path.startsWith("U:/System/Config")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_READ_CONFIG");
    if (path.startsWith("U:/System")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_READ_SYSTEM");
  }

  hasWritePermissionForPathExplicit(process: IProcess, path: string) {
    path = Daemon.files?.normalizePath(path)!;
    if (path === "U:/System/Permissions.json") Permissions.throwError("PERMERR_DENIED");

    Permissions.hasPermissionExplicit(process, "PERMISSION_FS_WRITE");

    if (!path.startsWith("U:/") && !path.startsWith(`${USERFS_UUID}:/`))
      Permissions.hasPermissionExplicit(process, "PERMISSION_FS_WRITE_EXTERNAL");
    if (path.startsWith("U:/Applications")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_WRITE_APPLICATIONS");
    if (path.startsWith("U:/Home")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_WRITE_USER");
    if (path.startsWith("U:/System/Config")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_WRITE_CONFIG");
    if (path.startsWith("U:/System")) Permissions.hasPermissionExplicit(process, "PERMISSION_FS_WRITE_SYSTEM");
  }

  resetPermissionsById(permissionId: string) {
    this.validatePermissionId(permissionId);

    this.Configuration.update((v) => {
      delete v.allowed[permissionId];
      delete v.denied[permissionId];
      delete v.registration[permissionId];

      return v;
    });
  }

  //#endregion
  //#region UTILITY

  validatePermissionString(permission: PermissionString) {
    if (!PERMISSIONS.includes(permission)) this.throwError("PERMERR_INVALID_PERMSTR", undefined, permission);
  }

  validatePermissionId(permissionId: string) {
    if (!permissionId.match(this.PERMISSION_ID_REGEX)) this.throwError("PERMERR_NATURE_UNKNOWN");
  }

  throwError(error: PermissionError, client?: string, permission?: PermissionString) {
    const code = "0x" + (24 + PERMISSION_ERRORS.indexOf(error)).toString(16).toUpperCase().padStart(4, "0");
    const reason = PermissionErrorCaptions[error].replace("%p", permission || "UNKNOWN").replace("%c", client || "UNKNOWN");

    throw new Error(`${reason} (${code})`);
  }

  getPermissionId(process: IProcess, sudo?: boolean) {
    let str = "";

    if (sudo) {
      str = `${process.pid}-${process.parentPid}-${process.sourceUrl}-${process.name}`;
    } else if (process instanceof ThirdPartyAppProcess) {
      str = `${process.workingDirectory}-${process.app.data.id}-${process.app.data.entrypoint}-${process.app.data.metadata.name}`;
    } else if (process instanceof AppProcess) {
      str = `${process.sourceUrl}-${process.app.id}-${process.app.data.metadata.name}`;
    }

    if (!str) this.throwError("PERMERR_NATURE_UNKNOWN");

    const uuid = sliceIntoChunks(sha256(str).slice(0, 16).split(""), 4)
      .map((c) => c.join("").toUpperCase())
      .join("-");

    if (process instanceof AppProcess && !sudo) {
      this.setRegistration(uuid, process.app.id);
    }

    return uuid;
  }

  //#endregion
  //#region REGISTRATION

  setRegistration(clientId: string, appId: string) {
    this.Configuration.update((v) => {
      v.registration[clientId] = appId;

      return v;
    });
  }

  removeRegistration(clientId: string) {
    this.Configuration.update((v) => {
      delete v.registration[clientId];

      return v;
    });
  }

  removeApplication(appId: string) {
    const clients = Object.entries(this.Configuration().registration)
      .filter(([_, v]) => v === appId)
      .map(([k]) => k);

    for (const clientId of clients) {
      this.removeRegistration(clientId);

      this.Configuration.update((v) => {
        delete v.allowed[clientId];
        delete v.denied[clientId];

        return v;
      });
    }
  }

  //#endregion
  //#region SUDO

  hasSudo(process: IProcess) {
    const id = this.getPermissionId(process, true);
    const config = this.SudoConfiguration();

    const has = Number.isInteger(config[id]);

    if (has && config[id] < Date.now()) return false;

    if (has) {
      this.refreshSudo(process);
    }

    return has;
  }

  grantSudo(process: IProcess) {
    const id = this.getPermissionId(process, true);

    return this.SudoConfiguration.update((v) => {
      const includes = Number.isInteger(v[id]);

      if (includes) return v;

      v[id] = this.#PERMISSION_EXPIRY_DYN;

      return v;
    });
  }

  revokeSudo(process: IProcess) {
    const id = this.getPermissionId(process, true);

    if (!this.hasSudo(process)) this.throwError("PERMERR_SUDO_NOT_GRANTED", id);

    this.SudoConfiguration.update((v) => {
      delete v[id];

      return v;
    });
  }

  refreshSudo(process: IProcess) {
    const id = this.getPermissionId(process, true);
    const config = this.SudoConfiguration();

    const has = Number.isInteger(config[id]);

    if (!has) this.throwError("PERMERR_SUDO_NOT_GRANTED", id);

    this.SudoConfiguration.update((v) => {
      v[id] = this.#PERMISSION_EXPIRY_DYN;

      return v;
    });
  }

  //#endregion
}
