import type { ProcessHandler } from "$ts/process/handler";
import { Process } from "$ts/process/instance";
import type { ArcTerminal } from "..";

/**
 * strtok/xterm-readline 1.1.2
 *
 * a library for building command-line interfaces with XtermJS
 *
 * Ported to ArcOS by Izaak Kuipers on March 23rd 2025.
 *
 * ORIGINAL REPOSITORY: https://github.com/strtok/xterm-readline
 * COMMIT: cdb0940c98a4bad9388f9a44f8917fb00df2423c
 *
 * All rights belong to their respective authors.
 *
 * © IzKuipers 2025
 */
export class History extends Process {
  public entries: string[] = [];
  public maxEntries: number;
  public cursor = -1;
  private terminal: ArcTerminal | undefined;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, maxEntries: number, terminal?: ArcTerminal) {
    super(handler, pid, parentPid);

    this.maxEntries = maxEntries;
    this.terminal = terminal;
    this.name = `TerminalHistory[${this.pid}P:${maxEntries}M]`;
  }

  async start() {
    if (!this.terminal) {
      this.Log("Not running under ArcTerm, history disabled.");

      return false;
    }
  }

  public save() {
    const pref = this.terminal?.daemon?.preferences();

    if (!this.terminal || !pref) return;

    pref.appPreferences.ArcTerm ||= {};
    pref.appPreferences.ArcTerm.history = this.entries;

    this.terminal?.daemon?.preferences.set(pref);
  }

  public restore() {
    const pref = this.terminal?.daemon?.preferences();

    if (!this.terminal || !pref) return;

    pref.appPreferences.ArcTerm ||= {};

    if (!pref.appPreferences.ArcTerm.history) return undefined;

    this.entries = pref.appPreferences.ArcTerm.history;
  }

  public append(text: string) {
    if (!this.terminal) return undefined;

    this.resetCursor();
    if (!this.entries.includes(text)) {
      this.entries.unshift(text);
    } else {
      this.entries.splice(this.entries.indexOf(text), 1);
      this.entries.unshift(text);
    }
    if (this.entries.length > this.maxEntries) {
      this.entries.pop();
    }
    this.save();
  }

  public resetCursor() {
    this.cursor = -1;
  }

  public next(): string | undefined {
    if (!this.terminal) return undefined;

    if (this.cursor === -1) {
      return undefined;
    } else {
      this.cursor -= 1;
    }

    return this.entries[this.cursor];
  }

  public prev(): string | undefined {
    if (!this.terminal) return undefined;

    if (this.cursor + 1 >= this.entries.length) {
      return undefined;
    } else {
      this.cursor += 1;
    }

    return this.entries[this.cursor];
  }
}
