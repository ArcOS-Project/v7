import { setJsonHierarchy } from "$ts/hierarchy";
import type { Keyword } from "$types/lang";

export const jset: Keyword = async (lang) => {
  lang.expectTokenLength(3, "jset");

  const [object, path, value] = lang.tokens;

  setJsonHierarchy(object, path, value);

  return object;
};
