import { ScriptedAppProcess } from "$ts/apps/scripted";
import { ProcessHandler } from "$ts/process/handler";
import type { ScriptedApp } from "$types/app";
import type { Keyword } from "$types/lang";

export const Window: Keyword = async (lang) => {
  lang.expectTokenLength(1, "window");

  const [metadata] = lang.tokens as [ScriptedApp];

  if (!metadata || typeof metadata !== "object")
    throw new Error("Need a JSON object as the metadata");

  const stack = lang.kernel.getModule<ProcessHandler>("stack");
  const result = await stack.spawn<ScriptedAppProcess>(
    ScriptedAppProcess,
    lang.pid,
    {
      data: metadata,
      id: metadata.id,
    }
  );

  if (!result) throw new Error("Failed to spawn scripted app process!");

  return new Promise((r) =>
    result.bodyStore.subscribe((v) => !!v && r(result))
  );
};
