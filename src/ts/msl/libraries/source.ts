import type { Library } from "$types/msl";
import { cat } from "./source/cat";
import { css } from "./source/css";
import { html } from "./source/html";
import { Import } from "./source/import";
import { _unsafe } from "./source/unsafe";

export const SourceLibrary: Library = {
  cat,
  css,
  html,
  Import,
  _unsafe,
};
