import type { Keywords } from "$types/lang";
import { calc } from "./keywords/calc";
import { chr } from "./keywords/chr";
import { clear } from "./keywords/clear";
import { echo } from "./keywords/echo";
import { If } from "./keywords/if";
import { input } from "./keywords/input";
import { jget } from "./keywords/jget";
import { jset } from "./keywords/jset";
import { jump } from "./keywords/jump";
import { length } from "./keywords/length";
import { sleep } from "./keywords/sleep";

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
};
