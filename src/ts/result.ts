import { DefaultCommandResultOptions, type CommandResultOptions } from "$types/result";
import { Log } from "./logging";

export class CommandResult<T = string> {
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
}
