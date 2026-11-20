import type { QueryableOptions } from "../query";

export interface AuditLog {
  _id: string;
  authorId: string;
  message: string;
  severity: AuditSeverity;
  targetUserId?: string;
  data: Record<any, any>;
  createdAt: string;
}

// Audit log severity
export enum AuditSeverity {
  normal, // Normal
  medium, // Medium
  high, // High
  critical, // CRITICAL
  deadly, // DEADLY!?!?!?!!!
}

export enum AuditSeverityIcons {
  moon,
  "shield-check",
  "shield-ellipsis",
  "shield-x",
  siren,
}

export interface AuditLogQueryOptions extends QueryableOptions {
  authorId?: string;
  data?: string;
  message?: string;
  targetUserId?: string;
  severity?: string;
}
