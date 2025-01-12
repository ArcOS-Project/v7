import { toForm } from "$ts/form";
import { Log } from "$ts/kernel/logging";
import { LogLevel } from "$types/logging";
import axios, { AxiosError } from "axios";
import { ServerManager } from "..";

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
    const err = e as AxiosError;

    if (err.code === "ERR_NETWORK") throw e;

    Log("LoginUser", "API request errored: " + e, LogLevel.error);

    return undefined;
  }
}

export async function RegisterUser(
  username: string,
  email: string,
  password: string
) {
  const url = ServerManager.url();

  try {
    const response = await axios.post(
      `${url}/user`,
      toForm({
        username,
        password,
        email,
      })
    );

    return response.status === 200;
  } catch (e) {
    const err = e as AxiosError;

    if (err.code === "ERR_NETWORK") throw e;

    Log("RegisterUser", "API request errored: " + e, LogLevel.error);

    return false;
  }
}
