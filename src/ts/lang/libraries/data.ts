import type { Library } from "$types/lang";
import { calc } from "./data/calc";
import { chr } from "./data/chr";
import { length } from "./data/length";
import { push } from "./data/push";

export const DataLibrary: Library = {
  length,
  chr,
  calc,
  push,
};
