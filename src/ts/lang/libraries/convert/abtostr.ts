import type { Keyword } from "$types/lang";

export const abtostr: Keyword = async (lang) => {
  lang.expectTokenLength(1, "abtostr");

  const [data] = lang.tokens;

  return new TextDecoder().decode(new Uint8Array(data as any)).toString();
};
