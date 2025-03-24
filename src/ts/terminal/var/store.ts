import { ArcOSVersion } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { ArcMode } from "$ts/metadata/mode";
import type { VariableStore } from "$types/terminal";
import type { ArcTerminal } from "..";
import {
  BLACK,
  BLUE,
  BRBLACK,
  BRBLUE,
  BRCYAN,
  BRGREEN,
  BRPURPLE,
  BRRED,
  BRWHITE,
  BRYELLOW,
  CYAN,
  ESC,
  GREEN,
  PURPLE,
  RED,
  RESET,
  WHITE,
  YELLOW,
} from "../store";

export function getArcTermStore(term: ArcTerminal): VariableStore {
  return {
    username: {
      get: () => term.env.get("currentuser") || "stranger",
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
    build: {
      get: ArcBuild,
      readOnly: true,
      canDelete: false,
    },
    mode: {
      get: ArcMode,
      readOnly: true,
      canDelete: false,
    },
    ESC: {
      get: () => ESC,
      canDelete: false,
      readOnly: true,
    },
    BLACK: {
      get: () => BLACK,
      canDelete: false,
      readOnly: true,
    },
    RED: {
      get: () => RED,
      canDelete: false,
      readOnly: true,
    },
    GREEN: {
      get: () => GREEN,
      canDelete: false,
      readOnly: true,
    },
    YELLOW: {
      get: () => YELLOW,
      canDelete: false,
      readOnly: true,
    },
    BLUE: {
      get: () => BLUE,
      canDelete: false,
      readOnly: true,
    },
    PURPLE: {
      get: () => PURPLE,
      canDelete: false,
      readOnly: true,
    },
    CYAN: {
      get: () => CYAN,
      canDelete: false,
      readOnly: true,
    },
    WHITE: {
      get: () => WHITE,
      canDelete: false,
      readOnly: true,
    },
    BRBLACK: {
      get: () => BRBLACK,
      canDelete: false,
      readOnly: true,
    },
    BRRED: {
      get: () => BRRED,
      canDelete: false,
      readOnly: true,
    },
    BRGREEN: {
      get: () => BRGREEN,
      canDelete: false,
      readOnly: true,
    },
    BRYELLOW: {
      get: () => BRYELLOW,
      canDelete: false,
      readOnly: true,
    },
    BRBLUE: {
      get: () => BRBLUE,
      canDelete: false,
      readOnly: true,
    },
    BRPURPLE: {
      get: () => BRPURPLE,
      canDelete: false,
      readOnly: true,
    },
    BRCYAN: {
      get: () => BRCYAN,
      canDelete: false,
      readOnly: true,
    },
    BRWHITE: {
      get: () => BRWHITE,
      canDelete: false,
      readOnly: true,
    },
    RESET: {
      get: () => RESET,
      canDelete: false,
      readOnly: true,
    },
    RESULTCOLOR: {
      get: () => (term.lastCommandErrored ? BRRED : RESET),
      readOnly: true,
      canDelete: false,
    },
  };
}
