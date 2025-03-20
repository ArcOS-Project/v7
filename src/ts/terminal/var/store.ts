import { ArcOSVersion } from "$ts/env";
import type { VariableStore } from "$types/terminal";
import type { ArcTerminal } from "..";

export function getArcTermStore(term: ArcTerminal): VariableStore {
  return {
    username: {
      get: () => term.env.get("username"),
      readOnly: true,
      canDelete: false,
    },
    version: {
      get: () => ArcOSVersion,
      readOnly: true,
      canDelete: false,
    },
    pwd: {
      get: () => term.path || "U:/",
      set: async (v) => {
        const dir = await term.changeDirectory(v);

        if (!dir) return term.Error(`pwd: Directory doesn't exist, falling back.`);

        term.path = v;
      },
      canDelete: false,
      readOnly: false,
    },
    pid: {
      get: () => `${term.pid}`,
      readOnly: true,
      canDelete: false,
    },
    rand: {
      get: () => `${Math.floor(Math.random() * 1e6)}`,
      readOnly: true,
      canDelete: false,
    },
  };
}
