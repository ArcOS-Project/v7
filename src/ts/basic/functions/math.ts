import type { BasicLang } from "$types/system/basic";
import { evaluate } from "mathjs";

export const MathFn = (() => (val) => {
  return `${evaluate(val)}`;
}) satisfies BasicLang.TerminalBuiltinFn;
