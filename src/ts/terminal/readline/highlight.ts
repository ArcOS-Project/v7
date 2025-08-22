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
export interface Highlighter {
  // Take the current line and cursor position and return a
  // highlighted version.
  highlight(line: string, pos: number): string;

  // Takes the prompt and returns the highlighted
  // version
  highlightPrompt(prompt: string): string;

  // Returns true if the character at the cursor position
  // should be highlited. This is used to optimize refresh
  // during insertion or character movement.
  highlightChar(line: string, pos: number): boolean;
}

export class IdentityHighlighter implements Highlighter {
  highlight(line: string, pos: number): string {
    return line;
  }
  highlightPrompt(prompt: string): string {
    return prompt;
  }
  highlightChar(line: string, pos: number): boolean {
    return false;
  }
}
