import { toForm } from "$ts/form";
import { Log } from "$ts/kernel/logging";
import { LogLevel } from "$types/logging";
import { AxiosError } from "axios";
import { Axios } from "../axios";

export async function LoginUser(identity: string, password: string) {
  Log("LoginUser", `Attempting to authenticate ${identity}`);

  try {
    const response = await Axios.post(
      `/login`,
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
  try {
    const response = await Axios.post(
      `/user`,
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
