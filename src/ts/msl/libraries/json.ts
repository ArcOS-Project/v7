import type { Library } from "$types/msl";
import { get } from "./json/get";
import { load } from "./json/load";
import { parse } from "./json/parse";
import { set } from "./json/set";

export const JsonLibrary: Library = {
  get,
  set,
  parse,
  load,
};
