import type { Filesystem } from "$ts/fs";
import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const css: Keyword = async (lang) => {
  lang.expectTokenLength(2, "source.css");

  const [path, target] = lang.tokens as [string, HTMLDivElement];

  if (!target) throw lang.error("Invalid target", "source.css");

  const fs = lang.kernel.getModule<Filesystem>("fs");

  const contents = await fs.readFile(path);

  if (!contents) throw lang.error("File not found", "source.css");

  const str = arrayToText(contents);
  const style = document.createElement("style");

  style.append(document.createTextNode(str));

  target.append(style);
};
