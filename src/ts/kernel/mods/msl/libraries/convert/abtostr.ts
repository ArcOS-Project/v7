import type { Keyword } from "$types/msl";

export const abtostr: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "abtostr")) return;

  const [data] = lang.tokens;

  return new TextDecoder().decode(new Uint8Array(data as any)).toString();
};
