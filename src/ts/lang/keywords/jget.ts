import { getJsonHierarchy } from "$ts/hierarchy";
import type { Keyword } from "$types/lang";

export const jget: Keyword = async (lang) => {
  lang.expectTokenLength(2, "jget");

  const [object, path] = lang.tokens;

  if (typeof object !== "object") return undefined;

  return getJsonHierarchy(object, path);
};
