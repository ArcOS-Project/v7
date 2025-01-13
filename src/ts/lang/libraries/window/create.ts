import { ScriptedAppProcess } from "$ts/apps/scripted";
import { ProcessHandler } from "$ts/process/handler";
import type { ScriptedApp } from "$types/app";
import type { Keyword } from "$types/lang";

export const create: Keyword = async (lang) => {
  lang.expectTokenLength(2, "window.create");

  const [metadata, bodyVar] = lang.tokens as [ScriptedApp, string];

  if (!metadata || typeof metadata !== "object")
    throw lang.error("Need a JSON object as the metadata", "window.create");

  const stack = lang.kernel.getModule<ProcessHandler>("stack");
  const result = await stack.spawn<ScriptedAppProcess>(
    ScriptedAppProcess,
    lang.pid,
    {
      data: metadata,
      id: metadata.id,
    }
  );

  if (!result)
    throw lang.error("Failed to spawn scripted app process!", "window.create");

  return new Promise((r) =>
    result.bodyStore.subscribe((v) => {
      if (v) {
        lang.variables.set(bodyVar, v);
        r(v);
      }
    })
  );
};
