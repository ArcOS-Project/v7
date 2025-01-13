import { Sleep } from "$ts/sleep";
import type { Keyword } from "$types/lang";

export const sleep: Keyword = async (lang) => {
  lang.expectTokenLength(1, "sleep");

  const delay = +lang.tokens[0];

  if (Number.isNaN(delay)) return;

  await Sleep(delay);
};
