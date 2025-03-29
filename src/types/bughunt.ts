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
  userData?: object;
  userAgent?: string;
  api?: string;
  frontend: string;
  meta: MetaEnvironment;
  _id?: string;
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
}

export interface ReportStatistics extends Record<string, number> {
  opened: number;
  closed: number;
  resolved: number;
  total: number;
  apis: number;
}
