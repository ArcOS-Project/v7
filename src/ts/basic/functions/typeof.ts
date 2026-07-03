import { tryJsonParse } from "$ts/util/json";
import type { BasicLang } from "$types/system/basic";

export const TypeofFn = (() => (val) => {
  return typeof tryJsonParse(val);
}) satisfies BasicLang.TerminalBuiltinFn;
