import type { Keywords, LanguageOptions } from "$types/lang";
import { abtostr } from "./keywords/abtostr";
import { action } from "./keywords/action";
import { apel } from "./keywords/apel";
import { Btoa } from "./keywords/btoa";
import { calc } from "./keywords/calc";
import { cat } from "./keywords/cat";
import { chr } from "./keywords/chr";
import { clear } from "./keywords/clear";
import { crel } from "./keywords/crel";
import { dataurl } from "./keywords/dataurl";
import { echo } from "./keywords/echo";
import { If } from "./keywords/if";
import { Import } from "./keywords/import";
import { input } from "./keywords/input";
import { jget } from "./keywords/jget";
import { jset } from "./keywords/jset";
import { json } from "./keywords/json";
import { jump } from "./keywords/jump";
import { length } from "./keywords/length";
import { MsgBox } from "./keywords/msgbox";
import { push } from "./keywords/push";
import { sleep } from "./keywords/sleep";
import { _unsafe } from "./keywords/unsafe";
import { Window } from "./keywords/window";

export const BaseLanguageKeywords: Keywords = {
  calc,
  chr,
  clear,
  echo,
  If,
  input,
  jget,
  jset,
  jump,
  length,
  sleep,
  Btoa,
  dataurl,
  json,
  MsgBox,
  Window,
  cat,
  abtostr,
  push,
  crel,
  apel,
  action,
  Import,
  _unsafe,
};

export const DefaultLanguageOptions: LanguageOptions = {
  stdin: async () => "",
  stdout: (m: string) => console.log(m),
  continuous: false,
};
