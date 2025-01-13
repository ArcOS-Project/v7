import type { LanguageInstance } from "$ts/lang/instance";

export type StdIn = (p?: string) => Promise<string>;
export type StdOut = (m: string) => void;
export type Keyword = (lang: LanguageInstance) => Promise<any>;
export type Keywords = Record<string, Keyword>;
export interface LanguageOptions {
  stdin?: () => Promise<string>;
  stdout?: (m: string) => void;
  continuous?: boolean;
}
