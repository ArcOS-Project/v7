import type { Keyword } from "$types/lang";

export const calc: Keyword = async (lang) => {
  lang.expectTokenLength(3, "calc");

  const [left, operator, right] = lang.tokens as any[];

  return lang.calculate(left, operator, right);
};
