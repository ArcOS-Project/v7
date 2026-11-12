import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IProcess } from "$interfaces/IProcess";
import type { IWaveKernel } from "$interfaces/IWaveKernel";
import type { IPrinter, IPrinterLock, KernelPrintOptions } from "$interfaces/modules/IPrinterKernelModule";
import { Kernel } from "$ts/env";
import { KernelModule } from "$ts/kernel/module";
import { CommandResult } from "$ts/result";
import { Sleep } from "$ts/sleep";
import { UUID } from "$ts/util/uuid";
import { Process } from "../stack/process/instance";
import { PrinterLock } from "./lock";

export class Printer extends KernelModule implements IPrinter {
  public static get TRANSACTION_TIMEOUT() {
    return 1000 * 60 * 5; // 5min
  }

  #printArea = document.querySelector<HTMLDivElement>("body > .kernel-print-area")!;
  #printerLock?: PrinterLock;
  #printerLockUuid?: string;
  #expiredUuid?: string;
  #lockTimeout?: NodeJS.Timeout;
  #oldDocumentTitle?: string;

  public get isLocked() {
    return !!this.#printerLock && !!this.#printerLockUuid;
  }

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  async _init(): Promise<void> {
    if (!this.#printArea) throw new Error("Print area not found");
  }

  public StartPrintTransaction<TProc extends IProcess = IProcess>(
    process: TProc,
    options: KernelPrintOptions
  ): ICommandResult<IPrinterLock<TProc>> {
    this.isKmod();
    Kernel.LogOperation("kmod", "printer", "StartPrintTransaction");

    if (this.#printerLock) {
      return CommandResult.Error(`Invalid operation. A transaction is already active for PID ${this.#printerLock.pid}.`);
    }

    if (!process || process._disposed || !(process instanceof Process)) {
      return CommandResult.Error(`Invalid operation. Process is non-existent or disposed`);
    }

    const uuid = UUID();
    const lockInstance = new PrinterLock(process, this, uuid, this.#printArea);

    this.#printerLockUuid = uuid;
    this.#printerLock = lockInstance;
    this.#expiredUuid = undefined;
    this.#lockTimeout = setTimeout(() => this.#ExpireTransaction(), Printer.TRANSACTION_TIMEOUT);
    lockInstance.SetOptions(process, options);

    return CommandResult.Ok(lockInstance);
  }

  public CancelPrintTransaction(lockUuid: string): ICommandResult {
    this.isKmod();
    Kernel.LogOperation("kmod", "printer", "CancelPrintTransaction");

    const validationResult = this.#ValidateLockUuid(lockUuid);
    if (!validationResult.success) return validationResult;

    this.#ReleaseLock();
    return CommandResult.Ok();
  }

  public async ProcessPrintTransaction(lockUuid: string, options: KernelPrintOptions): Promise<ICommandResult> {
    this.isKmod();
    Kernel.LogOperation("kmod", "printer", "ProcessPrintTransaction");

    const validationResult = this.#ValidateLockUuid(lockUuid);
    if (!validationResult.success) return validationResult;

    this.#PreparePrintArea(options);
    await Sleep(10);

    ///
    window.print();
    ///

    this.#ReleaseLock();
    return CommandResult.Ok();
  }

  #ReleaseLock() {
    this.isKmod();
    Kernel.LogOperation("kmod", "printer", "#ReleaseLock");
    this.#printerLockUuid = undefined;
    this.#printerLock = undefined;
    this.#ResetPrintArea();
    clearTimeout(this.#lockTimeout);
  }

  #ExpireTransaction() {
    if (!this.isLocked) return;
    Kernel.LogOperation("kmod", "printer", "#ExpireTransaction");
    this.#expiredUuid = this.#printerLockUuid!;
    this.#ReleaseLock();
  }

  #ResetPrintArea() {
    Kernel.LogOperation("kmod", "printer", "#ResetPrintArea");
    if (this.#oldDocumentTitle) {
      document.title = this.#oldDocumentTitle!;
    }

    this.#printArea.innerHTML = "";
    this.#oldDocumentTitle = undefined;
    this.#printArea.style.removeProperty("--kpo-zoom");
    this.#printArea.style.removeProperty("--kpo-whitespace");
    this.#printArea.style.removeProperty("--kpo-padding");
    this.#printArea.classList.remove("kpo-invert");
    this.#printArea.classList.remove("kpo-monospace");
  }

  #PreparePrintArea(options: KernelPrintOptions) {
    Kernel.LogOperation("kmod", "printer", "#PreparePrintArea");

    if (options.invert) {
      this.#printArea.classList.add("kpo-invert");
    }

    if (options.monospace) {
      this.#printArea.classList.add("kpo-monospace");
    }

    if (options.zoom) {
      this.#printArea.style.setProperty("--kpo-zoom", `${options.zoom}%`);
    }

    if (options.paddingPx) {
      this.#printArea.style.setProperty("--kpo-padding", `${options.paddingPx}px`);
    }

    if (options.whitespace) {
      this.#printArea.style.setProperty("--kpo-whitespace", options.whitespace);
    }

    if (options.documentTitle) {
      this.#oldDocumentTitle = `${document.title}`;
      document.title = options.documentTitle;
    }
  }

  #ValidateLockUuid(lockUuid: string) {
    Kernel.LogOperation("kmod", "printer", "#ValidateLockUuid");

    if (this.#expiredUuid === lockUuid) {
      return CommandResult.Error("The transaction expired.");
    }

    if (!this.isLocked) {
      return CommandResult.Error("No transaction is currently in-progress.");
    }

    if (this.#printerLockUuid !== lockUuid) {
      return CommandResult.Error("The transaction is not owned by you.");
    }

    return CommandResult.Ok();
  }
}
