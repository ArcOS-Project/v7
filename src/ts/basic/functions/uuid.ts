import { UUID } from "$ts/util/uuid";
import type { BasicLang } from "$types/system/basic";

export const UuidFn = (() => () => UUID()) satisfies BasicLang.TerminalBuiltinFn;
