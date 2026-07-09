import type { BasicLang } from "$types/system/basic";

export const InputFn = (() => async (val, interpreter) => {
  interpreter.sendToStdout(`\n${val}`);

  return await interpreter.getFromStdin();
}) satisfies BasicLang.TerminalBuiltinFn;
