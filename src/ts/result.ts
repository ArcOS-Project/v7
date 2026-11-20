import type { ICommandResult } from "$interfaces/ICommandResult";
import { LogLevel } from "$types/shared/logging";
import { DefaultCommandResultOptions, type CommandResultOptions } from "$types/shared/result";
import { AxiosError, type AxiosResponse } from "axios";
import { Log } from "./logging";
import { tryJsonStringify } from "./util/json";
import { formatBytes } from "./util/fs";

export class CommandResult<T = any> implements ICommandResult<T> {
  public result: T | undefined;
  public error?: Error;
  public errorMessage?: string;
  public successMessage?: string;
  public success = false;

  constructor(result?: T, options: CommandResultOptions = DefaultCommandResultOptions) {
    this.result = result;
    this.successMessage = options.successMessage;
    this.errorMessage = options.errorMessage;
    this.success = options.success ?? false;
  }

  static Ok<T>(value?: T, successMessage?: string) {
    return new this<T>(value, { success: true, successMessage });
  }

  static Error<T = any>(errorMessage: string) {
    Log(`CommandResult.Error`, errorMessage ?? "<no message>", LogLevel.error); // DEBUG

    return new this<T>(undefined, { errorMessage });
  }

  static FromResponse<T = any>(value: AxiosResponse<T>) {
    const size = formatBytes(tryJsonStringify(value.data, 0)?.length ?? 0);
    return CommandResult.Ok<T>(value.data, `status = ${value.status}, size = ${size}`);
  }

  static AxiosError<T = any>(e: unknown, fallback: string = "Unknown error") {
    return new this<T>(undefined, { errorMessage: (e instanceof AxiosError ? e.response?.data?.e : `${e || ""}`) || fallback });
  }
}
