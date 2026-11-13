import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IProcess } from "$interfaces/IProcess";
import type { Component } from "svelte";
import type { IKernelModule } from "./IKernelModule";

export interface IPrinterKernelModule extends IKernelModule {
  get isLocked(): boolean;
  StartPrintTransaction<TProc extends IProcess = IProcess>(
    process: TProc,
    options: KernelPrintOptions
  ): ICommandResult<IPrinterLock<TProc>>;
  ProcessPrintTransaction(lockUuid: string, options: KernelPrintOptions): Promise<ICommandResult>;
  CancelPrintTransaction(lockUuid: string): ICommandResult;
}

export interface IPrinterLock<TProc extends IProcess = IProcess> {
  SetOptions(process: TProc, options: KernelPrintOptions): void;
  Cancel(process: TProc): ICommandResult;
  Finalize(process: TProc): Promise<ICommandResult>;
  GetPrintArea(process: TProc): HTMLDivElement;
  LoadComponent(process: TProc, component: Component<PrinterLockComponentProps<TProc>>): void;
}

export const PrintWhiteSpaceOptions = ["normal", "pre-wrap", "pre-line", "wrap", "collapse"] as const;
export type PrintWhiteSpaceType = (typeof PrintWhiteSpaceOptions)[number];

export interface KernelPrintOptions {
  paddingPx?: number;
  invert?: boolean;
  zoom?: number;
  documentTitle?: string;
  whitespace?: PrintWhiteSpaceType;
  monospace?: boolean;
}

export interface PrinterLockComponentProps<TProcess extends IProcess = IProcess> {
  lock: IPrinterLock<TProcess>;
  process: TProcess;
}
