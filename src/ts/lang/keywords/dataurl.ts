import type { Keyword } from "$types/lang";

export const dataurl: Keyword = async (lang) => {
  lang.expectTokenLength(2, "dataurl");

  const [data, mimetype] = lang.tokens;

  return `data:${mimetype};base64,${data}`;
};
