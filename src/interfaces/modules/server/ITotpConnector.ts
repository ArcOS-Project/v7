import type { ICommandResult } from "$interfaces/ICommandResult";
import type { DeleteResult, UpdateWriteOpResult } from "$types/mongo";
import type { TotpSetupResponse } from "$types/user";
import type { IServerConnector } from "../IServerManager";

export interface ITotpConnector extends IServerConnector {
  Activate(code: string): Promise<ICommandResult>;
  Auth(code: string): Promise<ICommandResult>;
  Delete(): Promise<ICommandResult<DeleteResult>>;
  Setup(): Promise<ICommandResult<TotpSetupResponse>>;
  Unlock(code: string): Promise<ICommandResult<UpdateWriteOpResult>>;
}
