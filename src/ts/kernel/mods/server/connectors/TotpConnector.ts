import type { ITotpConnector } from "$interfaces/modules/server/ITotpConnector";
import { CommandResult } from "$ts/result";
import { toForm } from "$ts/util/form";
import type { DeleteResult, UpdateResult } from "$types/mongo";
import type { TotpSetupResponse } from "$types/user";
import { ServerConnector } from ".";

export class TotpConnector extends ServerConnector implements ITotpConnector {
  override prefix = "/totp";

  async Activate(code: string): Promise<CommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post("/activate", toForm({ code })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Auth(code: string): Promise<CommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post("/auth", toForm({ code })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
  async Delete(): Promise<CommandResult<DeleteResult>> {
    try {
      return CommandResult.FromResponse(await this.server.delete("/"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Setup(): Promise<CommandResult<TotpSetupResponse>> {
    try {
      return CommandResult.FromResponse(await this.server.post("/setup"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Unlock(code: string): Promise<CommandResult<UpdateResult>> {
    try {
      return CommandResult.FromResponse(await this.server.post("/unlock", toForm({ code })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
