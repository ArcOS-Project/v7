import type { LanguageExecutionError } from "$ts/lang/error";
import type { LanguageInstance } from "$ts/lang/instance";

export type StdIn = (p?: string) => Promise<string>;
export type StdOut = (m: string) => void;
export type Keyword = (lang: LanguageInstance) => Promise<any>;

export type Library = Record<string, Keyword | Record<string, Keyword>>;
export type Libraries = Record<string, Library>;
export interface LanguageOptions {
  stdin?: () => Promise<string>;
  stdout?: (m: string) => void;
  onTick?: (l: LanguageInstance) => void;
  onError?: (error: LanguageExecutionError) => void;
  allowUnsafe?: boolean;
  continuous?: boolean;
  tickDelay?: number;
  workingDir?: string;
}

export interface InterpreterCommand {
  line: number;
  column: number;
  command: string;
}
