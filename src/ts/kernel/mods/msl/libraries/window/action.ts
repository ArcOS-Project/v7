import type { Keyword } from "$types/msl";

export const action: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "action")) return;

  const [target, codepoint] = lang.tokens as [HTMLElement, string];

  target.addEventListener("click", (e) => {
    e.preventDefault();
    lang.jump(codepoint);
  });
};
