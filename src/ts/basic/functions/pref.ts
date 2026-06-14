import { Daemon } from "$ts/env";
import type { BasicLang } from "$types/system/basic";

export const PrefFn = (() => () => {
  return Daemon.preferences();
}) satisfies BasicLang.TerminalBuiltinFn;
