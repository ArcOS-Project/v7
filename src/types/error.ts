import type { LiteralUnion } from "$interfaces/common";

// !tpa-prop
export interface ParsedStackUrl {
  userId?: string;
  timestamp?: string;
  appId?: string;
  filename?: string;
}

export type ParsedStackFrame = StackFrame & {
  parsed?: ParsedStackUrl;
};

export interface StackFrame {
  file: string | null;
  methodName: LiteralUnion<"<unknown>", string>;
  arguments: string[];
  lineNumber: number | null;
  column: number | null;
}

// !endtpa
