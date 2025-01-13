import type { Library } from "$types/lang";
import { action } from "./window/action";
import { create } from "./window/create";
import { append as elementAppend } from "./window/element/append";
import { create as elementCreate } from "./window/element/create";

export const WindowLibrary: Library = {
  create,
  action,
  element: {
    append: elementAppend,
    create: elementCreate,
  },
};
