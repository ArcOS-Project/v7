import { arrayToText } from "$ts/fs/convert";
import type { Keyword } from "$types/lang";

export const Import: Keyword = async (lang) => {
  if (!lang.options.allowUnsafe) {
    lang.error("Unsafe code execution is not enabled!", "source.import");
    return;
  }

  if (!lang.expectTokenLength(1, "import")) return;

  const [path] = lang.tokens;
  const contents = await lang.readFile(path);

  if (!contents) {
    lang.error(`File not found: ${path}`);
    return;
  }

  const str = arrayToText(contents);

  try {
    const dataUrl = `data:application/javascript;base64,${btoa(str)}`;
    const { default: fn } = await import(/* @vite-ignore */ dataUrl);

    return fn;
  } catch {
    lang.error(`Javascript import failed: ${path}`, "import");
  }
};
