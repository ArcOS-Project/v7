import type { ICommandResult } from "$interfaces/result";
import { DefaultCommandResultOptions, type CommandResultOptions } from "$types/result";
import { AxiosError } from "axios";
import { Log } from "./logging";

export class CommandResult<T = string> implements ICommandResult<T> {
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

  static Ok<T>(value: T, successMessage?: string) {
    Log(`CommandResult.Ok`, successMessage ?? "<no message>"); // DEBUG

    return new this<T>(value, { success: true, successMessage });
  }

  static Error<T = any>(errorMessage: string) {
    Log(`CommandResult.Error`, errorMessage ?? "<no message>"); // DEBUG

    return new this<T>(undefined, { errorMessage });
  }

  static AxiosError<T = any>(e: unknown, fallback: string = "Unknown error") {
    return new this<T>(undefined, { errorMessage: (e instanceof AxiosError ? e.response?.data?.e : `${e || ""}`) || fallback });
  }
}
