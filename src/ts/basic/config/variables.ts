import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { BasicLang } from "$types/system/basic";

export const BasicBuiltinVariables: Record<string, BasicLang.VariableCallback> = {
  mode: () => ArcMode(),
  build: () => ArcBuild(),
};
