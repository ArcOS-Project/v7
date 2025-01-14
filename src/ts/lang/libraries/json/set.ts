import { setJsonHierarchy } from "$ts/hierarchy";
import type { Keyword } from "$types/lang";

export const set: Keyword = async (lang) => {
  if (!lang.expectTokenLength(3, "set")) return;

  const [object, path, value] = lang.tokens;

  setJsonHierarchy(object, path, value);

  return object;
};
