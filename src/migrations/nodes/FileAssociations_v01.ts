import type { ApplicationStorage } from "$ts/apps/storage";
import { FileAssocService } from "$ts/server/user/assoc";
import { DefaultFileDefinitions } from "$ts/server/user/assoc/store";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { MigrationNode } from "../node";
import { MigrationVersion } from "../version";

export class FileAssociationsMigrationV01 extends MigrationVersion {
  constructor(migration: MigrationNode, self: typeof FileAssociationsMigrationV01) {
    super(migration, self);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const appStore = this.migration.svc.host.getService<ApplicationStorage>("AppStorage");
    const assoc = this.migration.svc.host.getService<FileAssocService>("FileAssocSvc")
    const apps = await appStore?.get();

    if (!apps) return { result: "err_noop", sucessMessage: "Nothing to do." };

    assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        if (!app.opens?.extensions) continue;

        for (const extension of app.opens.extensions) {
          const existingAssociation = assoc?.getFileAssociation(`dummy${extension}`);

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

    return { sucessMessage: "File associations updated successfully", result: "err_ok" };
  }
}
