import type { StackFrame } from "stacktrace-parser";

export interface ParsedStackUrl {
  userId?: string;
  timestamp?: string;
  appId?: string;
  filename?: string;
}

export type ParsedStackFrame = StackFrame & {
  parsed?: ParsedStackUrl;
};
