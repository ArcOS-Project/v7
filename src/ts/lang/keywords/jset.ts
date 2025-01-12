import { setJsonHierarchy } from "$ts/hierarchy";
import type { Keyword } from "$types/lang";

export const jset: Keyword = async (lang) => {
  lang.expectTokenLength(3, "jset");

  const [variable, path, value] = lang.tokens;

  const object = lang.variables.get(variable);

  setJsonHierarchy(object, path, value);

  lang.variables.set(variable, object);
};
