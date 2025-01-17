import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const css: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "source.css")) return;

  const [path, target] = lang.tokens as [string, HTMLDivElement];

  if (!target || !(target instanceof HTMLDivElement)) {
    lang.error("Invalid target", "source.css");
    return;
  }

  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error("File not found", "source.css");
    return;
  }

  const str = arrayToText(contents);
  const style = document.createElement("style");

  style.append(document.createTextNode(str));

  target.append(style);
};
