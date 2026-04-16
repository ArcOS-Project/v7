import type { IMigrationNodeConstructor } from "$interfaces/IMigrationNode";
import type { IBaseService } from "$interfaces/IServiceHost";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";

export interface IMigrationService extends IBaseService {
  get Config(): Record<string, number>;
  MIGRATIONS: IMigrationNodeConstructor[];
  runMigrations(cb?: MigrationStatusCallback): Promise<Record<string, MigrationResult>>;
  runMigration(migration: IMigrationNodeConstructor, cb?: MigrationStatusCallback): Promise<MigrationResult>;
}
