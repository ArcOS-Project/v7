import { Log } from "$ts/logging";
import type { LogLevel } from "$types/logging";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import { MigrationNode } from "./node";
import packageJson from "../../package.json";

export class MigrationVersion {
  public static version = packageJson.version
    .split(".")
    .splice(1, 2)
    .map(Number)
    .reduce((p, v, i) => p + (i == 1 ? v / 10 : v));

  protected migration: MigrationNode;
  protected self: typeof MigrationVersion;

  constructor(migration: MigrationNode, self: typeof MigrationVersion) {
    this.migration = migration;
    this.self = self;
  }

  async _runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    const start = Date.now();
    const result = await this.runMigration(cb);
    const end = Date.now() - start;

    return { ...result, duration: end };
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    // stub
    return { result: "err_ok" };
  }

  async Log(message: string, level?: LogLevel) {
    Log(`MigrationNode::${this.self.name}::v${this.self.version}`, message, level);
  }
}
