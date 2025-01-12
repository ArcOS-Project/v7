import type { Keywords } from "$types/lang";
import { abtostr } from "./keywords/abtostr";
import { Btoa } from "./keywords/btoa";
import { calc } from "./keywords/calc";
import { cat } from "./keywords/cat";
import { chr } from "./keywords/chr";
import { clear } from "./keywords/clear";
import { dataurl } from "./keywords/dataurl";
import { echo } from "./keywords/echo";
import { If } from "./keywords/if";
import { input } from "./keywords/input";
import { jget } from "./keywords/jget";
import { jset } from "./keywords/jset";
import { json } from "./keywords/json";
import { jump } from "./keywords/jump";
import { length } from "./keywords/length";
import { MsgBox } from "./keywords/msgbox";
import { sleep } from "./keywords/sleep";
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
};
