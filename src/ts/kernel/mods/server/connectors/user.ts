import { CommandResult } from "$ts/result";
import type { UserInfo } from "$types/user";
import { ServerConnector } from ".";
import { ApiCallBuilder } from "../builder";

export class UserConnector extends ServerConnector("/user") {
  static async Self(token: string): Promise<CommandResult<UserInfo>> {
    return await ApiCallBuilder.Get(token).UseInstance(this.server).Produces<UserInfo>().Execute(`/self`);
  }
}
  