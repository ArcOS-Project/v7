import type { IServiceHost } from "$interfaces/IServiceHost";
import type { IApplicationStorage } from "$interfaces/services/IApplicationStorage";
import type { IFileAssocService } from "$interfaces/services/IFileAssocService";
import { ConfigurationBuilder } from "$ts/config";
import { Daemon } from "$ts/env";
import { BaseService } from "$ts/servicehost/base";
import { UserPaths } from "$ts/user/store";
import { getItemNameFromPath, join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { ExpandedFileAssociationInfo, FileAssociationConfig } from "$types/assoc";
import type { Service } from "$types/service";
import { DefaultFileDefinitions } from "./store";

export class FileAssocService extends BaseService implements IFileAssocService {
  private CONFIG_PATH = join(UserPaths.System, "FileAssociations.json");
  private Associations = Store<FileAssociationConfig>();
  private Configuration = new ConfigurationBuilder<FileAssociationConfig>()
    .ForProcess(this)
    .ReadsFrom(this.Associations)
    .WritesTo(this.CONFIG_PATH)
    .WithDefaults(this.defaultFileAssociations())
    .Build();

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.initBroadcast?.("Starting file associations");
    await this.Configuration.initialize();
  }

  //#endregion
  public async updateConfiguration(
    callback: (config: FileAssociationConfig) => FileAssociationConfig | Promise<FileAssociationConfig>
  ) {
    if (this._disposed) return;

    const result = await callback(this.Associations());

    this.Associations.set(result);
  }

  public defaultFileAssociations(): FileAssociationConfig {
    const apps = this.host.getService<IApplicationStorage>("AppStorage")?.buffer() || [];
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

    const storage = this.host.getService<IApplicationStorage>("AppStorage");
    const config = this.Associations();
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
    const config = this.Associations();
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
    return this.Associations();
  }
}

export const fileAssocService: Service = {
  name: "FileAssoc",
  description: "Handles file associations",
  process: FileAssocService,
  initialState: "started",
};
