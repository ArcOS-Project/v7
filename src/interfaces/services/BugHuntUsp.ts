import type { IBugHunt } from "$interfaces/modules/bughunt";
import type { IBaseService } from "$interfaces/service";
import type { BugReport, ReportOptions } from "$types/bughunt";

export interface IBugHuntUserSpaceProcess extends IBaseService {
  INVALIDATION_THRESHOLD: number;
  privateCache: BugReport[];
  publicCache: BugReport[];
  cachedPrivateResponseCount: number;
  cachedPublicResponseCount: number;
  module: IBugHunt;
  afterActivate(): Promise<void>;
  sendBugReport(options: ReportOptions): Promise<boolean>;
  getPrivateReports(forceInvalidate?: boolean): Promise<BugReport[]>;
  getPublicReports(forceInvalidate?: boolean): Promise<BugReport[]>;
  refreshPrivateCache(): Promise<void>;
  refreshPublicCache(): Promise<void>;
  refreshAllCaches(): Promise<void>;
}