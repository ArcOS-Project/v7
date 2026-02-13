import type { LogLevel } from "$types/logging";
import type { MigrationResult, MigrationStatusCallback } from "$types/migrations";
import type { Constructs } from "./common";
import type { IMigrationService } from "./service";

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
