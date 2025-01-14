import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const Import: Keyword = async (lang) => {
  lang.expectTokenLength(1, "import");

  const [path] = lang.tokens;
  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error(`File not found: ${path}`);
    return;
  }

  const str = arrayToText(contents);

  try {
    const dataUrl = `data:application/javascript;base64,${btoa(str)}`;
    const { default: fn } = await import(dataUrl);

    return fn;
  } catch {
    lang.error(`Javascript import failed: ${path}`, "import");
  }
};
