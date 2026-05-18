import type { IMigrationNodeConstructor } from "$interfaces/migration";
import type { IMigrationService } from "$interfaces/services/MigrationSvc";
import { ConfigurationBuilder } from "$ts/config";
import type { ServiceHost } from "$ts/servicehost";
import { BaseService } from "$ts/servicehost/base";
import { UserPaths } from "$ts/user/store";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import { LogLevel } from "$types/logging";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { Service } from "$types/service";
import { AppShortcutsMigration } from "./nodes/AppShortcuts";
import { FileAssociationsMigration } from "./nodes/FileAssociations";
import { IconConfigurationMigration } from "./nodes/IconConfiguration";

export class MigrationService extends BaseService implements IMigrationService {
  private Index = Store<Record<string, number>>({});
  private CONFIG_PATH = join(UserPaths.Migrations, "Index.json");
  private Configuration = new ConfigurationBuilder()
    .ForProcess(this)
    .ReadsFrom(this.Index)
    .WritesTo(this.CONFIG_PATH)
    .WithDefaults({})
    .WithCooldown(100)
    .Build();

  public MIGRATIONS: IMigrationNodeConstructor[] = [FileAssociationsMigration, IconConfigurationMigration, AppShortcutsMigration];

  public get Config() {
    return this.Index();
  }

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: ServiceHost, broadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, broadcast);

    this.setSource(__SOURCE__);
  }

  protected async start(): Promise<any> {
    this.initBroadcast?.("Running migrations");
    await this.Configuration.initialize();
    await this.runMigrations(this.initBroadcast);
  }

  //#endregion

  async runMigrations(cb?: MigrationStatusCallback): Promise<Record<string, MigrationResult>> {
    this.Log("runMigrations: now running versional migrations");
    const config = this.Index();
    const results: Record<string, MigrationResult> = {};

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

        if (result.result === "err_ok" || result.result === "err_sameVersion")
          this.Index.update((v) => {
            v[migration.name] = migration.version;
            return v;
          });
        else {
          this.Log(
            `runMigrations: ${migration.name}::${result.result} -> ${result.errorMessage || result.successMessage || "<no_msg>"}`
          );
        }
      } else {
        this.Log(`runMigrations: ${migration.name}: up to date`);
      }
    }

    cb?.("Done running migrations");

    return results;
  }

  async runMigration(migration: IMigrationNodeConstructor, cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const instance = new migration(migration, this);
    const result = await instance._runMigration(cb);

    if (result.result === "err_ok" || result.result === "err_sameVersion")
      this.Index.update((v) => {
        v[migration.name] = migration.version;
        return v;
      });

    return result;
  }
}

export const migrationService: Service = {
  name: "MigrationSvc",
  description: "Handles the migration of configuration files",
  process: MigrationService,
  initialState: "started",
};
