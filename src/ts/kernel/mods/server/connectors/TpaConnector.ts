import type { ITpaConnector } from "$interfaces/modules/server/ITpaConnector";
import { Server } from "$ts/env";
import { CommandResult } from "$ts/result";
import { authcode } from "$ts/util";
import { textToBlob } from "$ts/util/convert";
import { ServerConnector } from ".";

export class TpaConnector extends ServerConnector implements ITpaConnector {
  public prefix: string = "/tpa";

  async CreateUrl(contents: string, userId: string, appId: string, filename: string): Promise<CommandResult<string>> {
    try {
      const result = CommandResult.FromResponse(
        await this.server.post(`/v2/${userId}/${appId}/${filename}`, textToBlob(contents))
      );
      if (!result.success) return result;

      return CommandResult.Ok(this.ScriptUrl(userId, appId, filename));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  ScriptUrl(userId: string, appId: string, filename: string) {
    const now = Date.now();
    const url = Server.url;
    const ac = authcode();

    return `${url}/tpa/v3/${userId}/${now}/${appId}@${filename}${ac}`;
  }
}
