import type { CommandResult } from "$ts/result";
import type { DeleteResult, UpdateWriteOpResult } from "$types/mongo";
import type { TotpSetupResponse } from "$types/user";
import type { IServerConnector } from "../IServerManager";

export interface ITotpConnector extends IServerConnector {
  Activate(code: string): Promise<CommandResult>;
  Auth(code: string): Promise<CommandResult>;
  Delete(): Promise<CommandResult<DeleteResult>>;
  Setup(): Promise<CommandResult<TotpSetupResponse>>;
  Unlock(code: string): Promise<CommandResult<UpdateWriteOpResult>>;
}
