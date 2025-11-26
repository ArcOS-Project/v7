import { AppProcess } from "$ts/apps/process";
import { Stack } from "$ts/env";
import { DefaultColors } from "$ts/terminal/store";
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

    this.setSource(__SOURCE__);
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
        background: "#0000",
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
      const parent = Stack.getProcess(this.parentPid);

      if (!parent || parent instanceof AppProcess) return;

      const children = Stack.getSubProcesses(this.parentPid);

      if (!children.size) Stack.kill(this.parentPid);
    });
  }

  //#endregion
}
