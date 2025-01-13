import type { Library } from "$types/lang";
import { cat } from "./source/cat";
import { css } from "./source/css";
import { Import } from "./source/import";
import { _unsafe } from "./source/unsafe";

export const SourceLibrary: Library = {
  cat,
  css,
  Import,
  _unsafe,
};
