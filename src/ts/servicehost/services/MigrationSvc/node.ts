import type { IMigrationNode, IMigrationNodeConstructor } from "$interfaces/IMigrationNode";
import type { IMigrationService } from "$interfaces/services/IMigrationService";
import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import packageJson from "../../../../../package.json";

export class MigrationNode implements IMigrationNode {
  public static name = "MigrationNode";
  public static friendlyName = "Unknown Migration";
  public static inversional = false;
  public static deprecated = false;

  // float, defaults to ArcOS version (more or less)
  public static version =
    Number(
      `0x${packageJson.version
        .split(".")
        .map((s) => s.padStart(2, "0"))
        .join("")}`
    ) / 1e5;
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
