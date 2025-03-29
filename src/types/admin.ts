export interface Activity {
  authorId: string;
  token: string;
  userAgent: string;
  location: Location;
  action: string;
  createdAt?: Date;
}

export interface Approval {
  username: string;
  userId: string;
  emailAddress: string;
  validationId: string;
  timestamp: number;
  validated: boolean;
}
export interface AuditLog {
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

export interface FsAccess {
  _id?: string;
  userId: string;
  path: string;
  accessor: string;
  createdAt?: Date;
}
export interface FSItem {
  userId: string;
  itemId: string;
  type: "file" | "directory";
  size?: number;
  mimeType?: string;
  dateCreated: Date;
  dateModified: Date;
  path: string;
}

export interface Token {
  value: string;
  userId: string;
  _id?: string;
  lastUsed?: number;
  timesUsed?: number;
  userAgent?: string;
}

// User interface
export interface User {
  username: string;
  passwordHash: string;
  preferences: object;
  admin: boolean;
  adminScopes: string[];
  approved: boolean;
  _id: string;
  email: string;
  storageSize?: number;
}

export interface ServerLogItem {
  message: string;
  origin: string;
  timestamp: number;
  subs: string[];
}

export enum ServerLogLevel {
  info,
  warning,
  error,
  critical,
}

export interface ServerStatistics {
  counts: ServerStatGroup;
  sizes: ServerStatGroup;
  endpoints: number;
}

export interface ServerStatGroup extends Record<string, number> {
  tokens: number;
  users: number;
  indexes: number;
  accessors: number;
  approvals: number;
  bugreps: number;
  audits: number;
  activities: number;
}

export interface UserTotp {
  userId: string;
  secret: string;
  activated: boolean;
  url: string;
}

export interface PartialUserTotp {
  _id: string;
  activated: boolean;
  userId: string;
}

export interface SharedDrive {
  userId: string;
  accessors: string[];
  shareName: string;
  maxSize: number;
  passwordHash: string;
  description?: string;
  locked: boolean;
  _id?: string;
}

export interface ShareCreateOptions {
  userId: string;
  description?: string;
  size?: number;
  shareName: string;
  password: string;
}
