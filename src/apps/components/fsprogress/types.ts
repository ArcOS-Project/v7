import type { IFsProgressRuntime } from "$interfaces/runtimes/IFsProgressRuntime";
import { Store } from "$ts/writable";
import type { ReadableStore } from "$types/shared/writable";

// !tpa
/**
 * An interface to keep track of filesystem operations. Used by FsProgress to communicate progress to its caller, as well as keeping track of its own internal state.
 * @see IFsProgressRuntime
 */
export interface FsProgressOperation {
  /**
   * The type of data we're tracking progress of.
   *
   * - quantity: amount of items (displays '1 / 10 items')
   * - size: amount of bytes (displays '10KB / 105KB')
   * - none: unknown (displays '1 / 10')
   */
  type: "quantity" | "size" | "none";
  /**
   * The icon to display
   */
  icon: string;
  /**
   * The header text of the FsProgress dialog
   */
  caption: string;
  /**
   * The text underneath the header
   */
  subtitle: string;
  /**
   * How much is already done
   */
  done: number;
  /**
   * How much has to be done in total
   */
  max: number;
  /**
   * A method to cancel the operation. When specified, the Cancel button becomes available, allowing the user to cancel the operation.
   * @returns nothing
   */
  cancel?: () => void;
  /**
   * A list of error messages to display after the operation is complete. Used by FsProgressFail
   * @see IFsProgressFailRuntime.
   */
  errors: string[];
}

/**
 * A set of functions that can be used to alter the state of an in-progress FsProgress dialog.
 */
export interface FileProgressMutator {
  /**
   * The current state of the progress. Can be used to change the state in ways that the functions can't provide.
   */
  progress: ReadableStore<FsProgressOperation>;
  /**
   * Mutates the max value by the specified amount. The max value is how much has to be done in total.
   * @param {number} mutator Amount to increment or decrement the max value.
   * @returns nothing
   */
  mutateMax: (mutator: number) => void;
  /**
   * Mutates the done value by the specified amount. The done value is how much has already been completed.
   * @param {number} mutator Amount to increment or decrement the done value.
   * @returns nothing
   */
  mutDone: (mutator: number) => void;
  /**
   * Adds an error to the FsProgress' internal error list. The error list will be passed on to FsProgressFail if it contains any items.
   * @see IFsProgressRuntime
   * @param {string} mutator The error message to append to the error list
   * @returns nothing
   */
  mutErr: (mutator: string) => void;
  /**
   * Sets the max value to the specified amount. The max value is how much has to be done in total.
   * @param {number} value The new max value.
   * @returns nothing
   */
  setMax: (value: number) => void;
  /**
   * Sets the done value to the specified amount. The done value is how much has already been completed.
   * @param {number} value The new done value.
   * @returns nothing
   */
  setDone: (value: number) => void;
  /**
   * Sets the list of FsProgress errors, overriding the existing error list.
   * @param {string[]} value The list of errors to set.
   * @returns nothing
   */
  setErrors: (value: string[]) => void;
  /**
   * Sets the cancel method of the progress. When set, the Cancel button becomes available, allowing the user to cancel the operation.
   * @param {(() => void) | undefined} cancel the Cancel method, or `undefined`.
   * @returns nothing
   */
  setCancel: (cancel: (() => void) | undefined) => void;
  /**
   * Sets the header caption of the FsProgress dialog
   * @param caption The new caption
   * @returns nothing
   */
  updateCaption: (caption: string) => void;
  /**
   * Sets the subtitle of the FsProgress dialog
   * @param subtitle The new subtitle
   * @returns nothing
   */
  updSub: (subtitle: string) => void;
  /**
   * Stops the FsProgress. Note that this will not abort the actual in-progress operation, it's purely for stopping and closing the dialog. Will invoke FsProgressFail if any errors are in the error list.
   * @returns nothing
   */
  stop: () => Promise<any>;
  /**
   * Makes the FsProgress dialog appear. When creating an FsProgress dialog, it doesn't initially show. It's only shown once this method is called.
   * @returns nothing
   */
  show: () => Promise<any>;
  /**
   * Sets the type of the filesystem progress. See {@link FsProgressOperation.type}.
   * @param type 
   * @returns 
   */
  setType: (type: "quantity" | "size" | "none") => void;
  /**
   * Gets the FsProgress' process, if available.
   * @returns {IFsProgressRuntime | undefined} The process
   */
  process: () => IFsProgressRuntime | undefined;
}
// !endtpa

export const DummyFileProgress: FileProgressMutator = {
  progress: Store<FsProgressOperation>(),
  mutateMax: (_: number) => {},
  mutDone: (_: number) => {},
  setMax: (_: number) => {},
  setDone: (_: number) => {},
  updateCaption: (_: string) => {},
  updSub: (_: string) => {},
  mutErr: (_: string) => {},
  setErrors: (_: string[]) => {},
  stop: async () => {},
  show: async () => {},
  setCancel: (_: (() => void) | undefined) => {},
  setType: (_: string) => {},
  process: () => undefined,
};
