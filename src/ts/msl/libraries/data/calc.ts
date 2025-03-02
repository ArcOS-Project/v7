import type { Keyword } from "$types/msl";

export const calc: Keyword = async (lang) => {
  if (!lang.expectTokenLength(3, "calc")) return;

  const [left, operator, right] = lang.tokens as any[];

  return lang.calculate(left, operator, right);
};
