import type { Library } from "$types/lang";
import { clear } from "./_base/clear";
import { echo } from "./_base/echo";
import { If } from "./_base/if";
import { input } from "./_base/input";
import { jump } from "./_base/jump";
import { MsgBox } from "./_base/msgbox";
import { sleep } from "./_base/sleep";

export const BaseLibrary: Library = {
  clear,
  echo,
  If,
  input,
  jump,
  MsgBox,
  sleep,
};
