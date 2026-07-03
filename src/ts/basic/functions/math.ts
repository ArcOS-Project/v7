import type { BasicLang } from "$types/system/basic";
import { evaluate } from "mathjs";

export const MathFn = (() => async (val, interpreter) => {
  return `${evaluate(await interpreter.replaceVariables(val))}`;
}) satisfies BasicLang.TerminalBuiltinFn;
