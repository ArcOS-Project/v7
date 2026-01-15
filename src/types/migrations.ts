import type { MigrationNode } from "../ts/migrations/node";

export interface MigrationStatusItem {
  caption: string;
  migration: MigrationNode;
}

export interface MigrationResult {
  result: MigrationResultStatus;
  errorMessage?: string;
  successMessage?: string;
  duration?: number;
}

export type MigrationResultCollection = Record<number, MigrationResult>;

export type MigrationStatusCallback = (caption: string) => void;
export type MigrationResultStatus = "err_ok" | "err_failure" | "err_conflict" | "err_denied" | "err_sameVersion" | "err_noop";
