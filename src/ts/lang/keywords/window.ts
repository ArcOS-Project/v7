import type { Keyword } from "$types/lang";

export const Window: Keyword = async (lang) => {
  lang.expectTokenLength(2, "window");

  const [variable, metadata] = lang.tokens;

  if (typeof metadata !== "object")
    throw new Error("Need a JSON object as the metadata");

  lang.variables.set(variable, metadata);
};
