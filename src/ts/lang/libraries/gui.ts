import type { Library } from "$types/lang";
import { input } from "./_base/input";
import { action } from "./window/action";
import { create } from "./window/create";
import { append as elementAppend } from "./window/element/append";
import { button } from "./window/element/button";
import { create as elementCreate } from "./window/element/create";

export const GuiLibrary: Library = {
  create,
  action,
  el: {
    append: elementAppend,
    create: elementCreate,
    button,
    input,
  },
};
