import type { CommandResultOptions } from "$types/result";
import type { Constructs } from "./common";

export interface ICommandResult<T = string> {
  result: T | undefined;
  error?: Error;
  errorMessage?: string;
  successMessage?: string;
  success: boolean;
}

export interface ICommandResultConstructor extends Constructs<ICommandResult> {
  Ok<T>(value: T, successMessage?: string): ICommandResult<T>;
  Error<T = any>(errorMessage: string): ICommandResult<T>;

  new <T>(result?: T, options?: CommandResultOptions): ICommandResult<T>;
}
