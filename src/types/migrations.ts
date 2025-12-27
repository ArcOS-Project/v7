import type { MigrationNode } from "../migrations/unit";

export interface MigrationStatusItem {
  caption: string;
  migration: MigrationNode;
}

export interface MigrationResult {
  result: MigrationResultStatus;
  errorMessage?: string;
  sucessMessage?: string;
}

export type MigrationStatusCallback = (caption: string) => void;
export type MigrationResultStatus = "err_ok" | "err_failure" | "err_conflict" | "err_denied";
