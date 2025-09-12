import { arrayToText } from "$ts/kernel/mods/fs/convert";
import { detectJavaScript } from "$ts/util";
import type { Keyword } from "$types/msl";

export const html: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "source.html")) return;

  const [path, target] = lang.tokens as [string, HTMLDivElement];

  if (!target || !(target instanceof HTMLDivElement)) {
    lang.error("Invalid target", "source.html");
    return;
  }

  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error("File not found", "source.html");
    return;
  }

  const str = arrayToText(contents);

  if (detectJavaScript(str)) {
    lang.error("Javascript code in source.html is not allowed.", "source.html");
    return;
  }

  target.innerHTML = str;
};
