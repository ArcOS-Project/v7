import axios from "axios";
import { ServerManager } from "..";
import { Log } from "$ts/kernel/logging";
import { LogLevel } from "$types/logging";
import { toForm } from "$ts/form";

export async function LoginUser(identity: string, password: string) {
  Log("LoginUser", `Attempting to authenticate ${identity}`);
  const url = ServerManager.url();

  try {
    const response = await axios.post(
      `${url}/login`,
      toForm({
        identity,
        password,
      })
    );

    return response.status === 200 ? response.data.token : undefined;
  } catch (e) {
    console.log(e);
    Log("LoginUser", "API request errored: " + e, LogLevel.error);

    return undefined;
  }
}
