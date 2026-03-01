import { Backend } from "$ts/kernel/mods/server/axios";
import { Log } from "$ts/logging";
import { CommandResult } from "$ts/result";
import { toForm } from "$ts/util/form";
import { LogLevel } from "$types/logging";
import { AxiosError } from "axios";

export async function LoginUser(identity: string, password: string): Promise<CommandResult<string>> {
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

    if (response.status !== 200) return CommandResult.Error(response.data?.e ?? "Username or password is incorrect");

    return CommandResult.Ok(response.data.token);
  } catch (e) {
    const err = e as AxiosError;

    Log("LoginUser", "API request errored:\n" + err, LogLevel.error);

    return CommandResult.Error(err instanceof AxiosError ? (err.response?.data as any)?.e : `${e}` || "Unknown Message");
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
