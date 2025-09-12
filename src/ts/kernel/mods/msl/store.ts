import { __Console__ } from "$ts/console";
import type { LanguageOptions, Libraries } from "$types/msl";
import { BaseLibrary } from "./libraries/_base";
import { Base64Library } from "./libraries/base64";
import { ConvertLibrary } from "./libraries/convert";
import { DataLibrary } from "./libraries/data";
import { EnvLibrary } from "./libraries/env";
import { GuiLibrary } from "./libraries/gui";
import { JsonLibrary } from "./libraries/json";
import { SourceLibrary } from "./libraries/source";

export const BaseLibraries: Libraries = {
  json: JsonLibrary,
  gui: GuiLibrary,
  source: SourceLibrary,
  base64: Base64Library,
  convert: ConvertLibrary,
  data: DataLibrary,
  user: {},
  env: EnvLibrary,
  "*": BaseLibrary,
};

export const DefaultLanguageOptions: LanguageOptions = {
  stdin: async () => "",
  stdout: (m: string) => __Console__.log(m),
  onTick: (_) => {},
  continuous: false,
  tickDelay: 0,
  workingDir: ".",
  allowUnsafe: false,
  arguments: [],
};
