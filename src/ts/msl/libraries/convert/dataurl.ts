import type { Keyword } from "$types/msl";

export const dataurl: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "dataurl")) return;

  const [data, mimetype] = lang.tokens;

  return `data:${mimetype};base64,${data}`;
};
