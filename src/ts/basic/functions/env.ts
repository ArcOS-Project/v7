import { Env } from "$ts/env";
import type { BasicLang } from "$types/system/basic";

export const EnvFn = (() => (val) => {
  return Env.get(val) ?? "";
}) satisfies BasicLang.TerminalBuiltinFn;
