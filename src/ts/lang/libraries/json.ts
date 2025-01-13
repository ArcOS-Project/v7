import { get } from "./json/get";
import { set } from "./json/set";
import { parse } from "./json/parse";
import { load } from "./json/load";
import type { Library } from "$types/lang";

export const JsonLibrary: Library = {
  get,
  set,
  parse,
  load,
};
