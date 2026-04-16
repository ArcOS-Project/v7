import { CommandResult } from "$ts/result";
import type { IServerConnector } from "../IServerManager";

export interface ITpaConnector extends IServerConnector {
  CreateUrl(contents: string, userId: string, appId: string, filename: string): Promise<CommandResult>;
  ScriptUrl(userId: string, appId: string, filename: string): string;
}
