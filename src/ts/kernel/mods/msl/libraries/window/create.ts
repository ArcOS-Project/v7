import { ScriptedAppProcess } from "$ts/apps/scripted";
import { getKMod } from "$ts/env";
import type { ScriptedApp } from "$types/app";
import type { ProcessHandlerType } from "$types/kernel";
import type { Keyword } from "$types/msl";

export const create: Keyword = async (lang) => {
  if (!lang.expectTokenLength(2, "window.create")) return;

  const [metadata, bodyVar] = lang.tokens as [ScriptedApp, string];

  if (!metadata || typeof metadata !== "object") {
    lang.error("Need a JSON object as the metadata", "window.create");

    return;
  }

  const stack = getKMod<ProcessHandlerType>("stack");
  const result = await stack.spawn<ScriptedAppProcess>(
    ScriptedAppProcess,
    lang.userDaemon?.getCurrentDesktop(),
    lang.userDaemon?.userInfo?._id,
    lang.pid,
    {
      data: metadata,
      id: metadata.id,
      desktop: lang.userDaemon?.getCurrentDesktop()?.id,
    },
    lang
  );

  if (!result) {
    lang.error("Failed to spawn scripted app process!", "window.create");
    return;
  }

  return new Promise((r) =>
    result.bodyStore.subscribe((v) => {
      if (v) {
        lang.variables.set(bodyVar, v);
        r(result);
      }
    })
  );
};
