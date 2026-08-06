import type { ITerminalProcessConstructor } from "$interfaces/IArcTerminal";
import { AdminCommand } from "./commands/admin";
import { AppListCommand } from "./commands/applist";
import { ArcFetchCommand } from "./commands/arcfetch";
import { AtConfCommand } from "./commands/atconf";
import { Base64Command } from "./commands/base64";
import { BasicCommand } from "./commands/basic";
import { CdCommand } from "./commands/cd";
import { ClearCommand } from "./commands/clear";
import { ConfigCommand } from "./commands/config";
import { CrTpaCommand } from "./commands/crtpa";
import { DevenvCommand } from "./commands/devenv";
import { DirCommand } from "./commands/dir";
import { DispatchCommand } from "./commands/dispatch";
import { DrivesCommand } from "./commands/drives";
import { EchoCommand } from "./commands/echo";
import { ExitCommand } from "./commands/exit";
import { ExploreCommand } from "./commands/explore";
import { FindCommand } from "./commands/find";
import { GudCommand } from "./commands/gud";
import { HistoryCommand } from "./commands/history";
import { InputCommand } from "./commands/input";
import { KillCommand } from "./commands/kill";
import { KlogCommand } from "./commands/klog";
import { LoadCommand } from "./commands/load";
import { LogoutCommand } from "./commands/logout";
import { MigrationsCommand } from "./commands/migrations";
import { MkdirCommand } from "./commands/mkdir";
import { OpenCommand } from "./commands/open";
import { PkgCommand } from "./commands/pkg";
import { QuotaCommand } from "./commands/quota";
import { ReloadCommand } from "./commands/reload";
import { RestartCommand } from "./commands/restart";
import { RmCommand } from "./commands/rm";
import { ServiceCommand } from "./commands/service";
import { ShutdownCommand } from "./commands/shutdown";
import { SoundbusCommand } from "./commands/soundbus";
import { SpawnCommand } from "./commands/spawn";
import { SudCommand } from "./commands/sud";
import { TasksCommand } from "./commands/tasks";
import { TestCommand } from "./commands/test";
import { TostrCommand } from "./commands/tostr";
import { TreeCommand } from "./commands/tree";
import { UuidCommand } from "./commands/uuid";
import { VerCommand } from "./commands/ver";

export const TerminalCommandStore: ITerminalProcessConstructor[] = [
  AppListCommand,
  Base64Command,
  DirCommand,
  CdCommand,
  ClearCommand,
  OpenCommand,
  ArcFetchCommand,
  MkdirCommand,
  VerCommand,
  RmCommand,
  ExitCommand,
  DispatchCommand,
  EchoCommand,
  ExploreCommand,
  TestCommand,
  FindCommand,
  LogoutCommand,
  ShutdownCommand,
  RestartCommand,
  QuotaCommand,
  CrTpaCommand,
  TreeCommand,
  KillCommand,
  ReloadCommand,
  HistoryCommand,
  AtConfCommand,
  ConfigCommand,
  SpawnCommand,
  TasksCommand,
  AdminCommand,
  DrivesCommand,
  DevenvCommand,
  PkgCommand,
  KlogCommand,
  InputCommand,
  SoundbusCommand,
  UuidCommand,
  TostrCommand,
  ServiceCommand,
  MigrationsCommand,
  LoadCommand,
  BasicCommand,
  GudCommand,
  SudCommand,
];
