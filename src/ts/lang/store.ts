import type { LanguageOptions, Libraries } from "$types/lang";
import { BaseLibrary } from "./libraries/_base";
import { Base64Library } from "./libraries/base64";
import { ConvertLibrary } from "./libraries/convert";
import { DataLibrary } from "./libraries/data";
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
  "*": BaseLibrary,
};

export const DefaultLanguageOptions: LanguageOptions = {
  stdin: async () => "",
  stdout: (m: string) => console.log(m),
  onTick: (_) => {},
  continuous: false,
  tickDelay: 1,
  workingDir: ".",
  allowUnsafe: false,
};
