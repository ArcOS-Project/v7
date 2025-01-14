import type { Keyword } from "$types/lang";

export const If: Keyword = async (lang) => {
  if (!lang.expectTokenLength(4, "if")) return;

  const [left, operator, right, target] = lang.tokens;
  const result = lang.calculate(left, operator, right);

  if (!!result && target[0] == ":") {
    lang.jump(target);
  }
};
