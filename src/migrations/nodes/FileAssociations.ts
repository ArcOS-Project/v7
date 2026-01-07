import type { ApplicationStorage } from "$ts/apps/storage";
import type { FileAssocService } from "$ts/server/user/assoc";
import { DefaultFileDefinitions } from "$ts/server/user/assoc/store";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { MigrationService } from "..";
import { MigrationNode } from "../node";

export class FileAssociationsMigration extends MigrationNode {
  static override name = "FileAssociationsMig";
  static override friendlyName = "File associations migration";

  constructor(self: typeof MigrationNode, svc: MigrationService) {
    super(self, svc);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const appStore = this.svc.host.getService<ApplicationStorage>("AppStorage");
    const assoc = this.svc.host.getService<FileAssocService>("FileAssocSvc");
    const apps = await appStore?.get();

    if (!apps) return { result: "err_noop", successMessage: "Nothing to do." };

    console.log(apps.map((a) => a.id + "\n"));

    console.log("NOW UPDATING CONFIGURATION");

    assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        console.log("NOW UPDATING " + app.id);

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

      console.log(`NOW UPDATING FILE DEFINITIONS`);

      for (const definitionKey in DefaultFileDefinitions) {
        const definitionValue = DefaultFileDefinitions[definitionKey];

        console.log(`NOW UPDATING ${definitionKey}`);

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
