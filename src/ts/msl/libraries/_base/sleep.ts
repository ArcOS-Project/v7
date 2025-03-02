import { Sleep } from "$ts/sleep";
import type { Keyword } from "$types/msl";

export const sleep: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "sleep")) return;

  const delay = +lang.tokens[0];

  if (Number.isNaN(delay)) return;

  await Sleep(delay);
};
