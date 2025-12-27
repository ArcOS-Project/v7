import { Log } from "$ts/logging";
import type { LogLevel } from "$types/logging";
import type { MigrationResultStatus, MigrationStatusCallback } from "$types/migrations";

export class MigrationNode {
  public static name = "MigrationNode";
  public static friendlyName = "Unknown Migration";
  public static inversional = false;
  public static deprecated = false;
  public static version = 0; // float
  private self: typeof MigrationNode;

  constructor(self: typeof MigrationNode) {
    this.self = self;
  }

  async _runMigration(cb?: MigrationStatusCallback) {
    this.Log(
      `Executing migration ${this.self.friendlyName} (version ${this.self.inversional ? "inversional" : this.self.version})`
    );

    const status = (caption: string) => cb?.({ caption, migration: this.self });

    const start = Date.now();
    const result = await this.runMigration(status);
    const end = Date.now() - start;

    return;
  }

  async runMigration(cb?: MigrationStatusCallback): Promise<MigrationResultStatus> {
    // stub
    return "err_ok";
  }

  async Log(message: string, level?: LogLevel) {
    Log(`MigrationNode::${this.self.name}`, message, level);
  }
}
