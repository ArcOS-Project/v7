import type { Keyword } from "$types/lang";

export const action: Keyword = async (lang) => {
  lang.expectTokenLength(2, "action");

  const [target, codepoint] = lang.tokens as [HTMLElement, string];

  target.addEventListener("click", (e) => {
    e.preventDefault();
    lang.jump(codepoint);
  });
};
