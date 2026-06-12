import { GostartCommand } from "../commands/gostart";
import { GosubCommand } from "../commands/gosub";
import { IfCommand } from "../commands/if";
import { KillCommand } from "../commands/kill";
import { PrintCommand } from "../commands/print";
import { SoundbusCommand } from "../commands/soundbus";
import { StopCommand } from "../commands/stop";
import { SubCommand } from "../commands/sub";
import { VarCommand } from "../commands/var";
import { WhileCommand } from "../commands/while";
import type { BasicCommand } from "../engine/command";

export const BasicCommandSet: (typeof BasicCommand)[] = [
  PrintCommand,
  IfCommand,
  VarCommand,
  GosubCommand,
  SubCommand,
  StopCommand,
  KillCommand,
  GostartCommand,
  WhileCommand,
  SoundbusCommand,
];
