import type { Keyword } from "$types/lang";

export const If: Keyword = async (lang) => {
  lang.expectTokenLength(4, "if");

  const [left, operator, right, target] = lang.tokens;
  const result = lang.calculate(left, operator, right);

  if (!!result && target[0] == ":") {
    lang.jump(target);
  }
};
