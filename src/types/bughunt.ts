import type { LogItem } from "./logging";

export interface BugReport {
  authorId?: string;
  title: string;
  body: string;
  logs: LogItem[];
  closed: boolean;
  resolved: boolean;
  version: `${number}.${number}.${number}`;
  location: Location;
  userData?: Record<string, any>;
  userAgent?: string;
  api?: string;
  frontend: string;
  meta: MetaEnvironment;
  _id?: string;
  createdAt: string;
  mode: string;
  build: string;
}

export interface OutgoingBugReport {
  title: string;
  body: string;
  logs: LogItem[];
  version: `${number}.${number}.${number}`;
  location: Location;
  userAgent?: string;
  api?: string;
  frontend: string;
  meta: MetaEnvironment;
  mode: string;
  build: string;
}

export interface Location {
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
}

export interface MetaEnvironment {
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
  DW_SERVER_URL?: string;
  DW_SERVER_AUTHCODE?: string;
}

export interface ReportStatistics extends Record<string, number> {
  opened: number;
  closed: number;
  resolved: number;
  total: number;
  apis: number;
}

export interface ReportOptions {
  title: string;
  body?: string;
}
