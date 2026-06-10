import type { IArcTerminal } from "$interfaces/IArcTerminal";
import { ArcOSVersion, Env } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import { unescapeEscapeChars } from "$ts/util";
import { arrayBufferToText } from "$ts/util/convert";
import type { BasicLang } from "$types/system/basic";
import { evaluate } from "mathjs";
import { GostartCommand } from "../commands/gostart";
import { GosubCommand } from "../commands/gosub";
import { IfCommand } from "../commands/if";
import { KillCommand } from "../commands/kill";
import { PrintCommand } from "../commands/print";
import { StopCommand } from "../commands/stop";
import { SubCommand } from "../commands/sub";
import { VarCommand } from "../commands/var";

export function ArcTermBasicConfig(term: IArcTerminal): BasicLang.Config {
  return {
    version: ArcOSVersion,
    stdin: async () => {
      return new Promise((resolve) => {
        let val = "";
        const disposer = term.term.onKey((e) => {
          term.term.write(e.key);
          val += e.key;

          if (e.key == "\r") {
            resolve(val);
            console.log(val);
            disposer.dispose();
            term.term.write("\n");
            return;
          }
        });
      });
    },
    stdout: (msg: string) => {
      term.rl?.write(unescapeEscapeChars(msg));
    },
    functions: {
      env: (val) => {
        return Env.get(val) ?? "";
      },
      input: async (val, interpreter) => {
        interpreter.output(`\n${val}`);
        return (await interpreter.input()) || `""`;
      },
      math: (val) => {
        return `${evaluate(val)}`;
      },
      fsread: async (path, interpreter) => {
        const content = await term.readFile(path);
        if (!content) {
          interpreter.error("FILE NOT FOUND", true);
          return "";
        }

        return arrayBufferToText(content) ?? "";
      },
    },
    commands: [PrintCommand, IfCommand, VarCommand, GosubCommand, SubCommand, StopCommand, KillCommand, GostartCommand],
    builtinVariables: {
      mode: () => ArcMode(),
      build: () => ArcBuild(),
    },
    readScriptFile: async (path) => {
      const content = await term.readFile(path);
      return content ? arrayBufferToText(content) : undefined;
    },
  } satisfies BasicLang.Config;
}
