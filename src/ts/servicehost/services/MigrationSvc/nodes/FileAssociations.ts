import type { IMigrationNodeConstructor } from "$interfaces/migration";
import type { IMigrationService } from "$interfaces/services/MigrationSvc";
import type { ApplicationStorage } from "$ts/servicehost/services/AppStorage";
import type { FileAssocService } from "$ts/servicehost/services/FileAssocSvc";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import { DefaultFileDefinitions } from "../../FileAssocSvc/store";
import { MigrationNode } from "../node";

export class FileAssociationsMigration extends MigrationNode {
  static override name = "FileAssociationsMig";
  static override friendlyName = "File associations migration";

  constructor(self: IMigrationNodeConstructor, svc: IMigrationService) {
    super(self, svc);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const appStore = this.svc.host.getService<ApplicationStorage>("AppStorage");
    const assoc = this.svc.host.getService<FileAssocService>("FileAssocSvc");
    const apps = await appStore?.get();

    if (!apps) return { result: "err_noop", successMessage: "Nothing to do." };

    assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        if (!app.opens?.extensions) continue;

        for (const extension of app.opens.extensions) {
          //
          const existingAssociation = assoc?.getFileAssociation(
            !extension.includes(".") || !extension.startsWith(".") ? extension : `dummy${extension}`
          );

          // BUG: addition of `?.handledBy?.app` fixes existing assoc check
          if (existingAssociation?.handledBy?.app) continue;

          config.associations.apps[app.id] ||= [];
          config.associations.apps[app.id].push(extension);

          cb?.(`Updated association for ${app.metadata.name}`);
        }
      }

      for (const definitionKey in DefaultFileDefinitions) {
        const definitionValue = DefaultFileDefinitions[definitionKey];

        if (!config.definitions[definitionKey]) {
          config.definitions[definitionKey] = definitionValue;

          cb?.(`Updated definition for ${definitionValue.friendlyName}`);
        }
      }

      return config;
    });

    return { successMessage: "File associations updated successfully", result: "err_ok" };
  }
}
