import type { ISystemDispatch, IWaveKernel } from "$interfaces/kernel";
import { Kernel } from "$ts/env";
import { DefaultColors } from "$ts/terminal/store";
import { logItemToStr } from "$ts/util";
import type { SystemDispatchResult } from "$types/dispatch";
import { type LogItem } from "$types/logging";
import { FitAddon } from "@xterm/addon-fit";
import { Unicode11Addon } from "@xterm/addon-unicode11";
import { Terminal } from "@xterm/xterm";
import { KernelModule } from "../../module";
import { SystemOnlyDispatches } from "./store";

export class SystemDispatch extends KernelModule implements ISystemDispatch {
  public subscribers: Record<string, Record<number, (data: any) => void>> = {};

  //#region LIFECYCLE

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  //#endregion

  subscribe<T = any[]>(event: string, callback: (data: T) => void): number {
    this.isKmod();

    const id = Math.floor(Math.random() * 1e6);

    if (!this.subscribers[event]) this.subscribers[event] = {};

    if (this.subscribers[event][id]) return this.subscribe(event, callback); // get another ID

    if (!this.subscribers[event]) this.subscribers[event] = { [id]: callback };
    else this.subscribers[event][id] = callback;

    return id;
  }

  unsubscribeId(event: string, id: number) {
    this.isKmod();

    delete this.subscribers[event][id];
  }

  discardEvent(event: string) {
    this.isKmod();

    delete this.subscribers[event];
  }

  dispatch<T = any[]>(caller: string, data?: T, system = true): SystemDispatchResult {
    this.isKmod();

    const callers = this.subscribers[caller];

    if (!system && SystemOnlyDispatches.includes(caller)) {
      return "err_systemOnly";
    }

    if (!callers) return "err_unknownCaller";

    const callbacks = [...Object.values(callers)];

    for (const callback of callbacks) {
      callback(data);
    }

    return "success";
  }

  async _init(): Promise<void> {
    const term = new Terminal({
      allowProposedApi: true,
      allowTransparency: false,
      cursorStyle: "block",
      fontSize: 12,
      theme: {
        brightRed: DefaultColors.red,
        red: DefaultColors.red,
        brightGreen: DefaultColors.green,
        green: DefaultColors.green,
        brightYellow: DefaultColors.yellow,
        yellow: DefaultColors.yellow,
        brightBlue: DefaultColors.blue,
        blue: DefaultColors.blue,
        brightCyan: DefaultColors.cyan,
        cyan: DefaultColors.cyan,
        brightMagenta: DefaultColors.magenta,
        magenta: DefaultColors.magenta,
      },
      scrollback: 0,
    });

    const fitAddon = new FitAddon();
    const unicode11Addon = new Unicode11Addon();

    term.loadAddon(fitAddon);
    term.loadAddon(unicode11Addon);

    this.subscribe<[LogItem]>("kernel-log", ([data]) => {
      if (!target?.classList?.contains("visible")) return;
      term.write(logItemToStr(data) + "\r\n");
    });

    const target = document.querySelector<HTMLDivElement>("#kernelLog")!;

    term.open(target);
    fitAddon.fit();

    new ResizeObserver(() => fitAddon.fit()).observe(target);

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.shiftKey && e.altKey && e.key.toLowerCase() === "k") {
        target.classList.toggle("visible");

        if (target.classList.contains("visible")) {
          for (const line of Kernel.Logs) {
            term.writeln(logItemToStr(line));
          }
        } else {
          term.clear();
        }
      }
    });
  }
}
