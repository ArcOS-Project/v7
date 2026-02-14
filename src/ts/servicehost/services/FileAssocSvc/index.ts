import type { IFileAssocService } from "$interfaces/service";
import { ApplicationStorage } from "$ts/servicehost/services/AppStorage";
import { Fs } from "$ts/env";
import { tryJsonParse } from "$ts/util/json";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { ExpandedFileAssociationInfo, FileAssociationConfig } from "$types/assoc";
import type { Service } from "$types/service";
import { Daemon } from "$ts/daemon";
import { UserPaths } from "$ts/user/store";
import { DefaultFileDefinitions } from "./store";

export class FileAssocService extends BaseService implements IFileAssocService {
  private CONFIG_PATH = join(UserPaths.System, "FileAssociations.json");
  private Configuration = Store<FileAssociationConfig>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  async start() {
    await this.loadConfiguration();

    Daemon!.assoc = this;
  }

  //#endregion

  private async loadConfiguration() {
    if (this._disposed) return;

    this.Log("Loading configuration");
    const contents = await Fs.readFile(this.CONFIG_PATH);

    const json = contents ? tryJsonParse<FileAssociationConfig>(arrayBufferToText(contents)) : undefined;

    if (!json || typeof json === "string") return await this.writeConfiguration(this.defaultFileAssociations());

    this.Configuration.set(json);
  }

  private async writeConfiguration(configuration: FileAssociationConfig) {
    if (this._disposed) return configuration;
    this.Log("Writing configuration");

    await Fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(configuration, null, 2)));

    this.Configuration.set(configuration);

    return configuration;
  }

  public async updateConfiguration(
    callback: (config: FileAssociationConfig) => FileAssociationConfig | Promise<FileAssociationConfig>
  ) {
    if (this._disposed) return;

    const result = await callback(this.Configuration());

    this.Configuration.set(result);
    await this.writeConfiguration(result);
  }

  public defaultFileAssociations(): FileAssociationConfig {
    const apps = this.host.getService<ApplicationStorage>("AppStorage")?.buffer() || [];
    const result: FileAssociationConfig = {
      associations: {
        apps: {},
        handlers: {},
      },
      definitions: DefaultFileDefinitions,
    };

    // apps
    for (const app of apps) {
      if (app.opens?.extensions) {
        result.associations.apps[app.id] = app.opens.extensions;
      }
    }

    // handlers
    for (const handlerId in Daemon!.files!.fileHandlers) {
      const handler = Daemon!.files!.fileHandlers[handlerId];

      if (handler.opens.extensions) result.associations.handlers[handlerId] = handler.opens.extensions;
    }

    return result;
  }

  getFileAssociation(path: string): ExpandedFileAssociationInfo | undefined {
    if (this._disposed || !path) return;

    const storage = this.host.getService<ApplicationStorage>("AppStorage");
    const config = this.Configuration();
    const associations = config?.associations;
    const definitions = config?.definitions;
    const split = path.split(".");
    const filename = getItemNameFromPath(path);
    const extension = `.${split[split.length - 1]}`.toLowerCase();

    if (!associations || !definitions) return undefined;

    const definition = definitions[extension] || definitions[filename];

    return {
      extension: extension,
      friendlyName: definition?.friendlyName || "Unknown",
      icon: Daemon!.icons!.getIconCached(definition?.icon || "DefaultMimeIcon"),
      handledBy: {
        app: storage?.getAppSynchronous(
          Object.entries(associations.apps)
            .filter(([_, e]) => e.includes(extension.toLowerCase()) || e.includes(filename))
            .map(([a]) => a)[0]
        ),
        handler:
          Daemon?.files!.fileHandlers[
            Object.entries(associations.handlers)
              .filter(([_, e]) => e.includes(extension.toLowerCase()) || e.includes(filename))
              .map(([h]) => h)[0]
          ],
      },
    };
  }

  getUnresolvedAssociationIcon(path: string): string {
    const config = this.Configuration();
    const associations = config?.associations;
    const definitions = config?.definitions;
    const split = path.split(".");
    const filename = getItemNameFromPath(path);
    const extension = `.${split[split.length - 1]}`.toLowerCase();

    if (!associations || !definitions) return "DefaultMimeIcon";
    const definition = definitions[extension] || definitions[filename];

    return definition?.icon || "DefaultMimeIcon";
  }

  getConfiguration() {
    return this.Configuration();
  }
}

export const fileAssocService: Service = {
  name: "FileAssoc",
  description: "Handles file associations",
  process: FileAssocService,
  initialState: "started",
};
