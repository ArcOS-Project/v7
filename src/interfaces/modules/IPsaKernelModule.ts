import type { IKernelModule } from "./IKernelModule";

export interface IPsaKernelModule extends IKernelModule {
  Refresh(): Promise<void>;
  RawToParsed(item: RawPsaItem): ParsedPsaItem;
  GetPsaFor(area: string, location?: string): ParsedPsaItem | undefined;
  RawSeverityToSeverity(rawSeverity: string): PsaSeverity;
  ParseRawShowIn(showIn: string): PsaShowIn[];
}

export interface PsaResponse {
  items: RawPsaItem[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PsaShowIn {
  area: string;
  location: string;
}

export interface RawPsaItem {
  affectedService: string;
  created: string;
  createdBy: string;
  id: string;
  message: string;
  longMessage?: string;
  severity: "low" | "medium" | "high" | "critical";
  showIn: string;
  updated: string;
  validUntil: string;
}

export enum PsaSeverity {
  Low,
  Medium,
  High,
  Critical,
}

export interface ParsedPsaItem {
  affectedService: string;
  created: Date;
  createdBy: string;
  id: string;
  message: string;
  longMessage?: string;
  severity: PsaSeverity;
  severityStr: string;
  showIn: PsaShowIn[];
  updated: Date;
  validUntil: Date;
}
