import type { Library } from "$types/msl";
import { action } from "./window/action";
import { create } from "./window/create";
import { append as elementAppend } from "./window/element/append";
import { button } from "./window/element/button";
import { create as elementCreate } from "./window/element/create";
import { div } from "./window/element/div";
import { h1 } from "./window/element/h1";

export const GuiLibrary: Library = {
  create,
  action,
  el: {
    append: elementAppend,
    create: elementCreate,
    button,
    div,
    h1,
  },
};
