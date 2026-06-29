import type { MigrationResult, MigrationStatusCallback } from "$types/services/migrations";
import type { LogLevel } from "$types/shared/logging";
import type { Constructs } from "./common";
import type { IMigrationService } from "./services/IMigrationService";

// !tpa
export interface IMigrationNode {
  svc: IMigrationService;
  _runMigration(cb?: MigrationStatusCallback): Promise<MigrationResult>;
  Log(message: string, level?: LogLevel): Promise<void>;
}

export interface IMigrationNodeConstructor extends Constructs<IMigrationNode, [IMigrationNodeConstructor, IMigrationService]> {
  name: string;
  friendlyName: string;
  inversional: boolean;
  deprecated: boolean;
  version: number;
}
// !endtpa
