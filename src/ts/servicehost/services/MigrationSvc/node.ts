import type { IMigrationNode, IMigrationNodeConstructor } from "$interfaces/migration";
import type { IMigrationService } from "$interfaces/service";
import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import packageJson from "../../../../../package.json";

export class MigrationNode implements IMigrationNode {
  public static name = "MigrationNode";
  public static friendlyName = "Unknown Migration";
  public static inversional = false;
  public static deprecated = false;
  public static version = packageJson.version
    .split(".")
    .splice(1, 2)
    .map(Number)
    .reduce((p, v, i) => p + (i == 1 ? v / 10 : v)); // float, defaults to ArcOS version (more or less)
  public svc: IMigrationService;

  protected self: IMigrationNodeConstructor;

  constructor(self: IMigrationNodeConstructor, svc: IMigrationService) {
    this.self = self;
    this.svc = svc;
  }

  async _runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    this.Log(`Running migration (cb=${!!cb})`);
    const start = Date.now();
    const result = await this.runMigration(cb);
    const end = Date.now() - start;

    this.Log(`Migration completed (result=${result.result}, msg=${result.errorMessage || result.successMessage || "<none>"})`);

    return { ...result, duration: end };
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult> {
    // stub
    return { result: "err_ok" };
  }

  async Log(message: string, level?: LogLevel) {
    Log(`MigrationNode::${this.self.name}`, message, level);
  }
}
