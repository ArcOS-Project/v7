import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IServerConnector } from "../IServerManager";

export interface ITpaConnector extends IServerConnector {
  CreateUrl(contents: string, userId: string, appId: string, filename: string): Promise<ICommandResult>;
  ScriptUrl(userId: string, appId: string, filename: string): string;
}
