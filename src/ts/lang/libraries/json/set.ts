import { setJsonHierarchy } from "$ts/hierarchy";
import type { Keyword } from "$types/lang";

export const set: Keyword = async (lang) => {
  lang.expectTokenLength(3, "set");

  const [object, path, value] = lang.tokens;

  setJsonHierarchy(object, path, value);

  return object;
};
