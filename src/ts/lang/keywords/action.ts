import type { Keyword } from "$types/lang";

export const action: Keyword = async (lang) => {
  lang.expectTokenLength(2, "action");

  const [target, codepoint] = lang.tokens as [HTMLElement, string];

  if (codepoint[0] !== ":") throw new Error(`Invalid codepoint "${codepoint}"`);

  target.addEventListener("click", (e) => {
    e.preventDefault();
    lang.pointer = lang.source.indexOf(codepoint);
  });
};
