import type { ProcessState } from "./process";

// !tpa
export type DispatchCallback = (...args: any[]) => any;
export type SystemDispatchResult = "success" | "err_systemOnly" | "err_unknownCaller";

export interface GlobalDispatchClient {
  socketId: string;
  userId: string;
  authorized: boolean;
  ip?: string;
}

export interface SummarizedProcessInformation {
  pid: number;
  parentPid?: number;
  name: string;
  className: string;
  classType: string;
  sourceUrl: string;
  state: ProcessState;
  appId?: string;
}

export interface DispatchClientListItem {
  id: string;
  isAdministrativeLogin: boolean;
  userId: string;
  processes: SummarizedProcessInformation[];
}

export type GlobalDispatchProcessSummary = Record<string, Record<string, DispatchClientListItem>>;

export type GlobalDispatchState = "connected" | "connecting" | "disconnected";

// !endtpa
