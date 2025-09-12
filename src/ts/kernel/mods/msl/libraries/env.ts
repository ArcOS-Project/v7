import type { Library } from "$types/msl";
import { get } from "./env/get";
import { set } from "./json/set";

export const EnvLibrary: Library = {
  get,
  set,
};
