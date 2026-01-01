import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";
import type { MigrationResultCollection, MigrationStatusCallback } from "$types/migrations";
import type { MigrationService } from ".";
import { MigrationVersion } from "./version";

export class MigrationNode {
  public static name = "MigrationNode";
  public static friendlyName = "Unknown Migration";
  public static inversional = false;
  public static deprecated = false;
  public static version = MigrationVersion.version; // float, defaults to ArcOS version (more or less)
  public svc: MigrationService;

  protected self: typeof MigrationNode;
  protected versions: Record<number, typeof MigrationVersion> = {
    0: MigrationVersion,
  };

  constructor(self: typeof MigrationNode, svc: MigrationService) {
    this.self = self;
    this.svc = svc;
  }

  async _runMigration(cb?: MigrationStatusCallback): Promise<MigrationResultCollection> {
    this.Log(
      `Executing migration ${this.self.friendlyName} (version ${this.self.inversional ? "inversional" : this.self.version})`
    );

    if (this.self.inversional) {
      this.Log(`Warning: migration is inversional: version -1 will be used for the execution.`, LogLevel.warning);

      if (!this.versions[-1]) {
        this.Log(`Missing version -1 for inversional migration. Halting.`, LogLevel.error);
        return {};
      }

      const version = this.versions[-1];
      const versionInstance = new version(this, version);
      const result = await versionInstance._runMigration(cb);

      return { [-1]: result };
    }

    const currentVersion = this.self.version;
    const installedVersion = this.svc.Config[this.self.name] ?? 0;
    const migrationResult: MigrationResultCollection = {};

    if (currentVersion <= installedVersion) {
      return { [currentVersion]: { result: "err_sameVersion", errorMessage: "The migration is already up to date." } };
    }

    for (let i = installedVersion; i <= currentVersion; i += 0.1) {
      const idx = +i.toFixed(1);
      const version = this.versions[idx];

      if (!version) {
        this.Log(`Skipping migration version ${idx}: no migration exists for this version`);
        continue;
      }

      const versionInstance = new version(this, version);
      const result = await versionInstance._runMigration(cb);

      migrationResult[i] = result;
    }

    return migrationResult;
  }

  async Log(message: string, level?: LogLevel) {
    Log(`MigrationNode::${this.self.name}`, message, level);
  }
}
