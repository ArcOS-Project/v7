import type { IMigrationNodeConstructor } from "$interfaces/migration";
import type { IBaseService } from "$interfaces/service";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";

export interface IMigrationService extends IBaseService {
  get Config(): Record<string, number>;
  MIGRATIONS: IMigrationNodeConstructor[];
  runMigrations(cb?: MigrationStatusCallback): Promise<Record<string, MigrationResult>>;
  runMigration(migration: IMigrationNodeConstructor, cb?: MigrationStatusCallback): Promise<MigrationResult>;
  loadConfiguration(): Promise<Record<string, number>>;
  writeConfiguration(config: Record<string, number>): Promise<Record<string, number>>;
}
