import { ApplicationStorage } from "$ts/apps/storage";
import { tryJsonParse } from "$ts/json";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { ExpandedFileAssociationInfo, FileAssociationConfig } from "$types/assoc";
import type { Service } from "$types/service";
import { UserPaths } from "../store";
import { DefaultFileDefinitions } from "./store";

export class FileAssocService extends BaseService {
  private CONFIG_PATH = join(UserPaths.System, "FileAssociations.json");
  private Configuration = Store<FileAssociationConfig>();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  async start() {
    await this.loadConfiguration();

    this.host.daemon.assoc = this;
  }

  //#endregion

  private async loadConfiguration() {
    if (this._disposed) return;

    this.Log("Loading configuration");
    const contents = await this.fs.readFile(this.CONFIG_PATH);

    const json = contents ? tryJsonParse<FileAssociationConfig>(arrayToText(contents)) : undefined;

    if (!json || typeof json === "string") return await this.writeConfiguration(this.defaultFileAssociations());

    this.Configuration.set(json);
  }

  private async writeConfiguration(configuration: FileAssociationConfig) {
    if (this._disposed) return configuration;
    this.Log("Writing configuration");

    await this.fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(configuration, null, 2)));

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
    for (const handlerId in this.host.daemon.fileHandlers) {
      const handler = this.host.daemon.fileHandlers[handlerId];

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
      icon: this.host.daemon.getIconCached(definition?.icon || "DefaultMimeIcon"),
      handledBy: {
        app: storage?.getAppSynchronous(
          Object.entries(associations.apps)
            .filter(([_, e]) => e.includes(extension.toLowerCase()) || e.includes(filename))
            .map(([a]) => a)[0]
        ),
        handler:
          this.host.daemon.fileHandlers[
            Object.entries(associations.handlers)
              .filter(([_, e]) => e.includes(extension.toLowerCase()) || e.includes(filename))
              .map(([h]) => h)[0]
          ],
      },
    };
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
