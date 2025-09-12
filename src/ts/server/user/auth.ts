import { toForm } from "$ts/form";
import { Log } from "$ts/logging";
import { LogLevel } from "$types/logging";
import { AxiosError } from "axios";
import { Backend } from "../axios";

export async function LoginUser(identity: string, password: string) {
  Log("LoginUser", `Attempting to authenticate ${identity}`);

  try {
    const response = await Backend.post(
      `/login`,
      toForm({
        identity,
        password,
        userAgent: navigator.userAgent,
      })
    );

    return response.status === 200 ? response.data.token : undefined;
  } catch (e) {
    const err = e as AxiosError;

    Log("LoginUser", "API request errored:\n" + err, LogLevel.error);

    return undefined;
  }
}

export async function RegisterUser(username: string, email: string, password: string) {
  try {
    const response = await Backend.post(
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

    Log("RegisterUse", "API request errored:\n" + err, LogLevel.error);

    return false;
  }
}
