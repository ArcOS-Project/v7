import { join } from "$ts/util/fs";
import type { Keyword } from "$types/msl";

export const Img: Keyword = async (lang) => {
  if (!lang.expectTokenLength(1, "source.img")) return;

  const [path] = lang.tokens;
  const resolved = join(lang.workingDir, path);
  const url = await lang.fs.direct(resolved);

  if (!url) {
    lang.error(`File not found: ${path}`);

    return;
  }

  return url;
};
