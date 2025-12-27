import type { ApplicationStorage } from "$ts/apps/storage";
import { DefaultFileDefinitions } from "$ts/server/user/assoc/store";
import { Daemon } from "$ts/server/user/daemon";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { MigrationNode } from "../node";
import { MigrationVersion } from "../version";

export class FileAssociationsMigrationV01 extends MigrationVersion {
  static override version = 0.1;
  static override migrationName: string = "FileAssociationsMigration";

  constructor(migration: MigrationNode, self: typeof FileAssociationsMigrationV01) {
    super(migration, self);
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const appStore = Daemon.serviceHost?.getService<ApplicationStorage>("AppStorage");
    const apps = await appStore?.get();

    if (!apps) return { result: "err_noop", sucessMessage: "Nothing to do." };

    Daemon!.assoc?.updateConfiguration((config) => {
      for (const app of apps) {
        if (!app.opens?.extensions) continue;

        for (const extension of app.opens.extensions) {
          const existingAssociation = Daemon!.assoc?.getFileAssociation(`dummy${extension}`);

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
