import type { IProcess } from "$interfaces/IProcess";
import {
  PrintWhiteSpaceOptions,
  type IPrinter,
  type IPrinterLock,
  type KernelPrintOptions,
  type PrinterLockComponentProps,
} from "$interfaces/modules/IPrinterKernelModule";
import { mount, unmount, type Component } from "svelte";

export class PrinterLock<TProc extends IProcess = IProcess> implements IPrinterLock<TProc> {
  #process: TProc;
  #kmod: IPrinter;
  #uuid: string;
  #options: KernelPrintOptions = {};
  #printArea: HTMLDivElement;
  #componentMount?: Record<string, any>;

  constructor(process: TProc, kmod: IPrinter, uuid: string, printArea: HTMLDivElement) {
    this.#process = process;
    this.#kmod = kmod;
    this.#uuid = uuid;
    this.#printArea = printArea;
  }

  public SetOptions(process: TProc, options: KernelPrintOptions) {
    this.#ValidateProcess(process, "set the print options");

    if (options.whitespace && !PrintWhiteSpaceOptions.includes(options.whitespace)) {
      throw new Error(`Invalid white-space option '${options.whitespace}'`);
    }

    this.#options = options;
  }

  public LoadComponent(process: TProc, component: Component<PrinterLockComponentProps>) {
    this.#ValidateProcess(process);

    if (this.#componentMount) {
      throw new Error("Already mounted a Svelte component for this print lock");
    }

    this.#componentMount = mount(component, {
      target: this.#printArea,
      props: {
        lock: this,
        process,
      },
    });
  }

  public get pid() {
    return this.#process.pid;
  }

  public Cancel(process: TProc) {
    this.#ValidateProcess(process, "cancel the transaction");
    if (this.#componentMount) {
      unmount(this.#componentMount);
      this.#componentMount = undefined;
    }

    return this.#kmod.CancelPrintTransaction(this.#uuid);
  }

  public async Finalize(process: TProc) {
    this.#ValidateProcess(process, "finalize the transaction");

    const result = await this.#kmod.ProcessPrintTransaction(this.#uuid, this.#options);

    if (this.#componentMount) {
      unmount(this.#componentMount);
      this.#componentMount = undefined;
    }

    return result;
  }

  public GetPrintArea(process: TProc) {
    this.#ValidateProcess(process, "request print area");
    if (this.#componentMount) {
      throw new Error("GetPrintArea is not valid if the print area is Svelte");
    }

    return this.#printArea;
  }

  #ValidateProcess(process: TProc, doWhat = "perform operation") {
    if (!(process instanceof this.#process.constructor) || process.pid !== this.#process.pid) {
      throw new Error(`PrinterLock: Unauthorized source tried to ${doWhat}`);
    }
  }
}
