import { Fs } from "$ts/env";
import { tryJsonParse } from "$ts/json";
import { UserPaths } from "$ts/server/user/store";
import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { MigrationResultCollection, MigrationStatusCallback } from "$types/migrations";
import type { Service } from "$types/service";
import type { MigrationNode } from "./node";
import { FileAssociationsMigration } from "./nodes/FileAssociations";

export class MigrationService extends BaseService {
  private Configuration = Store<Record<string, number>>({});
  private CONFIG_PATH = join(UserPaths.Migrations, "Index.json");

  private MIGRATIONS: (typeof MigrationNode)[] = [FileAssociationsMigration];

  public get Config() {
    return this.Configuration();
  }

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    let initialDone = false;

    this.Configuration.set(await this.loadConfiguration());
    this.Configuration.subscribe((v) => {
      if (!initialDone) return (initialDone = true);

      this.writeConfiguration(v);
    });
  }

  async runMigrations(cb?: MigrationStatusCallback): Promise<Record<string, MigrationResultCollection>> {
    this.Log("runMigrations: now running versional migrations");
    const config = this.Configuration();
    const results: Record<string, MigrationResultCollection> = {};

    cb?.("Running migrations");

    for (const migration of this.MIGRATIONS) {
      if (migration.inversional) {
        this.Log(
          `runMigrations: Not running ${migration.name}; it is inversional and must be executed explicitly.`,
          LogLevel.warning
        );

        continue;
      }

      if (migration.version === 0) {
        this.Log(
          `runMigrations: Not running ${migration.name}; migrations with a version of 0 must be executed explicitly.`,
          LogLevel.warning
        );

        continue;
      }

      const currentVersion = migration.version;
      const installedVersion = config[migration.name] ?? 0;

      if (currentVersion > installedVersion) {
        const result = await this.runMigration(migration, cb);

        results[migration.name] = result;

        this.Configuration.update((v) => {
          v[migration.name] = migration.version;
          return v;
        });
      } else {
        this.Log(`runMigrations: ${migration.name}: up to date`);
      }
    }

    cb?.("Done running migrations");

    return results;
  }

  async runMigration(migration: typeof MigrationNode, cb?: MigrationStatusCallback): Promise<MigrationResultCollection> {
    const instance = new migration(migration, this);
    const result = await instance._runMigration(cb);

    return result;
  }

  async loadConfiguration() {
    this.Log(`Loading configuration`);

    const config = tryJsonParse<Record<string, number>>(arrayBufferToText((await Fs.readFile(this.CONFIG_PATH))!));

    if (!config || typeof config === "string") {
      return await this.writeConfiguration({});
    }

    return config;
  }

  async writeConfiguration(config: Record<string, number>) {
    this.Log(`Writing configuration: ${Object.keys(config).length} migrations`);

    await Fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(config, null, 2)));

    return config;
  }
}

export const migrationService: Service = {
  name: "MigrationSvc",
  description: "Handles the migration of configuration files",
  process: MigrationService,
  initialState: "started",
};
