import type { ServiceHost } from "$ts/services";
import { BaseService } from "$ts/services/base";
import type { MigrationStatusCallback } from "$types/migrations";
import type { MigrationNode } from "./unit";

export class MigrationService extends BaseService {
  constructor(pid: number, parentPid: number, name: string, host: ServiceHost) {
    super(pid, parentPid, name, host);
  }

  async runMigrations(cb?: MigrationStatusCallback) {
  }

  async runMigration(migration: typeof MigrationNode) {
    const instance = new migration()
  }
}
