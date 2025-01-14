import type { Keyword } from "$types/lang";

export const push: Keyword = async (lang) => {
  lang.expectTokenLength(2, "push");

  const [varName, value] = lang.tokens;

  const variable = lang.variables.get(varName);

  if (!variable || !variable.push) {
    lang.error(`Can only push to an array`, "push");

    return;
  }

  variable.push(value);

  lang.variables.set(varName, variable);
};
