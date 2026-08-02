import { arrayBufferToText } from "$ts/util/convert";
import type { BasicLang } from "$types/system/basic";

export const FsreadFn = ((term) => async (val, interpreter) => {
  const content = await term.readFile(val);
  if (!content) {
    interpreter.error("File not found", true);
    return "";
  }

  return arrayBufferToText(content) ?? "";
}) satisfies BasicLang.TerminalBuiltinFn;
