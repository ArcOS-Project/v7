import type { ITotpConnector } from "$interfaces/modules/server/TotpConnector";
import type { CommandResult } from "$ts/result";
import { toForm } from "$ts/util/form";
import type { DeleteResult, UpdateResult } from "$types/mongo";
import type { TotpSetupResponse } from "$types/user";
import { ServerConnector } from ".";
import { ApiCallBuilder } from "../builder";

export class TotpConnector extends ServerConnector implements ITotpConnector {
  override prefix = "/totp";
  override name = "totp";

  async Activate(code: string): Promise<CommandResult> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithPostBody(toForm({ code }))
      .Execute("/activate");
  }

  async Auth(code: string): Promise<CommandResult> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithPostBody(toForm({ code }))
      .Execute("/auth");
  }
  async Delete(): Promise<CommandResult<DeleteResult>> {
    return await ApiCallBuilder.Delete().UseInstance(this.server).WithToken(this.token).Execute();
  }

  async Setup(): Promise<CommandResult<TotpSetupResponse>> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(this.token)
      .Produces<TotpSetupResponse>()
      .Execute("/setup");
  }

  async Unlock(code: string): Promise<CommandResult<UpdateResult>> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithPostBody(toForm({ code }))
      .Produces<UpdateResult>()
      .Execute("/unlock");
  }
}
