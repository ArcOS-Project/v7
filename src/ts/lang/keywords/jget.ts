import { getJsonHierarchy } from "$ts/hierarchy";
import type { Keyword } from "$types/lang";

export const jget: Keyword = async (lang) => {
  lang.expectTokenLength(2, "jget");

  const [variable, path] = lang.tokens;

  if (!lang.variables.has(variable)) return undefined;
  if (typeof lang.variables.get(variable) !== "object") return undefined;

  return getJsonHierarchy(lang.variables.get(variable), path);
};
