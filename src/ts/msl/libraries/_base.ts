import type { Library } from "$types/msl";
import { clear } from "./_base/clear";
import { echo } from "./_base/echo";
import { exit } from "./_base/exit";
import { idle } from "./_base/idle";
import { If } from "./_base/if";
import { input } from "./_base/input";
import { jump } from "./_base/jump";
import { mount } from "./_base/mount";
import { MsgBox } from "./_base/msgbox";
import { Return } from "./_base/return";
import { sleep } from "./_base/sleep";
import { umount } from "./_base/umount";
import { exec } from "./exec";
import { keyword } from "./keyword";

export const BaseLibrary: Library = {
  clear,
  echo,
  If,
  input,
  jump,
  MsgBox,
  sleep,
  keyword,
  idle,
  Return,
  exit,
  mount,
  umount,
  exec,
};
