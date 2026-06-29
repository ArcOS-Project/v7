import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { ArcOSVersion } from "$ts/env";
import { BRRED, RESET } from "$ts/terminal/colors";
import { unescapeEscapeChars } from "$ts/util";
import { arrayBufferToText } from "$ts/util/convert";
import type { BasicLang } from "$types/system/basic";
import { BasicCommandSet } from "./commandset";
import { BasicTerminalFunctions } from "./functions/terminal";
import { BasicBuiltinVariables } from "./variables";

export function ArcTermBasicConfig(term: IArcTerminal): BasicLang.Config {
  return {
    version: ArcOSVersion,
    stdin: async () => {
      // TODO: FIND SOMETHING BETTER
      return new Promise((resolve) => {
        let val = "";
        const disposer = term.term.onKey((e) => {
          term.term.write(e.key);

          if (e.key == "\r") {
            resolve(val);
            disposer.dispose();
            term.term.write("\n");
            return;
          }

          val += e.key;
        });
      });
    },
    stdout: (msg: string) => {
      term.rl?.write(unescapeEscapeChars(msg));
    },
    stderr: (msg: string) => {
      term.rl?.write(`${BRRED}${msg}${RESET}`);
    },
    functions: BasicTerminalFunctions(term),
    slowdown: 10,
    commands: BasicCommandSet,
    builtinVariables: BasicBuiltinVariables,
    readScriptFile: async (path) => {
      const content = await term.readFile(path);
      return content ? arrayBufferToText(content) : undefined;
    },
  } satisfies BasicLang.Config;
}
