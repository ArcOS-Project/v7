import { CommandResult } from "$ts/result";
import type { UserInfo } from "$types/user";
import { ServerConnector } from ".";

export class UserConnector extends ServerConnector("/user") {
  static async Self(token: string): Promise<CommandResult<UserInfo>> {
    try {
      return CommandResult.Ok((await this.server.get(`/self`, { headers: { Authorization: `Bearer ${token}` } })).data);
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
