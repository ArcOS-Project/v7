import { AppProcess } from "$ts/apps/process";
import type { ProcessHandler } from "$ts/process/handler";
import type { AppProcessData } from "$types/app";
import { ClipboardAddon } from "@xterm/addon-clipboard";
import { FitAddon } from "@xterm/addon-fit";
import { ImageAddon } from "@xterm/addon-image";
import { Unicode11Addon } from "@xterm/addon-unicode11";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { Terminal } from "@xterm/xterm";

export class TerminalWindowRuntime extends AppProcess {
  term: Terminal | undefined;
  overridePopulatable: boolean = true;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);
  }

  async render() {
    const body = this.getBody();
    const term = new Terminal({
      allowProposedApi: true,
      allowTransparency: true,
      cursorStyle: "bar",
      fontSize: 15,
      fontFamily: "Source Code Pro",
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
}
