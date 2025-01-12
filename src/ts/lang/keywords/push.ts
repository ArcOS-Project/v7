import type { Keyword } from "$types/lang";

export const push: Keyword = async (lang) => {
  lang.expectTokenLength(2, "push");

  const [varName, value] = lang.tokens;

  const variable = lang.variables.get(varName);

  if (!variable || !variable.push) throw new Error(`Can only push to an array`);

  variable.push(value);

  lang.variables.set(varName, variable);
};
