import { AppProcess } from "$ts/apps/process";
import { KernelStack } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import { ClipboardAddon } from "@xterm/addon-clipboard";
import { FitAddon } from "@xterm/addon-fit";
import { ImageAddon } from "@xterm/addon-image";
import { Unicode11Addon } from "@xterm/addon-unicode11";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { Terminal } from "xterm";

export class TerminalWindowRuntime extends AppProcess {
  term: Terminal | undefined;
  overridePopulatable: boolean = true;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);
  }

  async render() {
    const body = this.getBody();
    this.getWindow().classList.add("theme-dark");

    const term = new Terminal({
      allowProposedApi: true,
      allowTransparency: true,
      cursorStyle: "bar",
      fontSize: 13,
      fontFamily: "Source Code Pro",
      theme: {
        brightRed: "#ff7e7e",
        red: "#ff7e7e",
        brightGreen: "#82ff80",
        green: "#82ff80",
        brightYellow: "#ffe073",
        yellow: "#ffe073",
        brightBlue: "#96d3ff",
        blue: "#96d3ff",
        brightCyan: "#79ffd0",
        cyan: "#79ffd0",
        brightMagenta: "#d597ff",
        magenta: "#d597ff",
      },
      scrollback: 500,
    });

    const fitAddon = new FitAddon();
    const clipboardAddon = new ClipboardAddon();
    const imageAddon = new ImageAddon();
    const unicode11Addon = new Unicode11Addon();
    const webLinksAddon = new WebLinksAddon();

    this.term = term;

    term.loadAddon(fitAddon);
    term.loadAddon(clipboardAddon);
    term.loadAddon(imageAddon);
    term.loadAddon(unicode11Addon);
    term.loadAddon(webLinksAddon);
    term.open(body);
    fitAddon.fit();

    new ResizeObserver(() => fitAddon.fit()).observe(body);
  }

  protected async stop() {
    setTimeout(() => {
      const parent = KernelStack().getProcess(this.parentPid);

      if (!parent || parent instanceof AppProcess) return;

      const children = KernelStack().getSubProcesses(this.parentPid);

      if (!children.size) KernelStack().kill(this.parentPid);
    });
  }

  //#endregion
}
